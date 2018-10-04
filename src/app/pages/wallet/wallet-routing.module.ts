import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { WalletComponent } from '@app/pages/wallet/wallet.component';
import { AuthGuard } from '@app/core/guards/auth.guard';
import { WalletResolver } from '@app/pages/wallet/resolvers/wallet.resolver';
import { BalanceComponent } from '@app/pages/wallet/pages/balance/balance.component';
import { ActivitiesComponent } from '@app/pages/wallet/pages/activities/activities.component';
import { TransactionsComponent } from '@app/pages/wallet/pages/transactions/transactions.component';
import { ExchangeComponent } from '@app/pages/wallet/pages/exchange/exchange.component';
import { ReferralComponent } from '@app/pages/wallet/pages/referral/referral.component';

const routes: Routes = [
  {
    path: '',
    component: WalletComponent,
    canActivate: [AuthGuard],
    resolve: {resolver: WalletResolver},
    children: [
      {path: '', component: BalanceComponent},
      {path: 'dashboard', redirectTo: ''},
      {path: 'activities', component: ActivitiesComponent},
      {path: 'wallet', component: TransactionsComponent},
      {path: 'exchange', component: ExchangeComponent},
      {path: 'referral', component: ReferralComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule {
}
