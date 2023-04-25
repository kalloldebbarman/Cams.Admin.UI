import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CodedValueModel, CodedValueList } from '../../Model/CodedValue/coded-value.model';
import { LookupModel } from '../../Model/Lookup/lookup.model';
import { CodedValueService } from '../../Service/CodedValue/coded-value.service';
import { LookupService } from '../../Service/Lookup/lookup.service';

@Component({
  selector: 'app-coded-value',
  templateUrl: './coded-value.component.html',
  styleUrls: ['./coded-value.component.scss']
})
export class CodedValueComponent {

  
  CodedValueForm = this.fb.group({
    codedValueId: new FormControl('0'),
    description: new FormControl('', [Validators.required]),
    shortDescription: new FormControl(''),
    sortBy: new FormControl(),
    active: new FormControl(true),
    effectiveDate: new FormControl(''),
    expiryDate: new FormControl(''),
  });
  lookupCodedValue: CodedValueList;
  codedValueData: CodedValueModel;
  lookup: string = "Gender";
  lookupList: LookupModel[];
  codedValueId: number;
  displayStyle= "none";
  search = '';
  p: number = 1;
  total = 0;
  rowsPerPage = 5;

  constructor(
    private readonly fb: FormBuilder,
    public codedValueService: CodedValueService,
    public lookupService: LookupService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.GetAllLookup();
    this.GetAllCodedValueByLookup(this.lookup, '', 1, this.rowsPerPage);
  }

  GetAllLookup() {
    this.lookupService.GetAllLookup().subscribe((data: any) => {
      this.lookupList = data;
      console.log(data);
    });
  }

  GetAllCodedValueByLookup(lookup: string, search: string, page: number, rowsPerPage: number) {
    this.codedValueService.GetAllCodedValueByLookup(lookup, search, page, rowsPerPage).subscribe((data: CodedValueList) => {
      this.lookupCodedValue = data;
      this.total = data.total;
      console.log(this.lookupCodedValue);
    });
  }

  GetCodedValueById(lookup: string, Id: number) {
    this.codedValueService.GetCodedValueById(lookup, Id).subscribe((data: CodedValueModel) => {
      this.CodedValueForm.patchValue({
        codedValueId: data.codedValueId,
        description: data.description,
        shortDescription: data.shortDescription,
        sortBy: data.sortBy,
        active: data.active,
        effectiveDate: data.effectiveDate,
        expiryDate: data.expiryDate
      });
      console.log(data);
    });
  }
  DeleteCodedValueById(lookup: string, Id: number) {
    this.codedValueService.DeleteCodedValue(lookup, Id).subscribe((data: any) => {
      console.log(data);
    });
  }

  EditCodedValue(Id: number) {
    this.codedValueId = Id;
    this.displayStyle = 'block';
    // this.GetConfigTemplate(templateId);
  }
  ConfirmEditCodedValue() {
    this.GetCodedValueById(this.lookup, this.codedValueId);
    this.displayStyle = 'none';
  }
  DeleteCodedValue(Id: number) {
    this.codedValueId = Id;
    this.displayStyle = 'block';
    // this.GetConfigTemplate(templateId);
  }
  ConfirmDeleteCodedValue() {
    this.DeleteCodedValueById(this.lookup, this.codedValueId);
    this.displayStyle = 'none';
  }
  closePopup() {
    this.displayStyle = 'none';
  }

  onSubmit() {
    if (this.CodedValueForm.invalid) {
      return;
    }
    //this.CodedValueForm.patchValue({
    //
    //});

    this.codedValueData = this.CodedValueForm.value as CodedValueModel;
    //  console.log(this.codedValueData);

    if (this.codedValueData.codedValueId == '0' || this.codedValueData.codedValueId == null) {
      this.CreateCodedValue(this.lookup);
    }
    else {
      this.UpdateCodedValue(this.lookup);
    }

    this.ngOnInit();
  }

  CreateCodedValue(lookup: string) {
    this.codedValueService.CreateCodedValue(lookup, this.codedValueData).subscribe(
      (data: CodedValueModel) => {
        if (data.codedValueId == "0") {
          this.toastrService.error(
            'Coded Value not created',
            'Error!'
          );
        }
        else {
          this.toastrService.success(
            'Coded Value saved successfully',
            'Success!'
          );
        }
      }
    );
  }

  UpdateCodedValue(lookup: string) {
    this.codedValueService.UpdateCodedValue(lookup, this.codedValueData).subscribe(
      (data: CodedValueModel) => {
        //if (data.codedValueId == "0") {
        //  this.toastrService.error(
        //    'Coded Value not created',
        //    'Error!'
        //  );
        //}
        //else {
        //  this.toastrService.success(
        //    'Coded Value saved successfully',
        //    'Success!'
        //  );
        //}
      }
    );
  }

  onSearchChange(search: string) {
    this.search = search;
    this.GetAllCodedValueByLookup(this.lookup, this.search, this.p, this.rowsPerPage);
    console.log(this.search);
  }

  onRecordPerPageChange(value: number) {
    this.rowsPerPage = value;
    this.GetAllCodedValueByLookup(this.lookup, this.search, 1, this.rowsPerPage);

    console.log(this.rowsPerPage);
  }
  GetPages(page: number) {
    this.GetAllCodedValueByLookup(this.lookup, this.search, page, this.rowsPerPage);
  }
  renderPage(event: number) {
    this.p = event;
    this.GetAllCodedValueByLookup(this.lookup, this.search, this.p, this.rowsPerPage);
  }
  onLookupTypeChange(lookup: string) {
    this.GetAllCodedValueByLookup(lookup, this.search, this.p, this.rowsPerPage);
  }
}
