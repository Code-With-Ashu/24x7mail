import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from '@modules/login/login.component';
import {SharedModule} from '@/shared/shared.module';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { ForgotPasswordComponent } from '@modules/forgot-password/forgot-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    SocialLoginModule,
    
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          // {
          //   id: GoogleLoginProvider.PROVIDER_ID,
          //   provider: new GoogleLoginProvider('719665211882-fqf161pnfl2kiokod0i8uu1ul3anbo41.apps.googleusercontent.com')
          // },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('<YOUR_FACEBOOK_APP_ID>')
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('<YOUR_FACEBOOK_APP_ID>')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ]
})
export class LoginModule {
}
