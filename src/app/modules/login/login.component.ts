import {Component, ElementRef, HostBinding, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, UntypedFormGroup, Validators} from '@angular/forms';
import {AppService} from '@/shared/services/app.service';
import {validationMessage} from '@/shared/services/validation-message';
import {HttpApiService} from '@/shared/services/http-api.service';
import {Router} from '@angular/router';
import {CustomValidator} from '@/shared/services/validation';
import {frontEndRoutesPath, routesPath} from '@/shared/routes-path';
import { SocialAuthService, FacebookLoginProvider } from '@abacritt/angularx-social-login';
declare const gapi: any;
import { PrimeNGConfig } from 'primeng/api';

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
  @ViewChild('loginRef', { static: true }) loginElement: ElementRef;
  auth2: any;

  constructor(
    private renderer: Renderer2,
    public _appService: AppService,
    private _http: HttpApiService,
    private router: Router,
    private authService: SocialAuthService,
    private primengConfig: PrimeNGConfig
  ) {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.renderer.addClass(document.querySelector('app-root'), 'login-page');
    this.loginFormController();
    // this.loadGoogleSdk();
    this.primengConfig.ripple = true;
  }

  // loadGoogleSdk() {

  //   gapi.load('auth2', () => {
  //     this.auth2 = gapi.auth2.init({
  //       client_id: '719665211882-fqf161pnfl2kiokod0i8uu1ul3anbo41.apps.googleusercontent.com',
  //       cookiepolicy: 'single_host_origin',
  //       scope: 'profile email'
  //     });
  //     this.googleLogin(this.loginElement.nativeElement);
  //   });
  // }

  public googleLogin(element) {
    // GOOGLE LOGIN
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
 
        console.log("G login success",googleUser)
   
      }, (error) => {
        console.log(error)
      });
  }

  ngAfterViewInit() {
    // this.loadGoogleSdk();
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
            localStorage.setItem('auth-token', res.token);
            if(res.data.user_type =='admin' || res.data.user_type =='operator'){
              this._appService.rootNavigation();            
            } else {
              this.router.navigate(['superAdmin/customer/']);
            }
            this._appService.toastService('success', 'Login successfully.');
            
            return;
          }

          this._appService.toastService('warning', res.message);
        },     // nextHandler
        error: (e) => {
          this.isAuthLoading = false;
          this._appService.toastService('warning', "User Not created");
        },    // errorHandler
        complete: () => {
          this.isAuthLoading = false;
          this._appService.setPasswordEyeIcon();
        }, // completeHandler
      });
  }

  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
  //     .then(user => {
  //       // Handle successful sign-in
  //       console.log(user);
  //     })
  //     .catch(err => {
  //       // Handle error
  //       console.error(err);
  //     });
  // }

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

  BasicShow: boolean = false;
  
    showDialog() {
        this.BasicShow = true;
    }
  // closeResult = '';
  openForgotPasswordPopUp(content) {
    // this.modalService.open(content,{ariaLabelledBy: 'modal-basic-title'}).result.then(
    //   (result)  => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = 
    //      `Dismissed ${this.getDismissReason(reason)}`;
    // });
  }

  // private getDismissReason(reason: any): string {
    // if (reason === ModalDismissReasons.ESC) {
    //   return 'by pressing ESC';
    // } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //   return 'by clicking on a backdrop';
    // } else {
    //   return `with: ${reason}`;
    // }
  //   return '';
  // }
}
