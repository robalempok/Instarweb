import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from '@app/pages/settings/settings-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MatInputModule } from '@angular/material/input';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { ConfirmFileUploadModalComponent } from './components/confirm-file-upload-modal/confirm-file-upload-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@app/shared/shared.module';
import { WalletResolver } from '@app/pages/wallet/resolvers/wallet.resolver';
import { AccountComponent } from '@app/pages/settings/pages/account/account.component';
import { VerificationComponent } from '@app/pages/settings/pages/verification/verification.component';
import { SecurityComponent } from '@app/pages/settings/pages/security/security.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    NgbModule,
    MatInputModule,
    SettingsRoutingModule
  ],
  declarations: [
    SettingsComponent,
    AccountComponent,
    SideBarComponent,
    UserInfoComponent,
    ConfirmFileUploadModalComponent,
    VerificationComponent,
    SecurityComponent
  ],
  providers: [ WalletResolver ],
  entryComponents: [ ConfirmFileUploadModalComponent ]
})
export class SettingsModule { }
