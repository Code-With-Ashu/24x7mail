import {Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-operators-add',
  templateUrl: './operators-add.component.html',
  styleUrls: ['./operators-add.component.scss']
})
export class OperatorsAdd {
  addPackage: boolean;
  addoperator:FormGroup;
  submitted = false;

  ngOnInit() {
  this.addoperator = new FormGroup({
    name : new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    
  });}
  save() {
    
    this.submitted = true;
    if (this.addoperator.invalid) {  
      return;
    }
    let req = {
        name : this.addoperator.value.type,
      email : this.addoperator.value.features_id,
      role : this.addoperator.value.name,
     
    };
}
}
