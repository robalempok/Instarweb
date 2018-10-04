import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-referral-info',
  templateUrl: './referral-info.component.html',
  styleUrls: ['./referral-info.component.scss']
})
export class ReferralInfoComponent {

  @Input() referralLink: string;
  @Input() referralReward: number;
  @Input() referralId: string;
  @Input() commissionRate: number;
  @Input() share: number;

  constructor() { }

}
