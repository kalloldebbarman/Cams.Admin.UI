import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-local-param',
  templateUrl: './local-param.component.html',
  styleUrls: ['./local-param.component.scss']
})
export class LocalParamComponent {

  @Input() localpara!: FormGroup;
  @Input() newlocalparam!: FormArray;
  @Input() LocalIndex!: number;
  
  removeLocalPramSection() {
    this.newlocalparam.removeAt(this.LocalIndex);
  }
}
