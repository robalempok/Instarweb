import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '@env/environment';
import { BalanceRemote, HomeFeedRemote } from '@app/shared/data/remotes';
import { WalletTimeRange } from '@app/shared/data/enums/wallet-time-range.enum';
import { ReferralFeedRemote } from '@app/shared/data/remotes/referral-feed.remote';

@Injectable()
export class WalletService {

  constructor(private http: HttpClient) { }

  getHomeFeed() {
    return this.http.get<HomeFeedRemote>(`${environment.backendEndpoint}/v2/home`);
  }

  getBalanceFeed(range?: WalletTimeRange) {
    let params: HttpParams = new HttpParams();
    if (range) {
        params = new HttpParams().set('range', range);
    }
    return this.http.get<BalanceRemote>(`${environment.backendEndpoint}/wallet/dashboard`, {params: params});
  }

  getReferralFeed() {
    return this.http.get<ReferralFeedRemote>(`${environment.backendEndpoint}/wallet/referral`);
  }

  transfer(recipientAddress: string, amount: number, memo: string) {
    return this.http.post(`${environment.backendEndpoint}/transfer`, {recipientAddress, amount, memo});
  }
}
