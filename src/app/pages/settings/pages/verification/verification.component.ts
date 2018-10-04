import { Component, OnInit } from '@angular/core';
import { KycStatus } from '@app/shared/data/enums';
import { Store } from '@ngxs/store';
import { WalletState } from '@app/pages/wallet/state/wallet.state';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

  currentKycStatus: KycStatus;
  public KycStatus: any = KycStatus;

  constructor(private store: Store) { }

  ngOnInit() {
    this.currentKycStatus = this.store.selectSnapshot(WalletState.kycStatus);
  }

}
