import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CamsU.Admin.Ui';
  IsRuleParameter: boolean = true;
  Isworkflow: boolean = false;
  Istab: boolean = true;
 
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
 
  }
  selectTab(Ruleflow: boolean, rule: boolean) {
    if (Ruleflow) {
      this.Isworkflow = true;
      this.IsRuleParameter = false;
    }
    else {
      this.IsRuleParameter = true;
      this.Isworkflow = false;
     
    }

  }
  selectmenu() {
    this.Istab = false;
    this.IsRuleParameter = false;
    this.Isworkflow = false;
  };
  sideNavOpen: boolean = false;
  sideNavToggler() {
    this.sideNavOpen = !this.sideNavOpen
  }
 
}
