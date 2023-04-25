import { TestBed } from '@angular/core/testing';

import { WorkFlowApiService } from './work-flow-api.service';

describe('WorkFlowApiService', () => {
  let service: WorkFlowApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkFlowApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
