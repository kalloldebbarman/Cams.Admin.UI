import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Rulelist } from '../../../Model/InputRuleParameter/input-rule-parameter-model.model';

@Component({
  selector: 'app-validate-rule',
  templateUrl: './validate-rule.component.html',
  styleUrls: ['./validate-rule.component.scss']
})
export class ValidateRuleComponent {
  @Input() rules!: Rulelist;
  @Input() ruleIndex!: number;
  @Input() inputForms!: FormGroup;
  ngOnInit(): void {
    //console.log("validate rule");
    //console.log(this.rules);
    //console.log(this.ruleIndex);
  }
  ValidateRule(ruleName: string, ruleIndex: number) {
    console.log(ruleName + " " + ruleIndex);
    console.log(this.inputForms);

  }
}
