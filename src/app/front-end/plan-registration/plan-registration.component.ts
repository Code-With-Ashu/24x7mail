import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {validationMessage} from '@/shared/services/validation-message';
import {CustomValidator} from '@/shared/services/validation';
import Stepper from 'bs-stepper';
import {AppService} from '@/shared/services/app.service';
import {HttpApiService} from '@/shared/services/http-api.service';
import {PromiseApiService} from '@/shared/services/promise-api.service';

declare var $: any;

@Component({
  selector: 'app-plan-registration',
  templateUrl: './plan-registration.component.html',
  styleUrls: ['./plan-registration.component.scss']
})
export class PlanRegistrationComponent implements OnInit {
  isAuthLoading = false;
  registerForm!: FormGroup;
  validationMessage = validationMessage;
  planList: any;
  private stepper: Stepper;

  constructor(
    private _appService: AppService,
    private _http: HttpApiService,
    private _promiseService: PromiseApiService
  ) {
    this.registerFormController();
    this.planList = history.state.plan;
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    });
  }

  registerFormController() {
    this.registerForm = new FormGroup({
      accountType: new FormControl('individual'),
      fname: new FormControl('', Validators.compose([CustomValidator.noSpaceWithReqValidator])),
      lname: new FormControl('', Validators.compose([CustomValidator.noSpaceWithReqValidator])),
      username: new FormControl('', Validators.compose([CustomValidator.noSpaceWithReqValidator])),
      password: new FormControl('', Validators.compose([CustomValidator.noSpaceWithReqValidator])),
      email: new FormControl('', Validators.compose([CustomValidator.emailValidator])),
      phone: new FormControl('', Validators.compose([CustomValidator.numericValidator]))
    });
  }

  registerUser(formValue: any) {
    const data = {...formValue};
    data.plan_id = this.planList._id;


    this._http.dataAPI.register(data)
      .subscribe({
        next: () => {
          console.log('user register successfully...');
        },
        error: () => {

        }, // error handler
        complete: () => {

        } // complete handler
      });
  }

  next() {
    this.stepper.next();
  }
}
