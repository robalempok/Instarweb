import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { KycStatus } from '@app/shared/data/enums';

@Component({
  selector: 'app-wallet-header',
  templateUrl: './wallet-header.component.html',
  styleUrls: ['./wallet-header.component.scss']
})
export class WalletHeaderComponent implements OnInit {

  @Input() profilePicture: string;
  @Input() email: string;
  @Input() referralReward: number;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() kycStatus: KycStatus;
  @Output() signOut = new EventEmitter();
  @Output() toggleSidenav = new EventEmitter();
  kycClass: string;
  kycMessage: string;

  constructor() { }

  ngOnInit(): void {
    switch (this.kycStatus) {
      case KycStatus.PASSED:
        this.kycMessage = 'Congratulations, you have successfully completed KYC process';
        this.kycClass = 'success';
        break;
      case KycStatus.UNDETERMINED:
        this.kycMessage = 'You have not yet completed the KYC process';
        this.kycClass = 'warning';
        break;
      case KycStatus.REJECTED:
      case KycStatus.MULTIPLE_REJECTIONS:
        this.kycMessage = 'Your KYC process has been rejected.';
        this.kycClass = 'error';
        break;
    }
  }

  onSignOut() {
    this.signOut.emit();
  }

  onToggleSidenav() {
    this.toggleSidenav.emit();
  }
}
