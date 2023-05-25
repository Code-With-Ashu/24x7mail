import {AbstractControl, FormArray, FormControl, FormGroup, ValidatorFn} from '@angular/forms';


export class CustomValidator {
// Validates URL
  static urlValidator(control: AbstractControl) {
    if (control && control.value && !control.value.replace(/\s/g, '').length) {
      control.setValue('');
      return {required: true};
    } else if (control.value == '') {
      return {required: true};
    } else if (control.pristine) {
      return null;
    }

    const URL_REGEXP = /^(http?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    control.markAsTouched();
    return (URL_REGEXP.test(control.value)) ? null : {pattern: true};
  }

// Validates passwords
  static matchPassword(control: any) {
    const password = control.controls.password;
    const confirm = control.controls.confirm;
    if (password.pristine || confirm.pristine) {
      return null;
    }

    control.markAsTouched();
    return (password.value === confirm.value) ? null : {pattern: true};
  }

  // Validates Only Numeric Value
  static numericValidator(control: AbstractControl) {
    if (control && control.value && !String(control.value).replace(/\s/g, '').length) {
      control.setValue('');
      return {required: true};
    } else if (control.value === '') {
      return {required: true};
    } else if (control.pristine) {
      return null;
    }

    const PHONE_REGEXP = /^[0-9]*$/;
    control.markAsTouched();
    return PHONE_REGEXP.test(control.value) ? null : {pattern: true};
  }

  // Validates Only Numeric Value but not required field
  static numericValidatorNotReq(control: AbstractControl) {
    if (control && control.value && !String(control.value).replace(/\s/g, '').length) {
      control.setValue('');
      return null;
    } else if (control.pristine || control.value == '') {
      return null;
    }

    const PHONE_REGEXP = /^[0-9]*$/;
    control.markAsTouched();
    return PHONE_REGEXP.test(control.value) ? null : {pattern: true};
  }

  // Validates Only Numeric Value but not required field
  static numeric0to9ValidatorReq(control: AbstractControl) {
    if (control && control.value && !String(control.value).replace(/\s/g, '').length) {
      control.setValue('');
      return {required: true};
    } else if (control.value === '') {
      return {required: true};
    } else if (control.pristine) {
      return null;
    }

    const PHONE_REGEXP = /^[0-9]/;
    control.markAsTouched();
    return PHONE_REGEXP.test(control.value) ? null : {pattern: true};
  }


// Validates Only Numeric Value With dots or etc.....
  static numberValidator(control: AbstractControl) {
    if (control && control.value && !String(control.value).replace(/\s/g, '').length) {
      control.setValue('');
      return {required: true};
    } else if (control.value === '') {
      return {required: true};
    } else if (control.pristine) {
      return null;
    }

    const NUMBER_REGEXP = /^-?[\d.]+(?:e-?\d+)?$/;
    control.markAsTouched();
    return NUMBER_REGEXP.test(control.value) ? null : {pattern: true};
  }

  // Validates US phone numbers
  static phoneValidator(control: AbstractControl) {
    if (control && control.value && !control.value.replace(/\s/g, '').length) {
      control.setValue('');
      return {required: true};
    } else if (control.value == '') {
      return {required: true};
    } else if (control.pristine) {
      return null;
    }

    const PHONE_REGEXP = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
    control.markAsTouched();
    return PHONE_REGEXP.test(control.value) ? null : {pattern: true};
  }

// Validates US SSN
  static ssnValidator(control: AbstractControl) {
    if (control && control.value && !control.value.replace(/\s/g, '').length) {
      control.setValue('');
      return {required: true};
    } else if (control.value == '') {
      return {required: true};
    } else if (control.pristine) {
      return null;
    }

    const SSN_REGEXP = /^(?!219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/;
    control.markAsTouched();
    return SSN_REGEXP.test(control.value) ? null : {pattern: true};
  }

// Validates zip codes
  static zipCodeValidator(control: AbstractControl) {
    if (control && control.value && !control.value.replace(/\s/g, '').length) {
      control.setValue('');
      return {required: true};
    } else if (control.value == '') {
      return {required: true};
    } else if (control.pristine) {
      return null;
    }

    const ZIP_REGEXP = /^[0-9]{5}(?:-[0-9]{4})?$/;
    control.markAsTouched();
    return ZIP_REGEXP.test(control.value) ? null : {pattern: true};
  }

  // Validates username
  static commonValidator(control: AbstractControl) {
    if (control && control.value && !control.value.replace(/\s/g, '').length) {
      control.setValue('');
      return {required: true};
    } else if (control.value == '') {
      return {required: true};
    } else if (control.pristine) {
      return null;
    }

    const user_REGEXP = /^[a-zA-Z0-9]*$/;
    control.markAsTouched();
    return user_REGEXP.test(control.value) ? null : {pattern: true};
  }

  // Email validate with required field
  static emailValidator(control: AbstractControl) {
    if (control && control.value && !control.value.replace(/\s/g, '').length) {
      control.setValue('');
      return {required: true};
    } else if (control.value == '') {
      return {required: true};
    } else if (control.pristine) {
      return null;
    }

    const email_REGEXP = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    control.markAsTouched();
    return email_REGEXP.test(control.value) ? null : {pattern: true};
  }

  // Email Validate but not required field
  static emailValidatorNotReq(control: AbstractControl) {
    if (control && control.value && !control.value.replace(/\s/g, '').length) {
      control.setValue('');
      return null;
    } else if (control.pristine || control.value == '') {
      return null;
    }

    const email_REGEXP = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    control.markAsTouched();
    return email_REGEXP.test(control.value) ? null : {pattern: true};
  }

  // this function use to user enter first letter space not allowed with required field validation
  static noSpaceWithReqValidator(control: AbstractControl) {
    if (control && control.value && !String(control.value).replace(/\s/g, '').length) {
      control.setValue('');
      control.markAsTouched();
      return {required: true};
    } else if (control.value === '') {
      return {required: true};
    } else {
      return null;
    }
  }

  // this function use to user enter first letter space not allowed with no required field validation
  static noSpaceValidator(control: AbstractControl) {
    if (control && control.value && !String(control.value).replace(/\s/g, '').length) {
      control.setValue('');
    }

    return null;
  }

  static match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: any) => {
      const control: any = controls.get(controlName);
      const checkControl: any = controls.get(checkControlName);

      if (checkControl.errors && !checkControl.errors.matching) {
        return null;
      }

      if (control.value !== checkControl.value) {
        controls.get(checkControlName).setErrors({matching: true});
        return {matching: true};
      } else {
        return null;
      }
    };
  }

  static minSelectedCheckboxes(min = 1) {
    return (formArray: FormArray) => {
      const totalSelected = formArray.controls
        // get a list of checkbox values (boolean)
        .map(control => control.value)
        // total up the number of checked checkboxes
        .reduce((prev, next) => next ? prev + next : prev, 0);

      // if the total is not greater than the minimum, return the error message
      return totalSelected >= min ? null : {required: true};
    };
  }

  static areEqual(formGroup: FormGroup) {
    let val;
    let valid = true;

    for (let key in formGroup.controls) {
      if (formGroup.controls.hasOwnProperty(key)) {
        let control: FormControl = <FormControl>formGroup.controls[key];
        if (val === undefined) {
          val = control.value;
        } else {
          if (val !== control.value) {
            valid = false;
            break;
          }
        }
      }
    }

    return (valid) ? null : {areEqual: true};
  }
}
