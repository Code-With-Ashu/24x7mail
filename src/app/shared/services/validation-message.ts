export const validationMessage = {
  'name': [
    {type: 'required', message: 'Name is required.'}
  ],
  'mobile': [
    {type: 'required', message: 'Mobile is required.'},
    {type: 'minlength', message: 'Enter 10 Digit Mobile Number.'},
    {type: 'maxlength', message: 'Mobile cannot be more than 10 characters long.'},
    {type: 'pattern', message: 'Your Mobile must contain only numbers.'},
    {type: 'validMobile', message: 'Your Mobile has already been taken.'}
  ],
  'number': [
    {type: 'required', message: 'Is required.'},
    {type: 'pattern', message: 'Enter Digit Only.'},
    {type: 'min', message: 'Minimun Value is 0'},
    {type: 'max', message: 'Maximum Value is 9'},
  ],
  pinCode: [
    {type: 'required', message: 'Is required.'},
    {type: 'pattern', message: 'Enter Digit Only.'},
    {type: 'minlength', message: 'Enter 6 Digit Pin code Number.'},
    {type: 'maxlength', message: 'Pin code cannot be more than 6 digit long.'},
  ],
  'number1': [
    {type: 'required', message: 'Is required.'},
    {type: 'pattern', message: 'Enter Digit Only.'},
    {type: 'min', message: 'Minimun Value is 0'},
    {type: 'max', message: 'Maximum Value is 9'},
  ],
  'email': [
    {type: 'required', message: 'Email is required.'},
    {type: 'pattern', message: 'Enter valid email address.'}
  ],
  'selection': [
    {type: 'required', message: 'Select any one.'},
  ],
  'default': [
    {type: 'required', message: 'Is required.'},
    {type: 'min', message: 'Minimun Value is 0'},
    {type: 'max', message: 'Maximum Value is 9'},
  ],
  'url': [
    {type: 'required', message: 'Is required.'},
    {type: 'pattern', message: 'Enter Url is invalid.'}
  ],
  'date': [
    {type: 'required', message: 'Date Is required.'}
  ],
  'username': [
    {type: 'required', message: 'Username is required.'},
    {type: 'minlength', message: 'Enter Minimum 5 Character.'},
  ],
  'password': [
    {type: 'required', message: 'Password is required.'},
    {type: 'matchPassword', message: 'Password and Confirm password must match'}
  ],
  'address': [
    {type: 'required', message: 'Address is required.'}
  ]
};
