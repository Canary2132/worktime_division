import { TestBed, inject } from '@angular/core/testing';

import { LogInUserService } from './log-in-user.service';

describe('LogInUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogInUserService]
    });
  });

  it('should be created', inject([LogInUserService], (service: LogInUserService) => {
    expect(service).toBeTruthy();
  }));
});
