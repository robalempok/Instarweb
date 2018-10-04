import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { WalletRoutingModule } from '@app/pages/wallet/wallet-routing.module';
import { WalletService } from '@app/pages/wallet/services/wallet.service';
import { WalletState } from '@app/pages/wallet/state/wallet.state';
import { SharedModule } from '@app/shared/shared.module';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxsModule } from '@ngxs/store';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { QRCodeModule } from 'angularx-qrcode';
import { ClipboardModule } from 'ngx-clipboard';
import { BannerComponent } from './components/banner/banner.component';
import { WalletComponent } from './wallet.component';
import { WalletResolver } from '@app/pages/wallet/resolvers/wallet.resolver';
import { ActivitiesComponent } from '@app/pages/wallet/pages/activities/activities.component';
import { BalanceComponent } from '@app/pages/wallet/pages/balance/balance.component';
import { ActivityRowComponent } from '@app/pages/wallet/pages/activities/components/activity-row/activity-row.component';
import { InstarRewardComponent } from '@app/pages/wallet/pages/activities/components/instar-reward/instar-reward.component';
import { ActivityModalComponent } from '@app/pages/wallet/pages/activities/components/activity-modal/activity-modal.component';
import { ReferFriendModalComponent } from '@app/pages/wallet/pages/activities/components/refer-friend-modal/refer-friend-modal.component';
import { ReferralComponent } from '@app/pages/wallet/pages/referral/referral.component';
import { TransactionsComponent } from '@app/pages/wallet/pages/transactions/transactions.component';
import { SubscriptionModalComponent } from '@app/pages/wallet/pages/activities/components/subscription-modal/subscription-modal.component';
import { ExchangeComponent } from '@app/pages/wallet/pages/exchange/exchange.component';
import { ConfirmModalComponent } from '@app/pages/wallet/pages/activities/components/confirm-modal/confirm-modal.component';
import { SuccessModalComponent } from '@app/pages/wallet/pages/activities/components/success-modal/success-modal.component';
import { ExchangeChartComponent } from '@app/pages/wallet/pages/exchange/exchange-chart/exchange-chart.component';
import { MarketRowComponent } from '@app/pages/wallet/pages/exchange/market-row/market-row.component';
import { TopCompletedComponent } from '@app/pages/wallet/pages/referral/top-completed/top-completed.component';
import { CurrencyBlockComponent } from '@app/pages/wallet/pages/transactions/currency-block/currency-block.component';
import { TransactionHistoryComponent } from '@app/pages/wallet/pages/transactions/transaction-history/transaction-history.component';
import { TransactionRowComponent } from '@app/pages/wallet/pages/transactions/transaction-row/transaction-row.component';
import { TransferModalComponent } from '@app/pages/wallet/pages/transactions/transfer-modal/transfer-modal.component';
import { AddressModalComponent } from '@app/pages/wallet/pages/transactions/address-modal/address-modal.component';
import { ReferralInfoComponent } from '@app/pages/wallet/pages/referral/referral-info/referral-info.component';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { ShareModalComponent } from './components/share-modal/share-modal.component';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxChartsModule,
    NgbModule,
    NgbTooltipModule,
    ClipboardModule,
    ShareButtonsModule.forRoot(),
    QRCodeModule,
    SharedModule,
    NgxsModule.forFeature([WalletState]),
    WalletRoutingModule
  ],
  providers: [WalletResolver, WalletService],
  declarations: [
    WalletComponent,
    ActivitiesComponent,
    BalanceComponent,
    ActivityRowComponent,
    InstarRewardComponent,
    ActivityModalComponent,
    ReferFriendModalComponent,
    ReferralComponent,
    TransactionsComponent,
    SubscriptionModalComponent,
    BannerComponent,
    ExchangeComponent,
    ConfirmModalComponent,
    SuccessModalComponent,
    ExchangeChartComponent,
    MarketRowComponent,
    TopCompletedComponent,
    CurrencyBlockComponent,
    TransactionHistoryComponent,
    TransactionRowComponent,
    TransferModalComponent,
    AddressModalComponent,
    ReferralInfoComponent,
    ShareModalComponent
  ],
  entryComponents: [
      ActivityModalComponent,
      ReferFriendModalComponent,
      SubscriptionModalComponent,
      ConfirmModalComponent,
      SuccessModalComponent,
      TransferModalComponent,
      AddressModalComponent,
      ShareModalComponent
  ]
})
export class WalletModule { }
