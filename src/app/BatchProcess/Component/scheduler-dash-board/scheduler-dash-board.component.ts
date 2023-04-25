import { Component } from '@angular/core';

@Component({
  selector: 'app-scheduler-dash-board',
  templateUrl: './scheduler-dash-board.component.html',
  styleUrls: ['./scheduler-dash-board.component.scss']
})
export class SchedulerDashBoardComponent {
  isAddJob: Boolean = false;
  Addjob() {
    this.isAddJob = true;
  }
}
