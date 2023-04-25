import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RuleFlowService {

  constructor(private http: HttpClient) { }
  readonly headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
  baseurl: string = "https://localhost:7225";
  public getRuleFlows() {
    const url = this.baseurl +'/api/v1/Rules';
    return this.http.get<any>(url, { 'headers': this.headers });
  }
  public getRuleFlowById(RuleFlowId: number) {
    const url = this.baseurl + '/api/v1/Rules/' + RuleFlowId;
    return this.http.get<any>(url, { 'headers': this.headers });
  }
  public SaveRuleFlows(RuleFlow: any) {
    const url = this.baseurl + '/api/v1/Rules';
    return this.http.post<any>(url, RuleFlow, { 'headers': this.headers });
  }
  public UpdateRuleFlows(RuleFlow: any, RuleFlowId: number) {
    const url = this.baseurl + '/api/v1/Rules/' + RuleFlowId;
    return this.http.put<any>(url, RuleFlow, { 'headers': this.headers });
  }
  public DeleteRuleFlows(RuleFlowId: number) {
    const url = this.baseurl + '/api/v1/Rules/' + RuleFlowId;
    return this.http.delete<any>(url, { 'headers': this.headers });
  }
  public getInputRuleParameterByRuleFlowId(RuleFlowId: number) {
    const url = this.baseurl + '/api/v1/InputRuleParameter/' + RuleFlowId;
    return this.http.get<any>(url, { 'headers': this.headers });
  }
}
