import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outgoing-mail',
  templateUrl: './outgoing-mail.component.html',
  styleUrls: ['./outgoing-mail.component.scss']
})
export class OutgoingMailComponent {
  isChecked;
  constructor(private router: Router) { }

  viewInbox() {
    this.router.navigate(['/superAdmin/customer/view-inbox']);

  }

  checkValue(event: any) {
    console.log(event);
  }
  checkUncheckAll() {
  
    this.isChecked = true;
  }
}
