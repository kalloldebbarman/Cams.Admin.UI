import { Component, Input } from '@angular/core';
import { Status, WorkFlowModel } from '../../Model/WorkFlow/work-flow-model.model';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { WorkFlowApiService } from '../../Service/work-flow-api.service';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent {
  taskLists = ['Application in Progress', 'DPQA Review', 'Ready for DPQA Review', 'Supervisor Review', 'Supervisor Review', 'Inspection', 'Program Review', 'License Unit Review', 'Mailing', 'Process Refund'];
  status: boolean = false;
  showMenu: boolean = true;
  showJson: boolean = false;
  workflowdata: WorkFlowModel;
  taskstatus: Status[];
  stat: any;
  selectedIndex: number;
  IsSubmit: boolean = false;
  upcomingTaskName: string;
  constructor(
    private readonly fb: FormBuilder,
    private toastrService: ToastrService,
    private workflowservice: WorkFlowApiService,
    public activatedRoute: ActivatedRoute
  ) { }
  TaskDetailForms = this.fb.group({
    ActionByDept: new FormControl(''),
    ActionBy: new FormControl(''),
    Status: new FormControl('', [Validators.required]),
    Comments: new FormControl(''),
    StatusDate: new FormControl('')
  });
  ngOnInit(): void {
    let workFlow = localStorage.getItem("workflowdata");
    //this.GetTasks();
    //  console.log("workflow");
    this.workflowdata = workFlow == null ? this.workflowdata : JSON.parse(workFlow);
    this.clickEvent(0, this.workflowdata.workFlowActivities[0].name);
  //  console.log(this.workflowdata);
  }

  clickEvent(_index: number, name: string) {
    this.selectedIndex = _index;
    this.status = !this.status;
    var data = this.workflowdata.workFlowActivities.filter(x => x.name == name);
    this.taskstatus = data[0].branches;
    this.upcomingTaskName = name;
  }
  menuClick() {
    this.showMenu = !this.showMenu;
  }
  //ExecuteTask() {
  //  this.workflowservice.ExecuteWorkFlowTask().subscribe((data: WorkFlowModel) => {
  //    this.workflowdata = data;
  //  })
  //}
  SubmitTaskDetail() {
    // console.log(this.TaskDetailForms.get("Status")?.value);
    this.IsSubmit = true;
    this.stat = this.TaskDetailForms.get("Status")?.value;
    if (this.stat == null || this.stat == undefined)
      this.stat = "";
    else
      this.stat = this.stat;
   // console.log(this.stat);
    if (this.stat == "") {
      this.IsSubmit = false;
      this.toastrService.error("Please select the status", "Error");
      return;
    }
    //this.workflowservice.getWorkFlowTasks().subscribe((data: any) => {
    //  console.log(data);
    this.workflowservice.SignalExecute(this.workflowdata.workFlowInstanceId, this.stat, this.workflowdata.workFlowDefinitionId).subscribe((data: any) => {
      //console.log(data);
      if (data.success == true) {
        this.upcomingTaskName = data.upcomingTaskName;
       // console.log(this.workflowdata);
        var ind = this.workflowdata.workFlowActivities.findIndex(x => x.displayName === this.upcomingTaskName);
       // console.log("index" + ind);
        this.clickEvent(ind, this.workflowdata.workFlowActivities[ind].name);
        this.toastrService.success("Status Updated successfully", "Success");
      }
      else
        this.toastrService.error("Oops! Something went wrong,Please try again later", "Error");

      this.IsSubmit = false;
    })
    /* })*/
  }
}
