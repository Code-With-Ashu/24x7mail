import {Component} from '@angular/core';
import { SettingsService } from '../settings.service';

export interface profile {
  fname: string;
}



@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccount {

  profile :any;
  editaccount : boolean;
  editpassword : boolean = false;
  loading: boolean;
  fname:any;
  lname:any;
  email:any;

  constructor(private settingService:SettingsService) { }

  ngOnInit() {
    this.getProfile()
  }


  getProfile(){
    this.loading = true;
    this.settingService.getProfile().subscribe((res: any) => {
      this.fname = res.data.fname;
      this.lname = res.data.lname;
      this.email = res.data.email;
      this.loading = false;
    }, err => {
      this.loading = false;
    });
  }

  editprofile(){
    this.editaccount = true;
  }

  changepassword(){
    this.editpassword = !this.editpassword;
  }


  closePopup(modalName){
    if(modalName == 'changePassPopup'){
      this.editpassword = false;
    } 
    if(modalName == 'editProfilePopup'){
      this.editaccount = false;
    } 
    
  }
 



}
