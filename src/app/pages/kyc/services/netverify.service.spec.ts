import { TestBed, inject } from '@angular/core/testing';

import { NetverifyService } from './netverify.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NetverifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NetverifyService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([NetverifyService], (service: NetverifyService) => {
    expect(service).toBeTruthy();
  }));
});
