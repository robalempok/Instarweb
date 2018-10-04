import { Component, HostListener, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { AuthState, Logout } from '@app/core/state/auth.state';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Select(AuthState.token) token$: Observable<string>;

  @ViewChild('banner') banner: ElementRef;
  @ViewChild('buttonActions') buttonActions: ElementRef;

  buttonScrolled = false;
  navScrolled = false;
  isLoggedIn = false;

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.token$.subscribe(token => this.isLoggedIn = !!token);
  }

  signOut() {
    this.store.dispatch(new Logout()).subscribe(() => this.router.navigateByUrl('/'));
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(_event) {
    const viewportHeight = window.innerHeight;
    const buttonsHeight = this.buttonActions.nativeElement.offsetHeight;
    const bannerHeight = this.banner.nativeElement.offsetHeight;
    const scrollDistance = window.pageYOffset;
    this.buttonScrolled = (bannerHeight - scrollDistance + buttonsHeight < viewportHeight);
    this.navScrolled = scrollDistance > bannerHeight;
  }
}
