export class CodedValueModel {
  codedValueId: string;
  description: string;
  shortDescription: string;
  sortBy: number;
  active: boolean;
  effectiveDate: string;
  expiryDate: string;
  createdDate: string;
  createdBy: string;
  modifiedDate: string;
  modifiedBy: string;
}

export interface CodedValueList {
  codedValues: CodedValueModel[];
  total: number;
}
