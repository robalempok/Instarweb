import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() isLoggedIn: boolean;
  @Input() navScrolled: boolean;
  @Input() hideTitleMobile: boolean;
  @Output() signOut = new EventEmitter();

  showMobileMenu = false;

  constructor() { }

  openMobileMenu() {
    this.showMobileMenu = true;
  }

  closeMobileMenu() {
    this.showMobileMenu = false;
  }

  signOutClicked() {
    this.signOut.emit();
  }

}
