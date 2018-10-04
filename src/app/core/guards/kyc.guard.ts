import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { WalletState } from '@app/pages/wallet/state/wallet.state';
import { KycStatus } from '@app/shared/data/enums';

@Injectable({
  providedIn: 'root'
})
export class KycGuard implements CanActivate {
  constructor(public router: Router, private store: Store) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const kycStatus = this.store.selectSnapshot(WalletState.kycStatus);
      if (kycStatus === KycStatus.PASSED) {
        return true;
      }
      this.router.navigate(['app']);
      return false;
  }
}
