import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccount {
    editAccount:FormGroup;

  submitted = false;

  ngOnInit() {
    this.editAccount = new FormGroup({
      
      checked: new FormControl<boolean>(false)
      
    });}

    save() {
    
      this.submitted = true;
      if (this.editAccount.invalid) {  
        return;
      }
      let req = {
          name : this.editAccount.value.type,
        email : this.editAccount.value.features_id,
        role : this.editAccount.value.name,
       
      };
  }
}
