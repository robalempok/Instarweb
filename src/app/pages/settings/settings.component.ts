import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Select } from '@ngxs/store';
import { WalletState } from '@app/pages/wallet/state/wallet.state';
import { Observable } from 'rxjs';
import { Activity } from '@app/shared/data/models';
import { Router, NavigationEnd } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {

  @Select(WalletState.balance) balance$: Observable<number>;
  @Select(WalletState.email) email$: Observable<string>;
  @Select(WalletState.rating) rating$: Observable<number>;
  @Select(WalletState.level) level$: Observable<number>;
  @Select(WalletState.joined) joined$: Observable<Date>;
  @Select(WalletState.names) names$: Observable<{ firstName: string, lastName: string }>;
  @Select(WalletState.profilePicture) profilePictureLink$: Observable<string>;
  @Select(WalletState.completedActivities) completedActivities$: Observable<Activity[]>;

  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  hideSideBar = false;

  constructor(private router: Router, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 991px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);

    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.hideSideBar = this.router.url.includes('settings/'));
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  goBack() {
    this.router.navigate(['/settings']);
  }

}
