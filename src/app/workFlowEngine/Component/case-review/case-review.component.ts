import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { WorkFlowModel } from '../../Model/WorkFlow/work-flow-model.model';
import { WorkFlowApiService } from '../../Service/work-flow-api.service';
@Component({
  selector: 'app-case-review',
  templateUrl: './case-review.component.html',
  styleUrls: ['./case-review.component.scss']
})
export class CaseReviewComponent {
  CaseReview = this.fb.group({
    CaseId: new FormControl(''),
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    Address: new FormControl('', [Validators.required]),
    Amount: new FormControl('', [Validators.required]),
  })
  workflowdata: WorkFlowModel;
  constructor(
    private readonly fb: FormBuilder,
    private toastrService: ToastrService,
    private workflowservice: WorkFlowApiService
  ) { }
  ngOnInit(): void {
   
  }
  onSubmit() {
    //console.log(this.CaseReview.value);
    this.ExecuteTask();
    this.toastrService.success(
      'Record is saved successfully.',
      'Success!'
    );
  }
  ExecuteTask() {
    this.workflowservice.ExecuteWorkFlowTask().subscribe((data: WorkFlowModel) => {
      this.workflowdata = data;
    })
  }
}
