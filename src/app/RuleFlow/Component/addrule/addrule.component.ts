import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addrule',
  templateUrl: './addrule.component.html',
  styleUrls: ['./addrule.component.scss']
})
export class AddruleComponent implements OnInit {
  @Input() sections!: FormArray;
  @Input() rulecontrol!: FormGroup;
  @Input() newRuleForm!: FormGroup;
  @Input() sectionIndex!: number;
  @Input() catIndex!: number;
  @Input() NewLocalParamsForm!: FormArray;
  @Input() categories!: FormArray;
  //@Input() subSectionName!: string;
  //@Input() subSectionIndex!: number;
  //@Input() subSection!: FormGroup;

  displayStyle = "none";
  ExpressionForm: FormGroup;
  ExpressionFormdata: FormArray;
  opertor: string;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.InitExpression();
  }
  //Rules(): FormArray {
  //  return this.categories
  //    .at(this.catIndex)
  //    .get('Rulearray') as FormArray;
  //}
  removeRule() {
    this.sections.removeAt(this.sectionIndex);
  }

  GetRuleArray(): FormArray {
    return this.sections.at(this.sectionIndex).get('Rules') as FormArray;
  }

  addNewRule() {
    this.GetRuleArray().push(this.newRuleForm);
  }

  addLocalParams() {
    this.newlocalparam().push(this.NewLocalParamsForm);
  }
  newlocalparam(): FormArray {
    return this.sections.at(this.sectionIndex).get('LocalParams') as FormArray;
  }
  openPopup(expressionjson: any) {
    // console.log(expressionjson.length);
    // console.log(localStorage.getItem("ruleFlowId"));
    if (Number(localStorage.getItem("ruleFlowId")) > 0 && expressionjson.length > 0) {
      expressionjson.forEach((y: any) => {
        this.ExpressionControl().removeAt(y);
      });
      expressionjson.forEach((y: any) => {
        const expression = this.fb.group({
          InputName: new FormControl(y.InputName, [Validators.required]),
          Parameter: new FormControl(y.Parameter, [Validators.required]),
          Operator: new FormControl(y.Operator, [Validators.required]),
          Value1: new FormControl(y.Value1, [Validators.required]),
          Value2: new FormControl(y.Value2),
          AndOr: new FormControl(y.AndOr)
        });
        this.ExpressionControl().push(expression);
      })
    }

    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  InitExpression() {
    this.ExpressionForm = this.fb.group({
      Expression: this.fb.array([]),
    });
    this.AddExpression();
  }
  ExpressionControl(): FormArray {
    return this.ExpressionForm.get('Expression') as FormArray;
  }
  newExpression(): FormGroup {
    return this.fb.group({
      InputName: [''],
      Parameter: [''],
      Operator: [''],
      Value1: [''],
      Value2: [''],
      AndOr: ['']

    });
  }
  AddExpression() {
    this.ExpressionControl().push(this.newExpression());
  }
  removeExpression(catIndex: number) {
    this.ExpressionControl().removeAt(catIndex);

  }
  SaveExpression() {
    let exp = "";
    this.ExpressionForm.value.Expression.forEach((y: any) => {
      if (y.InputName != null && y.InputName.trim() != "") {
        if (y.Operator == "Between")
          exp = exp + "" + y.InputName + "." + y.Parameter + " " + y.Operator + " " + y.Value1 + " And " + y.Value2 + " " + y.AndOr + " ";
        else
          exp = exp + "" + y.InputName + "." + y.Parameter + "" + y.Operator + "" + y.Value1 + " " + y.Value2 + " " + y.AndOr + " ";
      }
      else
        if (y.Operator == "Between")
          exp = exp + "" + y.Parameter + " " + y.Operator + " " + y.Value1 + " And " + y.Value2 + " " + y.AndOr + " ";
        else
          exp = exp + "" + y.Parameter + "" + y.Operator + "" + y.Value1 + " " + y.Value2 + " " + y.AndOr + " ";
    });
    this.GetRuleArray()?.parent?.get("Expression")?.patchValue(exp.trim());
    this.GetRuleArray()?.parent?.get("ExpressionJson")?.patchValue(this.ExpressionForm.value.Expression);

    //console.log(this.ExpressionForm.value.Expression);
    //console.log(this.ExpressionFormdata.length);
    //this.ExpressionFormdata.push(this.ExpressionForm);
    this.displayStyle = "none";
    //console.log(this.ExpressionFormdata);
  }

  GetOperator(event: any) {
    this.opertor = event.target.value;
    //console.log(this.opertor);
  }
}
