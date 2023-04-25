export class WorkFlowModel {
  workFlowDefinitionId: string
  workFlowInstanceId: string
  workFlowName: any
  workFlowDisplayName: string
  workFlowActivities: WorkFlowActivity[]
}

export class WorkFlowActivity {
  id: any
  name: string
  displayName: string
  branches: Branch[]
}

export class Branch {
  name: string
}
export class Status {
  name: string;
}
