import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { AuthService } from '@app/core/services/auth.service';
import { LoggingInterceptor } from '@app/core/interceptors/logging.interceptor';
import { environment } from '@env/environment';
import { ActivityService } from '@app/core/services/activity.service';
import { AuthInterceptor } from '@app/core/interceptors/auth.interceptor';
import { LocaleInterceptor } from '@app/core/interceptors/locale.interceptor';
import { RouterModule } from '@angular/router';
import { UserService } from '@app/core/services/user.service';
import { HttpErrorInterceptor } from '@app/core/interceptors/http-error.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LocaleInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
];
if (!environment.production) {
  httpInterceptorProviders.push({ provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true });
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [AuthService, httpInterceptorProviders, ActivityService, UserService],
  declarations: [],
  exports: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [],
    };
  }
}
