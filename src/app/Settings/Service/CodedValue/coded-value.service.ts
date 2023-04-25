import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CodedValueModel } from '../../Model/CodedValue/coded-value.model';
@Injectable({
  providedIn: 'root'
})
export class CodedValueService {

  constructor(private http: HttpClient) { }
  readonly headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  public GetAllCodedValueByLookup(lookup: string, Search: string, Page: number, RowsPerPage: number){
    const url = 'https://localhost:7225/api/v1/Setting/CodedValue/lookup/' + lookup + '/page/' + Page + '/rows/' + RowsPerPage + '/search/' + Search;
    return this.http.get<any>(url, { 'headers': this.headers });
  }

  public GetCodedValueById(lookup: string, Id: number) {
    const url = 'https://localhost:7225/api/v1/Setting/CodedValue/lookup/' + lookup + "/" + Id;
    return this.http.get<any>(url, { 'headers': this.headers });
  }

  public DeleteCodedValue(lookup: string, Id: number) {
    const url = 'https://localhost:7225/api/v1/Setting/CodedValue/lookup/' + lookup + "/" + Id;
    return this.http.delete<any>(url, { 'headers': this.headers });
  }
  public CreateCodedValue(lookup: string, CodedValue: CodedValueModel) {
    const url = 'https://localhost:7225/api/v1/Setting/CodedValue/lookup/' + lookup;
    return this.http.post<CodedValueModel>(url, CodedValue, { 'headers': this.headers });
  }
  public UpdateCodedValue(lookup: string, CodedValue: CodedValueModel) {
    const url = 'https://localhost:7225/api/v1/Setting/CodedValue/lookup/' + lookup;
    return this.http.put<CodedValueModel>(url, CodedValue, { 'headers': this.headers });
  }
}
