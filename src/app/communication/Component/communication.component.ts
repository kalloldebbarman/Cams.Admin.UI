import { Component, SecurityContext } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  CommunicationModel,
  MasterData,
  TemplateList,
} from '../Model/communication-model.model';
import { CommunicationService } from '../Service/communication.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import * as Editor from 'ckeditor5-custom-build/build/ckeditor';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss'],
})
export class CommunicationComponent {
  CommForms = this.fb.group({
    templateId: new FormControl('0'),
    templateName: new FormControl('', [Validators.required]),
    templateSubject: new FormControl('', [Validators.required]),
    communicationTypeId: new FormControl('', [Validators.required]),
    CommunicationTypeName: new FormControl(''),
    NotificationTypeName: new FormControl(''),
    notificationTypeId: new FormControl('', [Validators.required]),
    RecipientGroupName: new FormControl(''),
    RecipientCcGroupName: new FormControl(''),
    RecipientBccGroupName: new FormControl(''),
    recipientToGroupId: new FormControl(''),
    recipientCcGroupId: new FormControl(''),
    recipientBccGroupId: new FormControl(''),
    importanceId: new FormControl(''),
    importanceName: new FormControl(''),
    templateMessage: new FormControl('', [Validators.required]),
  });
  public Editor = Editor;

  selectedFile: File;
  displayStyle = 'none';
  p: number = 1;
  total = 0;
  rowsPerPage = 5;
  search = '';
  masterdata: MasterData;
  templates: TemplateList;
  Communicationdata: CommunicationModel;
  communicationTypeId: string;
  notificationTypeId: string;
  recipientToGroupId: string;
  recipientCcGroupId: string;
  recipientBccGroupId: string;
  templateId: number;
  ConfirmText: string;
  IsDelete: boolean = false;
  constructor(
    private readonly fb: FormBuilder,
    public ComService: CommunicationService,
    private sanitizer: DomSanitizer,
    private toastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.GetMasterdata();
  }
  //onReady(editor: typeof Editor): void {
  //  editor.ui.getEditableElement().parentElement.insertBefore(
  //    editor.ui.view.toolbar.element,
  //    editor.ui.getEditableElement()
  //  );

