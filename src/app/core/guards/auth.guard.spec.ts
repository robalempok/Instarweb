import { TestBed, inject } from '@angular/core/testing';

import { AuthGuard } from '@app/core/guards/auth.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';
import { AuthState } from '@app/core/state/auth.state';
import { AuthService } from '@app/core/services/auth.service';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ AuthGuard, AuthService ],
      imports: [ RouterTestingModule, NgxsModule.forRoot([
        AuthState
      ]),
      HttpClientModule]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
