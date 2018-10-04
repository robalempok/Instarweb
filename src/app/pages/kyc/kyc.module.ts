import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KycComponent } from './kyc.component';
import { KycRoutingModule } from '@app/pages/kyc/kyc-routing.module';
import { NetverifyService } from '@app/pages/kyc/services/netverify.service';
import { KycResolver } from '@app/pages/kyc/resolvers/kyc.resolver';
import { ErrorComponent } from '@app/pages/kyc/pages/error/error.component';
import { SuccessComponent } from '@app/pages/kyc/pages/success/success.component';

@NgModule({
  imports: [
    CommonModule,
    KycRoutingModule
  ],
  providers: [NetverifyService, KycResolver],
  declarations: [KycComponent, ErrorComponent, SuccessComponent]
})
export class KycModule { }
