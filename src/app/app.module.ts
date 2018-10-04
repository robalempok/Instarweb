import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppState } from '@app/core/state/app.state';
import { AuthState } from '@app/core/state/auth.state';
import { environment } from '@env/environment';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule, NGXS_PLUGINS } from '@ngxs/store';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { logoutPlugin } from '@app/core/state/logout.plugin';
import { MatSidenavModule } from '@angular/material';
import { FooterComponent } from '@app/components/footer/footer.component';
import { ShellComponent } from './components/shell/shell.component';
import { WalletHeaderComponent } from '@app/components/wallet/wallet-header/wallet-header.component';
import { WalletShellComponent } from '@app/components/wallet/wallet-shell/wallet-shell.component';
import { NotificationsModalComponent } from './components/notifications-modal/notifications-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    WalletHeaderComponent,
    FooterComponent,
    WalletShellComponent,
    ShellComponent,
    NotificationsModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ToastrModule.forRoot(),
    NgxsModule.forRoot([
      AppState,
      AuthState
    ]),
    MatSidenavModule,
    NgxsStoragePluginModule.forRoot({
      key: 'auth.token'
    }),
    !environment.production ? [NgxsReduxDevtoolsPluginModule.forRoot(), NgxsLoggerPluginModule.forRoot()] : [],
    CoreModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [{
    provide: NGXS_PLUGINS,
    useValue: logoutPlugin,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
