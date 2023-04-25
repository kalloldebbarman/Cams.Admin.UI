import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { WorkflowService } from '../../work-flow-configuration/workflow.service';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent {
  activityDefinition = "{}";
  workflowModel = "{}";
  dataAvailable = false;

  constructor(http: HttpClient, private workflowService: WorkflowService) {}

  ngOnInit() {
    this.workflowService.getWorkflow().subscribe(
      (result): void => {
        var activities = JSON.stringify(result.activity);
        var workflow = JSON.stringify(result.workflow);
        this.activityDefinition = activities;
        this.workflowModel = workflow;
        this.dataAvailable = true;
      },
      error => console.error(error)
    );
  }
}
