import { TestBed } from '@angular/core/testing';

import { CodedValueService } from './coded-value.service';

describe('CodedValueService', () => {
  let service: CodedValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodedValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
