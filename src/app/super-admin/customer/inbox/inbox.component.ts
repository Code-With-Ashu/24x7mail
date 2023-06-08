import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent {
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
