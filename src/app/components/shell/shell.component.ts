import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Logout, AuthState } from '@app/core/state/auth.state';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  @Select(AuthState.token) token$: Observable<string>;
  isLoggedIn = false;

  constructor(private store: Store, private router: Router) { }

  ngOnInit() {
    this.token$.subscribe(token => this.isLoggedIn = !!token);
  }

  signOut() {
    this.store.dispatch(new Logout()).subscribe(() => this.router.navigateByUrl('/'));
  }

}
