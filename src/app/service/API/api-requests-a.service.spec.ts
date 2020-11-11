import { TestBed } from '@angular/core/testing';

import { ApiRequestsAService } from './api-requests-a.service';

describe('ApiRequestsAService', () => {
  let service: ApiRequestsAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRequestsAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
