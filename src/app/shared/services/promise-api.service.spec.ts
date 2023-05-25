import {TestBed} from '@angular/core/testing';

import {PromiseApiService} from './promise-api.service';

describe('PromiseApiService', () => {
  let service: PromiseApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromiseApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
