import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-operators-edit',
  templateUrl: './operators-edit.component.html',
  styleUrls: ['./operators-edit.component.scss']
})
export class OperatorsEditComponent {
  editoperator:FormGroup;
  submitted = false;

  ngOnInit() {
    this.editoperator = new FormGroup({
     
      
    });}

    save() {
    
      this.submitted = true;
      if (this.editoperator.invalid) {  
        return;
      }
      let req = {
          name : this.editoperator.value.type,
        email : this.editoperator.value.features_id,
        role : this.editoperator.value.name,
       
      };
  }
}
