import {Component} from '@angular/core';

@Component({
  selector: 'app-assign-mail',
  templateUrl: './assign-mail.component.html',
  styleUrls: ['./assign-mail.component.scss']
})
export class AssignMailComponent {

  showDetail : boolean = false;

  showDetailDailog(){
    this.showDetail = true;
  }
  
  closeDialog(){
    this.showDetail = false;
  } 
}
