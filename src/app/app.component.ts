import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { Select } from '@ngxs/store';
import { AppState } from '@app/core/state/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Select(AppState.loading) processLoading$: Observable<boolean>;
  routeLoading = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.routeLoading = true;
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.routeLoading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }
}
