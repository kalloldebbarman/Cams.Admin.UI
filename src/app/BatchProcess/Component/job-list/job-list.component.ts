import { Component } from '@angular/core';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
})
export class JobListComponent {
  isAddJob: Boolean = false;
  Addjob() {
    this.isAddJob = true;
  }
}
