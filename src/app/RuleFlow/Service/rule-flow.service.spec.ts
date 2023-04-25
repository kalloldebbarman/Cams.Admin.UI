import { TestBed } from '@angular/core/testing';

import { RuleFlowService } from './rule-flow.service';

describe('RuleFlowService', () => {
  let service: RuleFlowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuleFlowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
