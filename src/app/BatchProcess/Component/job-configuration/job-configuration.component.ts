import { Component, HostListener, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MasterData,
  TemplateList,
} from '../../Model/job-configuration-model.model';
import { JobConfigurationModel } from '../../Model/job-configuration-model.model';
import { JobconfigurationService } from '../../Service/jobconfiguration.service';

@Component({
  selector: 'app-job-configuration',
  templateUrl: './job-configuration.component.html',
  styleUrls: ['./job-configuration.component.scss'],
})
export class JobConfigurationComponent implements OnInit {
  CreateJobForm = this.fb.group({
    jobName: new FormControl('', [Validators.required]),
    newJobGroupName: new FormControl('', [Validators.required]),
    jobGroupId: new FormControl('', [Validators.required]),
    Group: new FormControl('', [Validators.required]),
    classTypeId: new FormControl('', [Validators.required]),
    Type: new FormControl('', [Validators.required]),
    serverId: new FormControl('', [Validators.required]),
    serverName: new FormControl('', [Validators.required]),
    continuationOfId: new FormControl('', [Validators.required]),
    continuationOf: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    recovery: new FormControl(false, [Validators.required]),
    isNew: new FormControl(true, [Validators.required]),
    jobParameters: this.fb.array([]),
    //Group: new FormControl('group1', [Validators.required]),
    // Type: new FormControl('Gcom.Framework.BatchJob.Jobs.SendEmailJob', [
    // Validators.required,
    //]),
  });

  masterdata: MasterData;
  templates: TemplateList;
  JobConfigurationData: JobConfigurationModel = new JobConfigurationModel();
  batchJobName: string;
  description: string;
  jobGroupId: string;
  classTypeId: string;
  paramTypeId: string;
  constructor(
    private readonly fb: FormBuilder,
    public JobConfigService: JobconfigurationService
  ) {}
  jobGroup: string;
  class: string;
  type: string;
  existingJobGroup!: string;
  showNewGroup: boolean = false;
  showDropDownOption: boolean = false;
  showCreateTrigger: boolean = false;
  isNew = true;
  ngOnInit(): void {
    this.GetMasterdata();
    this.addNewJobParam(0);
  }
  addJobParam() {
    return this.fb.group({
      Name: new FormControl('', [Validators.required]),
      value: new FormControl('', [Validators.required]),
      paramTypeId: new FormControl('', [Validators.required]),
      SelectedType: new FormControl(''),
    });
  }
  addNewJobParam(empIndex: number) {
    this.inputcontrol.push(this.addJobParam());
  }
  getJobParams(inputIndex: number): FormArray {
    return this.inputcontrol.at(inputIndex) as FormArray;
  }
  get inputcontrol() {
    return this.CreateJobForm.controls['jobParameters'] as FormArray;
  }
  GetMasterdata() {
    let Json: MasterData = {
      jobGroup: [
        { jobGroupId: 1, jobGroupName: 'CRITICAL' },
        { jobGroupId: 2, jobGroupName: 'DEFAULT' },
      ],
      classType: [
        {
          classTypeId: 1,
          classTypeName: 'Gcom.Framework.BatchJob.Jobs.SendEmailJob',
        },
        {
          classTypeId: 2,
          classTypeName: 'Gcom.Framework.BatchJob.Jobs.RecertificationJob',
        },
      ],
      server: [
        { serverId: 1, serverName: 'Server1' },
        { serverId: 2, serverName: 'Server2' },
      ],
      continuationOf: [
        { continuationOfId: 1, continuationOf: 'jobs1' },
        { continuationOfId: 2, continuationOf: 'jobs2' },
      ],
      paramType: [
        { paramTypeId: 1, paramTypeName: 'String' },
        { paramTypeId: 2, paramTypeName: 'Int' },
      ],
    };
    this.masterdata = Json;
    this.batchJobName = 'TestJob1';
    this.description = 'Test job description';
    // console.log(JSON.stringify(this.masterdata.jobGroup));
  }
  addNewGroup() {
    this.showNewGroup = true;
    this.isNew = false;
  }
  showDropdown(event: MouseEvent) {
    this.showDropDownOption = !this.showDropDownOption;
    event.stopPropagation();
  }
  AddTrigger() {
    const link = document.createElement('a');
    link.href = '/CreateTrigger';
    // link.setAttribute('routerLink', '/CreateTrigger');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  SaveAndRoute() {
    this.JobConfigurationData = this.CreateJobForm
      .value as JobConfigurationModel;
    console.log('test');
    console.log(this.JobConfigurationData);
    // alert('saved');
    this.SaveJobConfigurationData();
    // this.AddTrigger();
  }
  @HostListener('document:click', ['$event']) onDocumentClick(
    event: MouseEvent
  ) {
    this.showDropDownOption = false;
  }
  SaveJobConfigurationData() {
    // console.log("savedata" + JSON.stringify(this.Communicationdata));
    this.JobConfigService.SaveJobConfiguration(
      this.JobConfigurationData
    ).subscribe((data: any) => {
      // console.log("Save response" + JSON.stringify(data));
      // if (data == -1) {
      //   alert('Template with the same name already Exists');
      // } else {
      //   alert('Template saved successfully');
      // }
      // this.GetTemplates('', 1, this.rowsPerPage);
    });
  }
}
