import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable()
export class LocaleInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url && req.url.includes(environment.backendEndpoint)) {
            const cloned = req.clone({
                headers: req.headers.set('locale', 'english')
            });
            return next.handle(cloned);
        }
        return next.handle(req);
    }
}