  //}
  GetMasterdata() {
    this.ComService.getMasterdata().subscribe((data: MasterData) => {
      this.masterdata = data;
      /*console.log("data" + JSON.stringify(data));*/
      this.GetTemplates('', 1, this.rowsPerPage);
    });
  }
  GetTemplates(search: string, page: number, rowsPerPage: number) {
    this.ComService.getTemplates(search, page, rowsPerPage).subscribe(
      (data: TemplateList) => {
        this.templates = data;
        console.log(data);
        this.total = data.total;
        //console.log(this.templates);
        console.log(this.total);
        //  console.log("templates" + JSON.stringify(data));
      }
    );
  }
  EditTemplate(templateId: number) {
    this.IsDelete = false;
    this.templateId = templateId;
    this.ConfirmText = 'Are you sure, do you want to Edit?';
    this.displayStyle = 'block';

    // this.GetConfigTemplate(templateId);
  }
  ConfirmEditTemplate() {
    this.displayStyle = 'none';
    this.GetConfigTemplate(this.templateId);
  }
  GetConfigTemplate(templateId: number) {
    this.ComService.getConfigTemplate(templateId).subscribe(
      (data: CommunicationModel) => {
        this.CommForms.patchValue({
          templateId: data.templateId,
          templateName: data.templateName,
          templateSubject: data.templateSubject,
          templateMessage: data.templateMessage,
          communicationTypeId: data.communicationTypeId,
          notificationTypeId: data.notificationTypeId,
          recipientToGroupId: data.recipientToGroupId,
          recipientCcGroupId: data.recipientCcGroupId,
          recipientBccGroupId: data.recipientBccGroupId,
          importanceId: data.importanceId,
          RecipientGroupName: '',
          RecipientCcGroupName: '',
          RecipientBccGroupName: '',
          NotificationTypeName: '',
          CommunicationTypeName: '',
          importanceName: '',
        });
        //this.CommForms.get("TemplateId")!.setValue(data.templateId);

        this.communicationTypeId = data.communicationTypeId;
        this.notificationTypeId = data.notificationTypeId;
        this.recipientToGroupId = data.recipientToGroupId;
        this.recipientCcGroupId = data.recipientCcGroupId;
        this.recipientBccGroupId = data.recipientBccGroupId;
        // console.log(this.CommForms);
      }
    );
  }
  onSubmit() {
    if (this.CommForms.invalid) {
      return;
    }
    this.CommForms.patchValue({
      RecipientGroupName: '',
      RecipientCcGroupName: '',
      RecipientBccGroupName: '',
      NotificationTypeName: '',
      CommunicationTypeName: '',
      importanceName: '',
    });
    this.Communicationdata = this.CommForms.value as CommunicationModel;
    //  console.log(this.Communicationdata);
    console.log(this.Communicationdata.templateMessage);

    if (
      this.Communicationdata.templateId == '0' ||
      this.Communicationdata.templateId == null
    ) {
      this.SaveCommunicationData();
    } else this.UpdateCommunicationData();

    this.CommForms.reset();
  }
  SaveCommunicationData() {
    // console.log("savedata" + JSON.stringify(this.Communicationdata));
    this.ComService.SaveCommunication(this.Communicationdata).subscribe(
      (data: any) => {
        // console.log("Save response" + JSON.stringify(data));
        if (data == -1) {
          // alert('Template with the same name already Exists');
          this.toastrService.error(
            'Template with the same name already Exists',
            'Error!'
          );
        } else {
          this.toastrService.success('Template saved successfully', 'Success!');
          // alert('Template saved successfully');
        }
        this.GetTemplates('', 1, this.rowsPerPage);
      }
    );
  }
  UpdateCommunicationData() {
    console.log('data' + JSON.stringify(this.Communicationdata));
    this.ComService.UpdateCommunication(this.Communicationdata).subscribe(
      (data: any) => {
        //console.log("update response" + JSON.stringify(data));
        if (data == -1) {
          this.toastrService.error(
            'Template with the same name already Exists',
            'Error!'
          );
        } else {
          this.toastrService.success(
            'Template updated successfully',
            'Success!'
          );
        }
        this.GetTemplates('', 1, this.rowsPerPage);
      }
    );
  }
  generateDownloadUri() {
    this.Communicationdata = this.CommForms.value as CommunicationModel;
    let templatehtml = this.Communicationdata.templateMessage;
    let blob = new Blob([templatehtml], { type: 'text/html' });
    let url = window.URL.createObjectURL(blob);
    let uri: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
    let x = this.sanitizer.sanitize(SecurityContext.URL, uri);
    console.log(uri);
    const link = document.createElement('a');
    link.href = x ? x : '';
    link.setAttribute('download', 'template.html');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  onFileSelected(event: { target: { files: File[] } }) {
    this.selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(this.selectedFile, 'UTF-8');
    fileReader.onload = () => {
      var data = fileReader.result?.toString();
      console.log(data);
      this.CommForms.patchValue({
        templateMessage: data,
      });
    };
    fileReader.onerror = (error) => {
      console.log(error);
    };
  }
  onRecordPerPageChange(value: number) {
    this.rowsPerPage = value;
    this.GetTemplates(this.search, 1, this.rowsPerPage);

    console.log(this.rowsPerPage);
  }
  GetPages(page: number) {
    this.GetTemplates(this.search, page, this.rowsPerPage);
  }
  onSearchChange(search: string) {
    this.search = search;
    this.p = 1;
    this.GetTemplates(this.search, this.p, this.rowsPerPage);
    console.log(this.search);
  }
  renderPage(event: number) {
    this.p = event;
    this.GetTemplates(this.search, this.p, this.rowsPerPage);
  }
  closePopup() {
    this.displayStyle = 'none';
  }
  DeleteTemplate(templateId: number) {
    this.IsDelete = true;
    this.displayStyle = 'block';
    this.ConfirmText = 'Are you sure, do you want to Delete?';
    this.templateId = templateId;
  }
  ConfirmDeleteTemplate() {
    this.displayStyle = 'none';
    this.ComService.DeleteCommunication(this.templateId).subscribe(
      (data: any) => {
        this.toastrService.success('Record is deleted successfully', 'Success');
        this.GetTemplates('', 1, this.rowsPerPage);
      }
    );
  }
}
