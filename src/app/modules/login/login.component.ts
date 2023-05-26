import {Component, HostBinding, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, UntypedFormGroup, Validators} from '@angular/forms';
import {AppService} from '@/shared/services/app.service';
import {validationMessage} from '@/shared/services/validation-message';
import {HttpApiService} from '@/shared/services/http-api.service';
import {Router} from '@angular/router';
import {CustomValidator} from '@/shared/services/validation';
import {frontEndRoutesPath, routesPath} from '@/shared/routes-path';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {
  @HostBinding('class') class = 'login-box';
  loginForm: UntypedFormGroup;
  isAuthLoading = false;
  validationMessage = validationMessage;
  protected readonly routesPath = routesPath;
  frontEndRoutesPath = frontEndRoutesPath;
  
  constructor(
    private renderer: Renderer2,
    public _appService: AppService,
    private _http: HttpApiService,
    private router: Router,
    private authService: SocialAuthService
  ) {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.renderer.addClass(document.querySelector('app-root'), 'login-page');
    this.loginFormController();
  }

  loginFormController() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.compose([CustomValidator.emailValidator])),
      password: new FormControl('', Validators.compose([CustomValidator.noSpaceWithReqValidator])),
    });
  }

  loginByAuth(formValue: any) {
    this.isAuthLoading = true;

    const data = {...formValue};

    this._http.dataAPI.login(data)
      .subscribe({
        next: (res: any) => {
          if (res.status) {
            localStorage.setItem('user-info', JSON.stringify(res));
            this._appService.toastService('success', 'Login successfully.');
            this._appService.rootNavigation();
            return;
          }

          this._appService.toastService('warning', res.message);
        },     // nextHandler
        error: () => {
          this.isAuthLoading = false;
          this._appService.toastService('warning', "User Not created");
        },    // errorHandler
        complete: () => {
          this.isAuthLoading = false;
          this._appService.setPasswordEyeIcon();
        }, // completeHandler
      });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(user => {
        // Handle successful sign-in
        console.log(user);
      })
      .catch(err => {
        // Handle error
        console.error(err);
      });
  }

  signInWithFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
      .then(user => {
        // Handle successful sign-in
        console.log(user);
      })
      .catch(err => {
        // Handle error
        console.error(err);
      });
  }

  ngOnDestroy() {
    this.renderer.removeClass(
      document.querySelector('app-root'),
      'login-page'
    );
  }
}
