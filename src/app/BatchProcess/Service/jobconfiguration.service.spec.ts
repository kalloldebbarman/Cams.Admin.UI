import { TestBed } from '@angular/core/testing';

import { JobconfigurationService } from './jobconfiguration.service';

describe('JobconfigurationService', () => {
  let service: JobconfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobconfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
