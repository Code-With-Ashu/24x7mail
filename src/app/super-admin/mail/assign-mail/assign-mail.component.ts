import { Component } from '@angular/core';
import { MailService } from '../mail.services';

@Component({
  selector: 'app-assign-mail',
  templateUrl: './assign-mail.component.html',
  styleUrls: ['./assign-mail.component.scss']
})
export class AssignMailComponent {

  showDetail: boolean = false;
  list = [];

  constructor(private mailService: MailService) {
  }
  ngOnInit() {
    this.getPendingAssingMailList();
  }

  showDetailDailog() {
    this.showDetail = true;
  }

  closeDialog() {
    this.showDetail = false;
  }

  doSomethingOnError(event: any) {
    event.target.src = '../../../assets/img/pay.jpg'
  }

  getPendingAssingMailList() {
    var status = "pending";
    this.mailService.getAssingMailList(status).subscribe(
      (res: any) => {
        this.list = res?.data || [];
      },
      (err) => {
      }
    );
  }
}
