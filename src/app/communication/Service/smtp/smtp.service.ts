import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { SmtpModel } from '../../Model/smtp/smtp-model.model';

@Injectable({
  providedIn: 'root',
})
export class SmtpService {
  constructor(private http: HttpClient) {}
  readonly headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
  baseurl: string = 'https://localhost:7225';

  public SaveSmtpData(smtp: SmtpModel) {
    const url = this.baseurl + '/api/v1/Communication/CreateSMTP';
    return this.http.post<SmtpModel>(url, smtp, { headers: this.headers });
  }
  public getSmtpData() {
    const url = this.baseurl + '/api/v1/Communication/GetSMTP';
    return this.http.get<any>(url, { headers: this.headers });
  }
}
