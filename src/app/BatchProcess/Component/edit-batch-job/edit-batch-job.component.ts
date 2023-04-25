import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-batch-job',
  templateUrl: './edit-batch-job.component.html',
  styleUrls: ['./edit-batch-job.component.scss'],
})
export class EditBatchJobComponent implements OnInit {
  workFlow!: string;
  constructor() {}

  ngOnInit(): void {}
}
