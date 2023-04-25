import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-global-param',
  templateUrl: './global-param.component.html',
  styleUrls: ['./global-param.component.scss']
})
export class GlobalParamComponent {
  @Input() Globalsections!: FormArray;
  @Input() Globalsection!: FormGroup;
  @Input() GlobalIndex!: number;
  ngOnInit(): void {   
  }
  removeGlobalPramSection() {
    this.Globalsections.removeAt(this.GlobalIndex);
  }
}
