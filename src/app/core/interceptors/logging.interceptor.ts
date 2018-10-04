import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('HTTP REQUEST');
    console.log(request);
    return next.handle(request).pipe(
       tap(
           event => {
            if (event instanceof HttpResponse) {
              console.log('HTTP RESPONSE', event);
            }
           }, error => {
              console.log('HTTP ERROR', error);
           }
       ));
  }
}
