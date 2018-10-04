import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from '@app/core/services/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [ HttpClientTestingModule ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
