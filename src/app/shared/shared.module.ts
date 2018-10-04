import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordToggleDirective } from '@app/shared/directives/input/password-toggle.directive';
import { ButtonConfirmDirective } from '@app/shared/directives/button/button-confirm.directive';
import { ButtonCancelDirective } from '@app/shared/directives/button/button-cancel.directive';
import { ButtonShareDirective } from '@app/shared/directives/button/button-share.directive';
import { ButtonReceiveDirective } from '@app/shared/directives/button/button-receive.directive';
import { ButtonTransferDirective } from '@app/shared/directives/button/button-transfer.directive';
import { ButtonExportDirective } from '@app/shared/directives/button/button-export.directive';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { MatToolbarModule } from '@angular/material';
import { HeaderComponent } from '@app/shared/components/header/header.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from '@app/shared/carousel/carousel.module';
import { FilterActivityTypePipe } from './pipes/filter-activity-type.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule
  ],
  declarations: [
    PasswordToggleDirective,
    ButtonConfirmDirective,
    ButtonCancelDirective,
    ButtonShareDirective,
    ButtonReceiveDirective,
    ButtonTransferDirective,
    ButtonExportDirective,
    BottomNavComponent,
    HeaderComponent,
    FilterActivityTypePipe
  ],
  exports: [
    PasswordToggleDirective,
    ButtonConfirmDirective,
    ButtonCancelDirective,
    ButtonShareDirective,
    ButtonReceiveDirective,
    ButtonTransferDirective,
    ButtonExportDirective,
    BottomNavComponent,
    HeaderComponent,
    CarouselModule
  ]
})
export class SharedModule { }
