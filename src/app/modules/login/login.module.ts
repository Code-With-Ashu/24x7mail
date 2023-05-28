import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from '@modules/login/login.component';
import {SharedModule} from '@/shared/shared.module';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from '@abacritt/angularx-social-login';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        // providers: [
        //   {
        //     id: GoogleLoginProvider.PROVIDER_ID,
        //     provider: new GoogleLoginProvider('380290845662-s8qo1lae8uqn9hj9a1f2ltrs4msv1u3p.apps.googleusercontent.com')
        //   },
        //   {
        //     id: FacebookLoginProvider.PROVIDER_ID,
        //     provider: new FacebookLoginProvider('<YOUR_FACEBOOK_APP_ID>')
        //   },
        //   {
        //     id: FacebookLoginProvider.PROVIDER_ID,
        //     provider: new FacebookLoginProvider('<YOUR_FACEBOOK_APP_ID>')
        //   }
        // ]
      } as SocialAuthServiceConfig,
    }
  ]
})
export class LoginModule {
}
