import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { environment } from '@env/environment';
import { SharedModule } from '@app/shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from '@app/pages/auth/pages/login/login.component';
import { SignupComponent } from '@app/pages/auth/pages/signup/signup.component';
import { ForgotPasswordComponent } from '@app/pages/auth/pages/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from '@app/pages/auth/pages/change-password/change-password.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    SharedModule,
    NgxCaptchaModule.forRoot({
      reCaptcha2SiteKey: environment.reCaptchaSiteKey
    })
  ],
  declarations: [LoginComponent, SignupComponent, AuthComponent, ForgotPasswordComponent, ChangePasswordComponent]
})
export class AuthModule { }
