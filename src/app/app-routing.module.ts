import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from '@app/components/shell/shell.component';
import { WalletShellComponent } from '@app/components/wallet/wallet-shell/wallet-shell.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/home/home.module#HomeModule'
  },
  {
    path: 'app',
    component: WalletShellComponent,
    children: [
      {
        path: '',
        loadChildren: './pages/wallet/wallet.module#WalletModule'
      },
      {
        path: 'settings',
        loadChildren: './pages/settings/settings.module#SettingsModule'
      }
    ]
  },
  {
    path: 'auth',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadChildren: './pages/auth/auth.module#AuthModule'
      }
    ]
  },
  {
    path: 'kyc',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadChildren: './pages/kyc/kyc.module#KycModule'
      }
    ]
  },
  {
    path: 'login',
    redirectTo: 'auth/login'
  },
  {
    path: 'signup',
    redirectTo: 'auth/register'
  },
  {
    path: 'settings',
    redirectTo: 'app/settings'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
