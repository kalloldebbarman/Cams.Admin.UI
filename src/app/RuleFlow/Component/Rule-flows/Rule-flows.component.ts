import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import {
  LocalParam,
  Rule,
  Ruleflow,
  RuleFlowModel,
  RuleflowParamater,
} from '../../Model/RuleFlow/rule-flow.model';
import { RuleFlowService } from '../../Service/rule-flow.service';
@Component({
  selector: 'app-Rule-flows',
  templateUrl: './Rule-flows.component.html',
  styleUrls: ['./Rule-flows.component.scss'],
})
export class RuleFlowsComponent implements OnInit {
  RuleflowcategoryForm!: FormGroup;
  IsRuleSubmitEnable: boolean = false;
  IsRuleFormSubmit: boolean = false;
  showjson: boolean = false;
  RuleFlowdata: RuleFlowModel;
  ruleflow: RuleflowParamater;
  ruleFlowId: number = 0;
  ruleflowlist: RuleFlowModel[];
  selectedElement: any = { ruleFlowId: 0, ruleFlowName: '--Select--' };
  displaydelete:any='none';
  constructor(
    public fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private RuleService: RuleFlowService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.InitRuleFlowForm();
      this.GetRuleFlow();
  }
  InitRuleFlowForm() {
    this.RuleflowcategoryForm = this.fb.group({
      Ruleflow: this.fb.array([]),
    });
  }
  get f() {
    return this.RuleflowcategoryForm.controls;
  }
  RuleFlowControl(): FormArray {
    return this.RuleflowcategoryForm.get('Ruleflow') as FormArray;
  }

  newWorkFlow(): FormGroup {
    return this.fb.group({
      /* RuleFlowId: [0],*/
      WorkflowName: ['', Validators.required],
      Rules: this.fb.array([]),
      GlobalParams: this.fb.array([]),
    });
  }

  addWorkFlow() {
    this.IsRuleSubmitEnable = true;
    this.RuleFlowControl().push(this.newWorkFlow());
  }

  removeWorkFlow(catIndex: number) {
    this.RuleFlowControl().removeAt(catIndex);
    if (this.RuleFlowControl().length == 0) this.IsRuleSubmitEnable = false;
  }

  newRule(): FormGroup {
    return this.fb.group({
      RuleName: new FormControl('', [Validators.required]),
      Operator: new FormControl('', [Validators.required]),
      SuccessEvent: new FormControl('', [Validators.required]),
      ErrorMessage: new FormControl('', [Validators.required]),
      Expression: new FormControl(''),
      ExpressionJson: new FormControl(''),
      Enabled: new FormControl(true),
      Rules: this.fb.array([]),
      LocalParams: this.fb.array([]),
    });
  }

  newRuleForm(): FormGroup {
    return this.newRule();
  }

  onSubmit() {
    this.IsRuleFormSubmit = true;
    if (this.RuleflowcategoryForm.invalid) {
      return;
    }

    this.ruleflow = this.RuleflowcategoryForm.value as RuleflowParamater;
   
    let data: RuleFlowModel = {
      ruleFlowId: this.ruleFlowId, // this.ruleflow.Ruleflow[0].RuleFlowId,
      ruleFlowName: this.ruleflow.Ruleflow[0].WorkflowName,
      ruleFlowJson: JSON.stringify(this.ruleflow.Ruleflow[0]),
    };
  
    if (this.ruleFlowId > 0) {
      this.RuleService.UpdateRuleFlows(data, this.ruleFlowId).subscribe((response: any) => {
        //this.RuleflowcategoryForm.reset();
        this.ruleFlowId = 0;
        this.GetRuleFlow();
         this.Reset();
        this.toastrService.success(
          'Record is updated Successfully!',
          'Success!'
        );
        this.IsRuleFormSubmit = false;
      });
    } else {
      this.RuleService.SaveRuleFlows(data).subscribe((response: any) => {
       // this.RuleflowcategoryForm.reset();
        this.GetRuleFlow();
         this.Reset();
        this.toastrService.success('Record is saved Successfully!', 'Success!');
        this.IsRuleFormSubmit = false;
      });
    }
  }

  Rules(catIndex: number): FormArray {
    return this.RuleFlowControl().at(catIndex).get('Rules') as FormArray;
  }

  addNewRule(catIndex: number) {
    this.Rules(catIndex).push(this.newRule());
  }

