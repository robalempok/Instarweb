import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AuthComponent } from '@app/pages/auth/auth.component';
import { NonAuthGuard } from '@app/core/guards/non-auth.guard';
import { AuthGuard } from '@app/core/guards/auth.guard';
import { LoginComponent } from '@app/pages/auth/pages/login/login.component';
import { SignupComponent } from '@app/pages/auth/pages/signup/signup.component';
import { ForgotPasswordComponent } from '@app/pages/auth/pages/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from '@app/pages/auth/pages/change-password/change-password.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {path: 'login', component: LoginComponent, canActivate: [NonAuthGuard]},
      {path: 'register', component: SignupComponent, canActivate: [NonAuthGuard]},
      {path: 'password_reset', component: ForgotPasswordComponent, canActivate: [NonAuthGuard]},
      {path: 'change_password', component: ChangePasswordComponent, canActivate: [AuthGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
