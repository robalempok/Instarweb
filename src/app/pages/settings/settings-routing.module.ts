import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SettingsComponent } from '@app/pages/settings/settings.component';
import { AuthGuard } from '@app/core/guards/auth.guard';
import { WalletResolver } from '@app/pages/wallet/resolvers/wallet.resolver';
import { AccountComponent } from '@app/pages/settings/pages/account/account.component';
import { VerificationComponent } from '@app/pages/settings/pages/verification/verification.component';
import { SecurityComponent } from '@app/pages/settings/pages/security/security.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    canActivate: [AuthGuard],
    resolve: {resolver: WalletResolver},
    children: [
      {
        path: 'account', component: AccountComponent
      },
      {
        path: 'verification', component: VerificationComponent
      },
      {
        path: 'security', component: SecurityComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
