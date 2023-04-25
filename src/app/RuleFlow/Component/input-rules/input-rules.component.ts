import { Component, SecurityContext } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { InputRuleParameter, Rulelist } from '../../Model/InputRuleParameter/input-rule-parameter-model.model';
import { RuleFlowModel } from '../../Model/RuleFlow/rule-flow.model';
import { RuleFlowService } from '../../Service/rule-flow.service';


@Component({
  selector: 'app-input-rules',
  templateUrl: './input-rules.component.html',
  styleUrls: ['./input-rules.component.scss']
})
export class InputRulesComponent {

  selectedFile: File
  showjson: boolean = false;
  inputForms = this.fb.group({
    InputRuleParameter: this.fb.array([])
  })
  IsAddInputRule: boolean = false;
  ruleflowlist: RuleFlowModel[];
  rulelist: Rulelist[];
  ValidageRuleflowcategoryForm!: FormGroup;
  constructor(private readonly fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private RuleService: RuleFlowService) {
  }
  ngOnInit(): void {
    this.GetRuleFlow();
  }

  get inputcontrol() {
    return this.inputForms.controls["InputRuleParameter"] as FormArray;
  }
  getparams(inputIndex: number): FormArray {
    return this.inputcontrol
      .at(inputIndex)
      .get('Parameters') as FormArray;

  }
  addNewinput() {
    const ad = this.fb.group({
      InputName: new FormControl('', [Validators.required]),
      Parameters: this.fb.array([this.addparam()])
    });
    this.inputcontrol.push(ad);
  }

  addparam() {
    return this.fb.group({
      Name: new FormControl('', [Validators.required]),
      Value: new FormControl('', [Validators.required]),
    });

  }
  addNewparam(empIndex: number) {
    /*const para = this.addparam();*/
    //const para = this.fb.group({
    //  paramkey: new FormControl('', [Validators.required]),
    //  paramvalue: new FormControl('', [Validators.required])
    //});
    this.getparams(empIndex).push(this.addparam());
  }

  removeInput(inputIndex: number) {
    this.inputcontrol.removeAt(inputIndex);
  }
  removeParam(inputIndex: number, paramIndex: number) {
    this.getparams(inputIndex).removeAt(paramIndex);
  }
  onSubmit() {
    if (this.inputForms.invalid) {
      return;
    }
    console.log(this.inputForms.value);
    alert("submit the data successfull ,check the console to verify");
  }
  AddInputRule() {
    this.IsAddInputRule = true;
    this.addNewinput();
  }
  NewInputRule() {
    this.IsAddInputRule = false;
    this.inputForms = this.fb.group({
      InputRuleParameter: this.fb.array([])
    });
  }
  generateDownloadJsonUri() {
    let theJSON = JSON.stringify(this.inputForms.value);
    let blob = new Blob([theJSON], { type: 'text/json' });
    let url = window.URL.createObjectURL(blob);
    let uri: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
    let x = this.sanitizer.sanitize(SecurityContext.URL, uri);
    // console.log(uri);
    const link = document.createElement('a');
    link.href = x ? x : "";
    link.setAttribute('download', 'test.json');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  onFileSelected(event: { target: { files: File[]; }; }) {
    this.selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(this.selectedFile, "UTF-8");
    fileReader.onload = () => {
      var data = new Function("return [" + fileReader.result + "];")()
      this.importJsontoForm(<InputRuleParameter>data[0]);
    }
    fileReader.onerror = (error) => {
      console.log(error);
    }
  }

  importJsontoForm(data: InputRuleParameter) {
    data.InputRuleParameter.forEach((value) => {
      const ad = this.fb.group({
        InputName: new FormControl(value.InputName, [Validators.required]),
        Parameters: this.fb.array([])
      });
      let arr = <FormArray>ad.controls.Parameters;
      value.Parameters.forEach(y => {
        arr.push(this.fb.group({
          Name: new FormControl(y.Name, [Validators.required]),
          Value: new FormControl(y.Value, [Validators.required]),
        }))
      })
      //console.log(ad);
      this.inputcontrol.push(ad);
      this.IsAddInputRule = true;
    })
  }
  showJson() {
    this.showjson = !this.showjson;
  }
  GetRuleFlow() {
    this.RuleService.getRuleFlows().subscribe((data: any) => {
      this.ruleflowlist = data.value;
    });
  }
  GetRuleFlowbyId(ruleflowid: number) {
    this.RuleService.getRuleFlowById(ruleflowid).subscribe((data: any) => {

      JSON.parse(data.value.ruleFlowJson).Rules.forEach((value: any) => {

        const result = value.Expression.split(',').reduce((acc: any, item: any) => {

          const keyValue = item.split('=');

          return { ...acc, [keyValue[0]]: keyValue[1] }

        }, {});
      });
    });

  }
  getInputRuleParameterByRuleFlowId(ruleflowid: number) {
    this.RuleService.getInputRuleParameterByRuleFlowId(ruleflowid).subscribe((data: any) => {
      //console.log(data.value.inputParameters);
      data.value.inputParameters.forEach((value: any) => {
        const ad = this.fb.group({
          InputName: new FormControl(value.inputName, [Validators.required]),
          Parameters: this.fb.array([])
        });
        let arr = <FormArray>ad.controls.Parameters;
        value.inputParameter.forEach((y:any) => {
          arr.push(this.fb.group({
            Name: new FormControl(y.inputProperty, [Validators.required]),
            Value: new FormControl(y.propertyValue, [Validators.required]),
          }))
        })
        //console.log(ad);
        this.inputcontrol.push(ad);
        this.IsAddInputRule = true;
      });
      this.rulelist = data.value.rule;
     /*console.log(this.rulelist);*/
    });
  }
  onChangeRuleFlow(ruleflowid: number) {
    // this.GetRuleFlowbyId(ruleflowid);
    this.getInputRuleParameterByRuleFlowId(ruleflowid);
  }

  
 ValidateRule(ruleName:string, ruleIndex:number) {
    console.log(ruleName + " " + ruleIndex);

  }
}
