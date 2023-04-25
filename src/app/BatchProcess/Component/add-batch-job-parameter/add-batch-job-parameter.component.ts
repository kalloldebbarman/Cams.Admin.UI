import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-batch-job-parameter',
  templateUrl: './add-batch-job-parameter.component.html',
  styleUrls: ['./add-batch-job-parameter.component.scss'],
})
export class AddBatchJobParameterComponent {
  workFlow!: string;
  constructor() {}
  @Input() section!: FormGroup;

  ngOnInit(): void {}
}
