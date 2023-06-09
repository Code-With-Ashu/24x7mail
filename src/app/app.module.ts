import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {registerLocaleData} from '@angular/common';
import localeEn from '@angular/common/locales/en';

import {AppRoutingModule} from '@/app-routing.module';
import {AppComponent} from './app.component';

import {StoreModule} from '@ngrx/store';
import {authReducer} from './store/auth/reducer';
import {uiReducer} from './store/ui/reducer';
import {defineCustomElements} from '@profabric/web-components/loader';

import {AuthGuard} from '@/shared/guards/auth.guard';
import {NonAuthGuard} from '@/shared/guards/non-auth.guard';
import {AuthInterceptor} from '@/shared/guards/auth.inteceptor';
import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';
import {SharedModule} from '@/shared/shared.module';

defineCustomElements();
registerLocaleData(localeEn, 'en-EN');

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({auth: authReducer, ui: uiReducer}),
    ToastrModule.forRoot({
      /* timeOut: 3000,
       positionClass: 'toast-top-right',*/
      preventDuplicates: true
    }),
    LottieModule.forRoot({player: playerFactory}),
    SharedModule
  ],
  providers: [
    AuthGuard,
    NonAuthGuard,
    [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
    // [{provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}]
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
