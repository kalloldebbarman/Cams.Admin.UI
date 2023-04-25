import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule-job',
  templateUrl: './schedule-job.component.html',
  styleUrls: ['./schedule-job.component.scss'],
})
export class ScheduleJobComponent {
  jobGroup!: string;
  existingJobGroup!: string;
}
