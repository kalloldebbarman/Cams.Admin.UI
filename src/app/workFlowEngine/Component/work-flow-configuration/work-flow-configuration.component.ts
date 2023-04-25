import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'work-flow-configuration',
  templateUrl: './work-flow-configuration.component.html',
  styleUrls: ['./work-flow-configuration.component.css']
})
export class WorkFlowConfigurationComponent
implements OnInit, AfterViewInit, OnDestroy {
  @Input()
  public activityDefinition: any;
  @Input()
  public workflowModel: any;
  @Output()
  public workflowModelChange = new EventEmitter();
  @ViewChild("wfhost")
  public wfhost: any;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.wfhost.nativeElement.addEventListener("workflowChanged", (e: any) =>
      this.workflowChange(e)
    );
  }

  ngOnDestroy() {
    this.wfhost.nativeElement.removeEventListener("workflowChanged");
  }

  workflowChange(event: any) {
    this.workflowModelChange.emit(event.detail);
  }
}
