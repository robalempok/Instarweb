import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@app/core/services/auth.service';
import { Store } from '@ngxs/store';
import { AuthState } from '@app/core/state/auth.state';

@Injectable({
  providedIn: 'root'
})
export class NonAuthGuard implements CanActivate {
  constructor(public router: Router, private store: Store) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const token = this.store.selectSnapshot(AuthState.token);
      if (token) {
        this.router.navigate(['/app']);
        return false;
      }
      return true;
  }
}
