import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
import { MasterData } from '../../Model/createtrigger-model.model';

@Component({
  selector: 'app-create-trigger',
  templateUrl: './create-trigger.component.html',
  styleUrls: ['./create-trigger.component.scss'],
})
export class CreateTriggerComponent {
  //workFlow!: string;
  //triggerGroup!: string;
  //misfireInstruction!: string;
  //priority!: string;
  //type!: string;
  //unit!: string;
  //calendar!: string;
  TriggerForms = this.fb.group({
    triggerId: new FormControl('0'),
    Type: new FormControl('cron', [Validators.required]),
    Job: new FormControl(''),
    TriggerName: new FormControl(''),
    TriggerGroup: new FormControl(''),
    Description: new FormControl(''),
    StartTimeUtc: new FormControl(''),
    EndTimeUtc: new FormControl(''),
    CalendarName: new FormControl(''),
    Priority: new FormControl(''),
    MisfireInstruction: new FormControl(''),
    Simple: this.fb.group({
      RepeatInterval: new FormControl(''),
      RepeatUnit: new FormControl(''),
      RepeatCount: new FormControl(),
      RepeatForever: new FormControl(false),
    }),
    Daily: this.fb.group({
      RepeatInterval: new FormControl(''),
      RepeatUnit: new FormControl(''),
      RepeatCount: new FormControl(''),
      RepeatForever: new FormControl(false),
      StartTime: new FormControl(''),
      EndTime: new FormControl(''),
      TimeZone: new FormControl(''),
      Monday: new FormControl(false),
      Tuesday: new FormControl(false),
      Wednesday: new FormControl(false),
      Thursday: new FormControl(false),
      Friday: new FormControl(false),
      Saturday: new FormControl(false),
      Sunday: new FormControl(false),
    }),
    Cron: this.fb.group({
      Expression: new FormControl(''),
      TimeZone: new FormControl(''),
    }),
    Calendar: this.fb.group({
      RepeatInterval: new FormControl(''),
      RepeatUnit: new FormControl(''),
      TimeZone: new FormControl(''),
      PreserveHourAcrossDst: new FormControl(false),
      SkipDayIfHourDoesNotExist: new FormControl(false),
    }),
    jobParameters: this.fb.array([]),
  });
  masterData: MasterData;
  triggerType: string;
  isCron: boolean = true;
  isSimple: boolean = false;
  isDaily: boolean = false;
  isCalendar: boolean = false;
  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.addNewJobParam(0);
    this.GetMasterdata();
  }
  GetMasterdata() {
    let Json: MasterData = {
      jobs: [
        { JobName: 'CRITICAL' },
        { JobName: 'DEFAULT' },
      ],
      triggerGroups: [
        { TriggerGroupName: 'Group1' },
        { TriggerGroupName: 'Group2' },
      ],
      calendars: [
        { CalendarName: 'Calendar1' },
        { CalendarName: 'Calendar2' },
      ],
      misfireInstructions: [
        { MisfireInstructions: 'Instruction1' },
        { MisfireInstructions: 'Instruction2' },
      ],
      timeUnit: [
        { Unit: 'seconds' },
        { Unit: 'minutes' },
        { Unit: 'hours' },
      ],
      timeZones: [
        { TimeZone: '(UTC+5:30)Chennai, Kolkata' },
        { TimeZone: 'UTC' },
      ],
      types: [
        { TypeId: 1, TypeName: 'Integer' },
        { TypeId: 2, TypeName: 'String' },
        { TypeId: 3, TypeName: 'Boolean' },
      ],
    };
    this.masterData = Json;
    // console.log(JSON.stringify(this.masterdata.jobGroup));
  }
  addJobParam() {
    return this.fb.group({
      parameterName: new FormControl('', [Validators.required]),
      value: new FormControl('', [Validators.required]),
      paramTypeId: new FormControl('', [Validators.required]),
      paramTypeName: new FormControl(''),
    });
  }
  addNewJobParam(empIndex: number) {
    this.inputcontrol.push(this.addJobParam());
  }
  getJobParams(inputIndex: number): FormArray {
    return this.inputcontrol.at(inputIndex) as FormArray;
  }
  get inputcontrol() {
    return this.TriggerForms.controls['jobParameters'] as FormArray;
  }
  removeParam(inputIndex: number, paramIndex: number) {
    this.getJobParams(inputIndex).removeAt(paramIndex);
  }
  triggerTypeChange(event: any) {
    this.isCron = false;
    this.isDaily = false;
    this.isSimple = false;
    this.isCalendar = false;
    this.triggerType = event.target.value;
    if (this.triggerType == "cron") {
      this.isCron = true;
    }
    else if (this.triggerType == "simple") {
      this.isSimple = true;
    }
    else if (this.triggerType == "daily") {
      this.isDaily = true;
    }
    else {
      this.isCalendar = true;
    }
  }
  onSubmit() {
    console.log(this.TriggerForms.value);
  }
}
