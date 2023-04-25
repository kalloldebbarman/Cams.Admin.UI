import { InputRuleNameParameter } from "./input-rule-name-parameter-model.model";

export class InputRuleParameter {
  InputRuleParameter: InputRuleNameParameter[];
}
export class Rulelist {
  ruleName: string;
  expression: string;
  rule: Rulelist[]
}
