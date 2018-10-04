import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { WalletState } from '@app/pages/wallet/state/wallet.state';
import { Observable } from 'rxjs';
import { ReferralFeedRemote } from '@app/shared/data/remotes/referral-feed.remote';
import { Referral } from '@app/shared/data/models/referral';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.scss']
})
export class ReferralComponent implements OnInit {

  @Select(WalletState.referralFeed) referralFeed$: Observable<ReferralFeedRemote>;
  @Select(WalletState.email) email$: Observable<string>;
  referredFriends: Referral[];
  latestReferrals: Referral[];
  referralLink: string;
  referralReward: number;

  selectedTab = 0;

  constructor() { }

  ngOnInit(): void {
    this.referralFeed$.subscribe(feed => {
      this.referredFriends = feed.referredFriends;
      this.latestReferrals = feed.latestReferrals;
      this.referralLink = feed.referralLink;
      this.referralReward = feed.referralReward;
    });
  }

  selectTab(index: number) {
    this.selectedTab = index;
  }
}
