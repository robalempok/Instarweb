import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LoadWallet } from '@app/pages/wallet/state/wallet.state';

@Injectable()
export class WalletResolver implements Resolve<void> {
    constructor(private store: Store) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<void> {
        return this.store.dispatch(new LoadWallet());
    }
}
