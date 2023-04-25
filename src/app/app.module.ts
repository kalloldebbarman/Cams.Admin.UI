import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HttpClientModule } from '@angular/common/http';
import { InputRulesComponent } from './RuleFlow/Component/input-rules/input-rules.component';
import { RuleFlowsComponent } from './RuleFlow/Component/Rule-flows/Rule-flows.component';
import { AddParameterComponent } from './RuleFlow/Component/add-parameter/add-parameter.component';
import { CommunicationComponent } from './communication/Component/communication.component';
import { AddruleComponent } from './RuleFlow/Component/addrule/addrule.component';
import { LocalParamComponent } from './RuleFlow/Component/local-param/local-param.component';
import { GlobalParamComponent } from './RuleFlow/Component/global-param/global-param.component';
import { EditBatchJobComponent } from './BatchProcess/Component/edit-batch-job/edit-batch-job.component';
import { AddBatchJobParameterComponent } from './BatchProcess/Component/add-batch-job-parameter/add-batch-job-parameter.component';
import { SchedulerDashBoardComponent } from './BatchProcess/Component/scheduler-dash-board/scheduler-dash-board.component';
import { ScheduleJobComponent } from './BatchProcess/Component/schedule-job/schedule-job.component';
import { JobListComponent } from './BatchProcess/Component/job-list/job-list.component';
import { CommunicationModule } from './communication/communication.module';
import { RuleFlowModule } from './RuleFlow/rule-flow.module';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { SideNavComponent } from './Layout/side-nav/side-nav.component';
import { RightMenuComponent } from './Layout/right-menu/right-menu.component';
import { TriggerListComponent } from './BatchProcess/Component/trigger-list/trigger-list.component';
import { CreateTriggerComponent } from './BatchProcess/Component/create-trigger/create-trigger.component';
import { BatchDashboardComponent } from './BatchProcess/Component/batch-dashboard/batch-dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';

import { WorkFlowConfigurationComponent } from './workFlowEngine/Component/work-flow-configuration/work-flow-configuration.component';
import { WorkflowService } from './workFlowEngine/Component/work-flow-configuration/workflow.service';
import { WorkflowComponent } from './workFlowEngine/Component/work-flow/workflow/workflow.component';
import { JobConfigurationComponent } from './BatchProcess/Component/job-configuration/job-configuration.component';
import { RazordesignerComponent } from './workFlowEngine/Component/razordesigner/razordesigner.component';
import { AngulardesignerComponent } from './workFlowEngine/Component/angulardesigner/angulardesigner.component';
import { SmtpComponent } from './communication/Component/smtp/smtp.component';
import { CaseReviewComponent } from './workFlowEngine/Component/case-review/case-review.component';
import { TaskComponent } from './workFlowEngine/Component/task/task.component';
import { TaskDetailComponent } from './workFlowEngine/Component/task-detail/task-detail.component';
import { CodedValueComponent } from './Settings/Component/coded-value/coded-value.component';
import { LookupComponent } from './Settings/Component/lookup/lookup.component';
import { ValidateRuleComponent } from './RuleFlow/Component/input-rules/validate-rule/validate-rule.component';

@NgModule({
  declarations: [
    AppComponent,
    InputRulesComponent,
    RuleFlowsComponent,
    AddParameterComponent,
    CommunicationComponent,
    AddruleComponent,
    LocalParamComponent,
    EditBatchJobComponent,
    AddBatchJobParameterComponent,
    SchedulerDashBoardComponent,
    ScheduleJobComponent,
    JobListComponent,
    GlobalParamComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    RightMenuComponent,
    TriggerListComponent,
    CreateTriggerComponent,
    BatchDashboardComponent,
    SmtpComponent,
    WorkFlowConfigurationComponent,
    WorkflowComponent,
    JobConfigurationComponent,
    RazordesignerComponent,
    AngulardesignerComponent,
    CaseReviewComponent,
    TaskComponent,
    TaskDetailComponent,
    CodedValueComponent,
    LookupComponent,
    ValidateRuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommunicationModule,
    RuleFlowModule,
    CKEditorModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 15000, // 15 seconds
      closeButton: true,
      progressBar: true,
    }),
  ],
  providers: [WorkflowService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
