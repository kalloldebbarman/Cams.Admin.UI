export class JobConfigurationModel {
  isNew: boolean;
  jobName: string;
  newJobGroupName: string;
  jobGroupId: string;
  jobGroupName: string;
  classTypeId: string;
  classTypeName: string;
  serverId: string;
  serverName: string;
  continuationOfId: string;
  continuationOf: string;
  description: string;
  recovery: boolean;
  // parameterName: string;
  // value: string;
  // paramTypeId: string;
  // paramTypeName: string;
  jobParameters: JobParameters[];
}
export interface TemplateList {
  Templates: JobConfigurationModel[];
}
export class JobModel {
  job: JobConfigurationModel;
  DataMapItems: JobParameters[];
}
export class JobParameters {
  Name: string;
  value: object;
  paramTypeId: string;
  SelectedType: string;
}

export class MasterData {
  jobGroup: JobGroup[];
  classType: ClassType[];
  server: Server[];
  continuationOf: ContinuationOf[];
  paramType: ParamType[];
}
export class JobGroup {
  jobGroupId: number;
  jobGroupName: string;
}
export class ClassType {
  classTypeId: number;
  classTypeName: string;
}
export class Server {
  serverId: number;
  serverName: string;
}
export class ContinuationOf {
  continuationOfId: number;
  continuationOf: string;
}
export class ParamType {
  paramTypeId: number;
  paramTypeName: string;
}
