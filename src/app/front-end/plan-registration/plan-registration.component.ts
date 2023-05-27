import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {validationMessage} from '@/shared/services/validation-message';
import {CustomValidator} from '@/shared/services/validation';
import Stepper from 'bs-stepper';
import {AppService} from '@/shared/services/app.service';
import {HttpApiService} from '@/shared/services/http-api.service';
import {PromiseApiService} from '@/shared/services/promise-api.service';
import { ConfirmedValidator } from '@/shared/services/mobie-match';

declare var $: any;

@Component({
  selector: 'app-plan-registration',
  templateUrl: './plan-registration.component.html',
  styleUrls: ['./plan-registration.component.scss']
})
export class PlanRegistrationComponent implements OnInit {
  isAuthLoading = false;
  registerForm!: FormGroup;
  personalInformationForm!: FormGroup;
  validationMessage = validationMessage;
  planList: any;
  private stepper: Stepper;

  constructor(
    private _appService: AppService,
    private _http: HttpApiService,
    private _promiseService: PromiseApiService,
    private fb: FormBuilder
  ) {

    this.registerForm = fb.group({
      accountType: new FormControl('individual'),
      username: new FormControl('', Validators.compose([CustomValidator.noSpaceWithReqValidator])),
      password: new FormControl('', Validators.compose([CustomValidator.noSpaceWithReqValidator])),
      confirm: new FormControl('', Validators.compose([CustomValidator.noSpaceWithReqValidator])),
      email: new FormControl('', Validators.compose([CustomValidator.emailValidator])),  
    }, { 
      validator: ConfirmedValidator('password', 'confirm')
    })
  
    this.personalInformationForm = new FormGroup({
      fname: new FormControl('', Validators.compose([CustomValidator.noSpaceWithReqValidator])),
      lname: new FormControl('', Validators.compose([CustomValidator.noSpaceWithReqValidator])),
      phone: new FormControl('', Validators.compose([CustomValidator.numericValidator])),
      contactNo: new FormControl('', Validators.compose([CustomValidator.numericValidator])),
    })
    // this.registerFormController();
    this.planList = history.state.plan;
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }
  get p(): { [key: string]: AbstractControl } {
    return this.personalInformationForm.controls;
  }
  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#grad1'), {
      linear: false,
      animation: true
    });
    
    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;

    $(".next").click(function () {

      current_fs = $(this).parent();
      next_fs = $(this).parent().next();

      //Add Class Active
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

      //show the next fieldset
      next_fs.show();
      //hide the current fieldset with style
      current_fs.animate({opacity: 0}, {
        step: function (now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            'display': 'none',
            'position': 'relative'
          });
          next_fs.css({'opacity': opacity});
        },
        duration: 600
      });
    });

    $(".previous").click(function () {

      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();

      //Remove class active
      $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

      //show the previous fieldset
      previous_fs.show();

      //hide the current fieldset with style
      current_fs.animate({opacity: 0}, {
        step: function (now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            'display': 'none',
            'position': 'relative'
          });
          previous_fs.css({'opacity': opacity});
        },
        duration: 600
      });
    });

    $('.radio-group .radio').click(function () {
      $(this).parent().find('.radio').removeClass('selected');
      $(this).addClass('selected');
    });

    $(".submit").click(function () {
      return false;
    })
  }

  registerUser(formValue: any) {
    const data = {...this.registerForm.value, ...this.personalInformationForm.value};
    data.plan_id = this.planList._id;
    console.log(data)

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

function matchValidator(
  control: AbstractControl,
  controlTwo: AbstractControl
): ValidatorFn {
  return () => {
    if (control.value !== controlTwo.value)
      return { match_error: 'Value does not match' };
    
    return null;
  };
}