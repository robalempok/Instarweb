import { Component, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { WalletState } from '@app/pages/wallet/state/wallet.state';
import { Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { Logout } from '@app/core/state/auth.state';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';
import { filter } from 'rxjs/operators';
import { KycStatus } from '@app/shared/data/enums';

@Component({
    selector: 'app-wallet-shell',
    templateUrl: './wallet-shell.component.html',
    styleUrls: ['./wallet-shell.component.scss']
})
export class WalletShellComponent implements OnDestroy {

    @Select(WalletState.profilePicture) profilePicture$: Observable<string>;
    @Select(WalletState.email) email$: Observable<string>;
    @Select(WalletState.referralReward) referralReward$: Observable<number>;
    @Select(WalletState.names) names$: Observable<{ firstName: string, lastName: string }>;
    @Select(WalletState.kycStatus) kycStatus$: Observable<KycStatus>;

    @ViewChild('sidenav') sidenav: MatSidenav;

    mobileQuery: MediaQueryList;
    disableSidenav = false;

    private mobileQueryListener: () => void;

    constructor(private store: Store, private router: Router, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 991px)');
        this.mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this.mobileQueryListener);

        this.router.events.pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => this.disableSidenav = this.router.url.includes('settings'));
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this.mobileQueryListener);
    }

    signOut() {
        this.store.dispatch(new Logout()).subscribe(() => this.router.navigateByUrl('/'));
    }

    toggleSidenav() {
        this.sidenav.toggle();
    }

}
