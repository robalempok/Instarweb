import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { NetverifyService } from '@app/pages/kyc/services/netverify.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class KycResolver implements Resolve<Observable<string>> {
  constructor(private netVerifyService: NetverifyService) {}

  resolve() {
    return this.netVerifyService.getAuthorizationToken()
      .pipe(
        map(res => res.authorizationToken),
        catchError(err => {
          console.log(err);
          return of('');
        })
      );
  }
}
