import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { LookupModel } from '../../Model/Lookup/lookup.model';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor(private http: HttpClient) { }
  readonly headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  public GetAllLookup() {
    const url = 'https://localhost:7225/api/v1/Setting/Lookup';
    return this.http.get<any>(url, { 'headers': this.headers });
  }

  public GetLookupById(Id: number) {
    const url = 'https://localhost:7225/api/v1/Setting/Lookup/' + Id;
    return this.http.get<any>(url, { 'headers': this.headers });
  }

  public DeleteLookup(Id: number) {
    const url = 'https://localhost:7225/api/v1/Setting/Lookup/' + Id;
    return this.http.delete<any>(url, { 'headers': this.headers });
  }
  public CreateLookup(Lookup: LookupModel) {
    const url = 'https://localhost:7225/api/v1/Setting/Lookup';
    return this.http.post<LookupModel>(url, Lookup, { 'headers': this.headers });
  }
  public UpdateLookup(Lookup: LookupModel) {
    const url = 'https://localhost:7225/api/v1/Setting/Lookup';
    return this.http.put<LookupModel>(url, Lookup, { 'headers': this.headers });
  }
}
