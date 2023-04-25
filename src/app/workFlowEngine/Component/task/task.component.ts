import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { WorkFlowModel } from '../../Model/WorkFlow/work-flow-model.model';
import { WorkFlowApiService } from '../../Service/work-flow-api.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  //Task = this.fb.group({
  //  TaskName: new FormControl('', [Validators.required]),
  //  Status: new FormControl('', [Validators.required]),
  //})

  DueDate: string;
  TaskId: string;
  TaskName: string;// new FormControl('', [Validators.required]),
  CaseId: string;// new FormControl('', [Validators.required]),
  Status: string;// new FormControl('', [Validators.required]),
  StatusDate: string;// new FormControl('', [Validators.required]),
  FirstName: string;// new FormControl('', [Validators.required]),
  LastName: string;// new FormControl('', [Validators.required]),
  Amount: string;// new FormControl('', [Validators.required]),
  WorkFlowdata: WorkFlowModel[];
  WorkFlowtask: WorkFlowModel;
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  Task = this.fb.group({
    DueDate: new FormControl('', [Validators.required]),
    TaskId: new FormControl('', [Validators.required]),
    TaskName: new FormControl('', [Validators.required]),
    CaseId: new FormControl('', [Validators.required]),
    Status: new FormControl('', [Validators.required]),
    StatusDate: new FormControl('', [Validators.required]),
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    Amount: new FormControl('', [Validators.required]),
  })
  constructor(
    private readonly fb: FormBuilder,
    private toastrService: ToastrService,
    private workflowservice: WorkFlowApiService,
    private route: Router
  ) { }
  ngOnInit(): void {
    this.GetTasks();
  }
  onSubmit() {
    //console.log(this.Task.value);
    this.toastrService.success(
      'Record is saved successfully.',
      'Success!'
    );
  }
  GetTasks() {
    //console.log("Get Tasks");
    this.workflowservice.getWorkFlowTasks().subscribe((data: WorkFlowModel[]) => {
      this.WorkFlowdata = data;
      //localStorage.setItem("workflowdata", JSON.stringify(this.WorkFlowdata));
      //console.log(this.WorkFlowdata);
    })
   
  }
  GetTaskdata(workFlowInstanceId: string) {
    this.WorkFlowtask = this.WorkFlowdata.filter(x => x.workFlowInstanceId == workFlowInstanceId)[0];
    localStorage.setItem("workflowdata", JSON.stringify(this.WorkFlowtask));
    //this.route.navigate(["TaskDetail"]);
  }
  ViewTask(workFlowInstanceId: string) {
    //var data = this.WorkFlowdata.filter(x => x.workFlowDefinitionId == workFlowDefinitionId);
   /* console.log(workFlowInstanceId);*/
 
    this.DueDate = "11/03/2023";
    this.TaskId = workFlowInstanceId;
    var data = this.WorkFlowdata.filter(x => x.workFlowInstanceId == workFlowInstanceId);
    //console.log("data");
    //console.log(JSON.stringify(data));
    this.TaskName = data[0].workFlowActivities[0].name;
    this.CaseId = workFlowInstanceId;
    this.Status = "Approved";
    this.StatusDate = "10/03/2023";
    this.FirstName = "Anurag";
    this.LastName = "Verma";
    this.Amount = "100";
  
  }
}
