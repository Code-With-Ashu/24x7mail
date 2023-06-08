import {Component} from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccount {

  editaccount : boolean;
  editpassword : boolean;

  editprofile(){
    this.editaccount = true;
  }

  changepassword(){
    this.editpassword = true;
  }



}
