import { Component } from '@angular/core';
import { MailService } from '../mail.services';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-assign-mail',
  templateUrl: './assign-mail.component.html',
  styleUrls: ['./assign-mail.component.scss'],


})
export class AssignMailComponent {

  showDetail: boolean = false;
  list = [];

  constructor(private mailService: MailService,
    private messageService: MessageService) {
  }
  ngOnInit() {
    console.log('ngOnInit')

    this.show();

    this.getPendingAssingMailList();
  }

  show() {
    console.log('shoe')
    this.messageService.add({key: 'myKey1', severity: 'success', summary: 'Success', detail: 'Message Content' });
    console.log('here')

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
