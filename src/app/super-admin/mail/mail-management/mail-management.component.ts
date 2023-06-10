import {Component} from '@angular/core';

@Component({
  selector: 'app-mail-management',
  templateUrl: './mail-management.component.html',
  styleUrls: ['./mail-management.component.scss']
})
export class MailManagementComponent {

  date: Date;
  openshipDetail : boolean;
  assignedMail : boolean
  p: number = 1;


  shipDetai(){
this.openshipDetail= true
  }

  assignedmail(){
 this.assignedMail=true
  }

}
