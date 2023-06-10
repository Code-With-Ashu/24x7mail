import {Component} from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import {ConfirmPasswordValidator} from './confirm-password-validator';
@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
    changePassword: FormGroup;

    submitted: boolean = false;
    newPasswordVisible: boolean = false;
    oldPasswordVisible: boolean = false;
    confirmPasswordVisible: boolean = false;
    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.changePassword = this.fb.group(
            {
                password: ['', Validators.required],
                newPassword: ['', [Validators.required]],
                confirmPassword: ['', Validators.required]
            },
            {
                validator: ConfirmPasswordValidator(
                    'newPassword',
                    'confirmPassword'
                )
            }
        );
    }

    toggleOldPasswordVisibility() {
        this.oldPasswordVisible = !this.oldPasswordVisible;
    }
    toggleNewPasswordVisibility() {
        this.newPasswordVisible = !this.newPasswordVisible;
    }
    toggleConfirmPasswordVisibility() {
        this.confirmPasswordVisible = !this.confirmPasswordVisible;
    }
    newPass() {
        this.submitted = true;
        if (this.changePassword.invalid) {
            return;
        }
        let req = {
            password: this.changePassword.value.password,
            newPassword: this.changePassword.value.newPassword,
            confirmPassword: this.changePassword.value.confirmPassword
        };
    }
}
