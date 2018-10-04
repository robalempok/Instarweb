import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { AuthState } from '@app/core/state/auth.state';
import { environment } from '@env/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private store: Store) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = this.store.selectSnapshot(AuthState.token);

        if (token && req.url && req.url.includes(environment.backendEndpoint)) {
            const cloned = req.clone({
                headers: req.headers.set('Authorization', 'Basic ' + btoa(token + ':' + ''))
            });
            return next.handle(cloned);
        }
        return next.handle(req);
    }
}
