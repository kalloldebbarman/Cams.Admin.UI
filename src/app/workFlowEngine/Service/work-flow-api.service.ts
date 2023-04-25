import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class WorkFlowApiService {

  constructor(private http: HttpClient) { }
  readonly headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
  baseurl: string = "https://localhost:7252";
  public ExecuteWorkFlowTask() {
    const url = this.baseurl + '/api/v1/WorkFlows/execute';
    let workflow:any = {
      WorkFlowDefinitionId: "4db962ae10a94b7bb9a80afb8f5ee2e0",
      FormCode:""
    }
    return this.http.post<any>(url, workflow, { 'headers': this.headers });
  }

  public getWorkFlowTasks() {
    //const url = this.baseurl + '/api/v1/WorkFlows/workflowinstance';  
    const url = this.baseurl + '/api/v1/WorkFlows/tasks';  
    return this.http.get<any>(url, { 'headers': this.headers });
  }
  public SignalExecute(WorkflowInstanceId: string, SignalName: string, WorkFlowDefinitionId:string) {
    const url = this.baseurl + '/api/v1/WorkFlows/signals/execute';
    let signaldata: any = {
      WorkflowInstanceId: WorkflowInstanceId,
      SignalName: SignalName,
      WorkFlowDefinitionId: WorkFlowDefinitionId
    }
    return this.http.post<any>(url, signaldata, { 'headers': this.headers });
  }
}
