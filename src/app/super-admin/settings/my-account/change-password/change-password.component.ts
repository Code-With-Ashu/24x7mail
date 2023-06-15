import {Component, EventEmitter, Output} from '@angular/core';
import { MessageService } from 'primeng/api';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import {ConfirmPasswordValidator} from './confirm-password-validator';
import { ChangePasswordService } from './change-password.service';
@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss'],
    providers: [MessageService]
})
export class ChangePasswordComponent {
    @Output() newItemEvent = new EventEmitter<{}>();
    changePassword: FormGroup;
    submitted: boolean = false;
    isChangePassword: boolean = false;
    newPasswordVisible: boolean = false;
    oldPasswordVisible: boolean = false;
    confirmPasswordVisible: boolean = false;
    editpassword: boolean;
    constructor(private fb: FormBuilder,private changepasswordService:ChangePasswordService,private messageService: MessageService ) {}

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
    close(){
        this.newItemEvent.emit('close');
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
        this.isChangePassword=true;
        if (this.changePassword.invalid) {
            return;
        }
        let req = {
            password: this.changePassword.value.password,
            newPassword: this.changePassword.value.newPassword,
            confirmPassword: this.changePassword.value.confirmPassword
        };
        this.changepasswordService.ChangePassword({currentPassword:req.password,newPassword:req.newPassword}).subscribe((res:any)=>{
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Password Changed  is  successfully!' });
        },
        (err) => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
          }
        );
        
    }
}
