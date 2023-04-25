import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchDashboardComponent } from './BatchProcess/Component/batch-dashboard/batch-dashboard.component';
import { CreateTriggerComponent } from './BatchProcess/Component/create-trigger/create-trigger.component';
import { JobConfigurationComponent } from './BatchProcess/Component/job-configuration/job-configuration.component';
import { JobListComponent } from './BatchProcess/Component/job-list/job-list.component';
import { SchedulerDashBoardComponent } from './BatchProcess/Component/scheduler-dash-board/scheduler-dash-board.component';
import { TriggerListComponent } from './BatchProcess/Component/trigger-list/trigger-list.component';
import { CommunicationComponent } from './communication/Component/communication.component';
import { SmtpComponent } from './communication/Component/smtp/smtp.component';
import { InputRulesComponent } from './RuleFlow/Component/input-rules/input-rules.component';
import { RuleFlowsComponent } from './RuleFlow/Component/Rule-flows/Rule-flows.component';
import { CodedValueComponent } from './Settings/Component/coded-value/coded-value.component';
import { AngulardesignerComponent } from './workFlowEngine/Component/angulardesigner/angulardesigner.component';
import { CaseReviewComponent } from './workFlowEngine/Component/case-review/case-review.component';
import { RazordesignerComponent } from './workFlowEngine/Component/razordesigner/razordesigner.component';
import { TaskDetailComponent } from './workFlowEngine/Component/task-detail/task-detail.component';
import { TaskComponent } from './workFlowEngine/Component/task/task.component';
//import { WorkFlowConfigurationComponent } from './workFlowEngine/Component/work-flow-configuration/work-flow-configuration.component';
import { WorkflowComponent } from './workFlowEngine/Component/work-flow/workflow/workflow.component';



const routes: Routes = [{
  path: '',
  redirectTo: 'RuleFlow',
  pathMatch: 'full'
},
{ path: 'BatchProcess', component: BatchDashboardComponent },
{ path: 'JobConfiguration', component: JobConfigurationComponent },
{ path: 'Totaljob', component: JobListComponent },
{ path: 'SMTP', component: SmtpComponent },
  { path: 'CreateTrigger', component: CreateTriggerComponent },
  { path: 'AngularEngine', component: AngulardesignerComponent },
  { path: 'RazorEngine', component: RazordesignerComponent },
  { path: 'CaseReview', component: CaseReviewComponent },
  { path: 'Task', component: TaskComponent },
  { path: 'TaskDetail', component: TaskDetailComponent },
  { path: 'CodedValue', component: CodedValueComponent},
/*{ path: 'Dashboard', component: DashboardComponent },*/
{
  path: '',
  component: CommunicationComponent,
  data: {
    title: 'Communication'
  },
  children: [
    {
      path: 'Communication',
      loadChildren: () =>
        import('./communication/communication.module').then((m) => m.CommunicationModule)
    }
  ]
},
{
  path: '',
  component: RuleFlowsComponent,
  data: {
    title: 'RuleFlow'
  },
  children: [
    {
      path: 'RuleFlow',
      loadChildren: () =>
        import('./RuleFlow/rule-flow.module').then((m) => m.RuleFlowModule)
    }
  ]
},
{
  path: '',
  component: InputRulesComponent,
  data: {
    title: 'InputRuleParameter'
  },
  children: [
    {
      path: 'InputRuleParameter',
      loadChildren: () =>
        import('./RuleFlow/rule-flow.module').then((m) => m.RuleFlowModule)
    }
  ]
  },
  { path: 'workFlow', component: WorkflowComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
