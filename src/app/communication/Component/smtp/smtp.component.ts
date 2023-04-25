import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SmtpModel } from '../../Model/smtp/smtp-model.model';
import { SmtpService } from '../../Service/smtp/smtp.service';

@Component({
  selector: 'app-smtp',
  templateUrl: './smtp.component.html',
  styleUrls: ['./smtp.component.scss']
})
export class SmtpComponent {

  constructor(private readonly fb: FormBuilder, public SMTPService: SmtpService) {
  }

  SmtpForms = this.fb.group({
    host: new FormControl("", [Validators.required]),
    port: new FormControl("", [Validators.required]),
    userName: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    security: new FormControl("", [Validators.required]),
    senderAddress: new FormControl("", [Validators.required])
  })

  Smtpdata: SmtpModel
  ngOnInit(): void {
    this.GetSMTPData();
  }
  GetSMTPData() {
    this.SMTPService.getSmtpData().subscribe((data: SmtpModel) => {
      this.Smtpdata = data;
      this.SmtpForms.patchValue({
        host: data.host,
        port: data.port,
        userName: data.userName,
        password: data.password,
        security: data.security,
        senderAddress: data.senderAddress
      })
    })
  }
  onSubmit() {
    if (this.SmtpForms.invalid) {
      return;
    }
    this.Smtpdata = this.SmtpForms.value as SmtpModel;
    console.log(this.Smtpdata);
    this.SMTPService.SaveSmtpData(this.Smtpdata).subscribe((data: any) => {
      if (data == 1) {
        alert("SMTP saved successfully");
      }
    })
  }
}
