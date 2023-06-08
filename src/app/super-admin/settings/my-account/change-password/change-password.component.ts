import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  changePassword:FormGroup;

  submitted = false;

  ngOnInit() {
    this.changePassword = new FormGroup({

      password : new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
      
    });}

    newPass() {
    
      
      this.submitted = true;
      if (this.changePassword.invalid) {  
        return;
      }
      let req = {
        password : this.changePassword.value.password,
        newPassword : this.changePassword.value.newPassword,
        confirmPassword : this.changePassword.value.confirmPassword,
       
      };
  }
}
