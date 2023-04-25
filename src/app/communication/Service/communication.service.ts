import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { CommunicationModel } from '../Model/communication-model.model';
@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  constructor(private http: HttpClient) {}
  readonly headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
  baseurl: string = 'https://localhost:7225';
  public getMasterdata(): Observable<any> {
    const url = this.baseurl + '/api/v1/Communication/masterdata';
    return this.http.get<any>(url, { headers: this.headers });
  }

  public getConfigTemplate(TemplateId: number) {
    const url = this.baseurl + '/api/v1/Communication/' + TemplateId;
    return this.http.get<any>(url, { headers: this.headers });
  }

  public SendCommunication() {}
  public getTemplates(Search: string, Page: number, RowsPerPage: number) {
    const url =
      this.baseurl +
      '/api/v1/Communication/templates/' +
      'page/' +
      Page +
      '/rows/' +
      RowsPerPage +
      '/search/' +
      Search;
    return this.http.get<any>(url, { headers: this.headers });
  }
  public SaveCommunication(Communication: CommunicationModel) {
    const url = this.baseurl + '/api/v1/Communication';
    return this.http.post<CommunicationModel>(url, Communication, {
      headers: this.headers,
    });
  }
  public UpdateCommunication(Communication: CommunicationModel) {
    const url =
      this.baseurl + '/api/v1/Communication/' + Communication.templateId;
    return this.http.put<CommunicationModel>(url, Communication, {
      headers: this.headers,
    });
  }
  public DeleteCommunication(TemplateId: number) {
    const url = this.baseurl + '/api/v1/Communication/' + TemplateId;
    return this.http.delete<any>(url, { headers: this.headers });
  }
}
