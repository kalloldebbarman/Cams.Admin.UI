//export class CommunicationModel {
//}
export class CommunicationModel {
  templateId: string;
  templateName: string;
  communicationTypeName: string;
  communicationTypeId: string;
  notificationTypeName: string;
  notificationTypeId: string;
  recipientGroupName: string;
  recipientToGroupId: string;
  recipientCcGroupName: string;
  recipientCcGroupId: string;
  recipientBccGroupName: string;
  recipientBccGroupId: string;
  importanceId: string;
  importanceName: string;
  templateMessage: string;
  templateSubject: string;
}

  export interface TemplateList {
    templates: CommunicationModel[];
    total: number;
  }




export class MasterData {
  communicationType: CommunicationType[];
  notificationType: NotificationType[];
  recipientGroup: RecipientGroup[];
}
export class CommunicationType {
  communicationTypeId: number;
  communicationTypeName: string;
}
export class NotificationType {
  notificationTypeId: number;
  notificationTypeName: string;
}
export class RecipientGroup {
  recipientGroupId: number;
  recipientGroupName: string;
}
