import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpApiService } from '@/shared/services/http-api.service';
import { CustomValidator } from '@/shared/services/validation';
import { ToastrService } from 'ngx-toastr';
import { validationMessage } from '@/shared/services/validation-message';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  email : string = '';
  forgotPasswordForm : FormGroup;
  validationMessage = validationMessage;

  constructor(private auth : HttpApiService,private _toast: ToastrService) { }

  ngOnInit(): void {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('', Validators.compose([CustomValidator.emailValidator])),  
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.forgotPasswordForm.controls;
  }

  forgotPassword() {
    this.auth.forgotPassword(this.forgotPasswordForm.value).subscribe(res =>{
      if (res['status']) {
        this._toast.success(res['msg'], 'Success');
      } else {
        this._toast.error(res['msg'], 'Error');
      }
    });
    this.email = '';
  }

}