import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/core/guards/auth.guard';
import { KycComponent } from '@app/pages/kyc/kyc.component';
import { KycResolver } from '@app/pages/kyc/resolvers/kyc.resolver';
import { SuccessComponent } from '@app/pages/kyc/pages/success/success.component';
import { ErrorComponent } from '@app/pages/kyc/pages/error/error.component';

const routes: Routes = [
  {
    path: '',
    component: KycComponent,
    canActivate: [AuthGuard],
    resolve: { authToken: KycResolver }
  },
  {
    path: 'success',
    component: SuccessComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KycRoutingModule { }
