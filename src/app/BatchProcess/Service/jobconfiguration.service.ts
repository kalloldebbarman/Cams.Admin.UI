import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  JobConfigurationModel,
  JobModel,
} from '../Model/job-configuration-model.model';

@Injectable({
  providedIn: 'root',
})
export class JobconfigurationService {
  constructor(private http: HttpClient) {}
  readonly headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', 'https://localhost:7050');

  public SaveJobConfiguration(jobConfiguration: JobConfigurationModel) {
    const url = 'https://localhost:7179/createJobs';
    let jobdata: JobModel = {
      job: jobConfiguration,
      DataMapItems: jobConfiguration.jobParameters,
    };
    return this.http.post<JobConfigurationModel>(url, jobdata, {
      headers: this.headers,
    });
  }
}
