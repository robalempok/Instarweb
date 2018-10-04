import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Store } from '@ngxs/store';
import { Logout } from '@app/core/state/auth.state';
import { environment } from '@env/environment';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private router: Router, private store: Store) { }

    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError((error: HttpErrorResponse) => {
            if (error.error instanceof ErrorEvent) {
                // A client-side or network error occurred. Handle it accordingly.
            } else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                if (error.url && error.url.includes(environment.backendEndpoint)) {
                    if (error.status === 401) {
                        this.store.dispatch(new Logout()).subscribe(() => {
                            this.router.navigateByUrl('/login');
                        });
                    }
                }
            }
            // return an observable with a user-facing error message
            return throwError(error.error);
        }));
    }
}
