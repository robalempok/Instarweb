import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { WalletState } from '@app/pages/wallet/state/wallet.state';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  referralReward: number;

  constructor(private router: Router, private toastr: ToastrService, private store: Store) { }

  ngOnInit(): void {
    this.referralReward = this.store.selectSnapshot(WalletState.referralReward);

    const toastOptions: Partial<IndividualConfig> = {
      closeButton: true,
      progressBar: true,
      positionClass: 'toast-bottom-right'
    };

    const shouldUpdatePassword = this.store.selectSnapshot(WalletState.shouldUpdatePassword);
    if (shouldUpdatePassword) {
      this.toastr.warning('Please update your password', 'Instar Wallet', toastOptions);
      this.router.navigate(['auth/change_password']);
      return;
    }
  }
}
