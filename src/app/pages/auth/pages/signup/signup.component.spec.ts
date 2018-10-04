import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from '@app/core/state/auth.state';
import { AuthService } from '@app/core/services/auth.service';
import { NgxCaptchaModule } from 'ngx-captcha';
import { environment } from '@env/environment';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [
        MatInputModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        NgxsModule.forRoot([
          AuthState
        ]),
        NgxCaptchaModule.forRoot({
          reCaptcha2SiteKey: environment.reCaptchaSiteKey
        })
      ],
      providers: [ AuthService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