  GlobalParam(catIndex: number): FormArray {
    return this.RuleFlowControl().at(catIndex).get('GlobalParams') as FormArray;
  }
  addGlobalParamSection(catIndex: number) {
    this.GlobalParam(catIndex).push(this.GlobalParamnewSection());
  }
  GlobalParamnewSection(): FormGroup {
    return this.fb.group({
      Name: new FormControl('', [Validators.required]),
      Expression: new FormControl('', [Validators.required]),
    });
  }
  DownloadJson() {
    let theJSON = JSON.stringify(this.RuleflowcategoryForm.value);
    let blob = new Blob([theJSON], { type: 'text/json' });
    let url = window.URL.createObjectURL(blob);
    let uri: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
    let x = this.sanitizer.sanitize(SecurityContext.URL, uri);
    const link = document.createElement('a');
    link.href = x ? x : '';
    link.setAttribute('download', 'Rules.json');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  NewLocalParamsForm(): FormGroup {
    return this.fb.group({
      Name: new FormControl('', [Validators.required]),
      Expression: new FormControl('', [Validators.required]),
    });
  }

  ImportRuleJson(event: any) {
    let selectedfile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(selectedfile, 'UTF-8');
    fileReader.onload = () => {
      var data = new Function('return[' + fileReader.result + '];')();
      this.SetRuleFlow(data[0].Ruleflow[0]);
    };
  }
  SetRuleFlow(data: Ruleflow) {
    this.InitRuleFlowForm();   
    const ad = this.fb.group({
      /*RuleFlowId: [ruleFlowId],*/
      WorkflowName: new FormControl(data.WorkflowName, [Validators.required]),
      Rules: this.fb.array([]),
      GlobalParams: this.fb.array([]),
    });
    let arr = <FormArray>ad.controls.Rules;
    data.Rules.forEach((y) => {
      const rule = this.fb.group({
        RuleName: new FormControl(y.RuleName, [Validators.required]),
        Operator: new FormControl(y.Operator, [Validators.required]),
        SuccessEvent: new FormControl(y.SuccessEvent, [Validators.required]),
        ErrorMessage: new FormControl(y.ErrorMessage, [Validators.required]),
        Expression: new FormControl(y.Expression),
        ExpressionJson: new FormControl(y.ExpressionJson),
        Enabled: new FormControl(y.Enabled),
        Rules: this.fb.array([]),
        LocalParams: this.fb.array([]),
      });
      arr.push(rule);

      let localarr = <FormArray>rule.controls.LocalParams;
      y.LocalParams.forEach((l) => {
        localarr.push(
          this.fb.group({
            Name: new FormControl(l.Name, [Validators.required]),
            Expression: new FormControl(l.Expression, [Validators.required]),
          })
        );
      });
      let rulearray = <FormArray>rule.controls.Rules;
      this.SetNestedRulesValue(rulearray, y);
    });
    let Globalarr = <FormArray>ad.controls.GlobalParams;
    data.GlobalParams.forEach((G) => {
      Globalarr.push(
        this.fb.group({
          Name: new FormControl(G.Name, [Validators.required]),
          Expression: new FormControl(G.Expression, [Validators.required]),
        })
      );
    });

    this.RuleFlowControl().push(ad);
    /* })*/
    this.IsRuleSubmitEnable = true;
  }

  SetNestedRulesValue(arr: FormArray, value: Rule) {
    return value.Rules.forEach((y) => {
      const rule = this.fb.group({
        RuleName: new FormControl(y.RuleName, [Validators.required]),
        Operator: new FormControl(y.Operator, [Validators.required]),
        SuccessEvent: new FormControl(y.SuccessEvent, [Validators.required]),
        ErrorMessage: new FormControl(y.ErrorMessage, [Validators.required]),
        Expression: new FormControl(y.Expression),
        ExpressionJson: new FormControl(y.ExpressionJson),
        Enabled: new FormControl(y.Enabled, [Validators.required]),
        Rules: this.fb.array([]),
        LocalParams: this.fb.array([]),
      });
      arr.push(rule);
      let localarr = <FormArray>rule.controls.LocalParams;
      y.LocalParams.forEach((l: LocalParam) => {
        localarr.push(
          this.fb.group({
            Name: new FormControl(l.Name, [Validators.required]),
            Expression: new FormControl(l.Expression, [Validators.required]),
          })
        );
      });
      let rulearray = <FormArray>rule.controls.Rules;
      this.SetNestedRulesValue(rulearray, y);
    });
  }
  showJson() {
    this.showjson = !this.showjson;
  }
  GetRuleFlow() {
    this.RuleService.getRuleFlows().subscribe((data: any) => {    
      this.ruleflowlist = data.value;     
    });
  }
  GetRuleFlowbyId(ruleflowid:number) {
    this.RuleService.getRuleFlowById(ruleflowid).subscribe((data: any) => {      
      this.SetRuleFlow(JSON.parse(data.value.ruleFlowJson));
    });
  }
  onChangeRuleFlow(ruleflowid: number) {
    this.ruleFlowId = ruleflowid;
    localStorage.setItem("ruleFlowId", this.ruleFlowId.toString());
    if (this.ruleFlowId > 0) {
      this.GetRuleFlowbyId(ruleflowid);
    }
    else {
      this.ruleFlowId=0
     // this.RuleflowcategoryForm.reset();
      this.Reset();
    }
  }
  Reset() {
    this.IsRuleSubmitEnable = false;
    this.InitRuleFlowForm();
    this.selectedElement = { ruleFlowId: 0, ruleFlowName: '--Select--' };
  }

  
  ConfirmDelete(ruleFlowId: number) {    
    this.RuleService.DeleteRuleFlows(ruleFlowId).subscribe((data: any) => {
      this.displaydelete='none';
      this.toastrService.success("Record is deleted Successfully", "Success");      
       this.Reset();
       this.GetRuleFlow();
    })
  }
  OpenDelete(){
     this.displaydelete = "block";
  }
  closedeletePopup(){
      this.displaydelete='none';
  }
}
