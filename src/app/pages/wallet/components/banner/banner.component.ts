import { Component, OnInit, Input } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() referralReward;
  showReferralButton: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.showReferralButton = !this.router.url.includes('referral');
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationEnd: {
          this.showReferralButton = !this.router.url.includes('referral');
          break;
        }
      }
    });
  }
}
