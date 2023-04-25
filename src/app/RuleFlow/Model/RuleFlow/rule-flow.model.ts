//export class RuleFlow {
//}
/*declare module RuleFlowModel {*/

export interface LocalParam {
  Name: string;
  Expression: string;
}

export interface Rule {
  RuleName: string;
  Operator: string;
  SuccessEvent: string;
  ErrorMessage: string;
  Expression: string;
  ExpressionJson: any[];
  Enabled: boolean;
  Rules: any[];
  LocalParams: LocalParam[];
}

export interface GlobalParam {
  Name: string;
  Expression: string;
}

export interface Ruleflow {
  /*RuleFlowId: number*/
  WorkflowName: string;
  Rules: Rule[];
  GlobalParams: GlobalParam[];
}

export interface RuleflowParamater {
  Ruleflow: Ruleflow[];
}
export class RuleFlowModel {
  ruleFlowId: number;
  ruleFlowName: string;
  ruleFlowJson: string;
}

