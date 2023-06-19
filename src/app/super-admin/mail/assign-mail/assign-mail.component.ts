import { Component } from '@angular/core';
import { MailService } from '../mail.services';
import { ConfirmationService, MessageService } from 'primeng/api';
import { OpCustomersService } from '@/super-admin/op-customers/op-customers.services';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from "environments/environment";

@Component({
  selector: 'app-assign-mail',
  templateUrl: './assign-mail.component.html',
  styleUrls: ['./assign-mail.component.scss'],
  providers: [ConfirmationService]
})
export class AssignMailComponent {

  list = [];
  showDetail: boolean = false;
  mailBoxInfo: any = {};
  customers = [];
  loading = true;
  selectedCustomer: any;
  assignForm: FormGroup;
  environment = environment;



  constructor(private mailService: MailService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private opCustomersService: OpCustomersService) {
  }

  ngOnInit() {
    this.assignForm = new FormGroup({
      mailbox_id: new FormControl('', Validators.required),
    });
    this.getPendingAssingMailList("pending");
    this.getCustomerList();
  }

  showDetailDailog(data) {
    this.showDetail = true;
    this.mailBoxInfo = data || {};
  }

  closeDialog() {
    this.showDetail = false;
  }

  doSomethingOnError(event: any) {
    event.target.src = '../../../../assets/images/no-image-icon-23486.gif'
  }

  getPendingAssingMailList(status = "pending") {
    this.loading = true;
    this.mailService.getAssingMailList(status).subscribe(
      (res: any) => {
        this.loading = false;
        this.list = res?.data || [];
      },
      (err) => {
        this.loading = false;
      }
    );
  }

  deleteConfirm(event: Event, _id) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Are you sure that you want to delete this mail?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.loading = true;

        this.mailService.softDeleteMail(_id).subscribe(
          (res: any) => {
            this.loading = false;
            this.list = res?.data || [];
          },
          (err) => {
            this.loading = false;
          })
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }

  flaggedConfirm(event: Event, _id, status) {
    this.confirmationService.confirm({
      target: event.target,
      message: `Are you sure that you want to ${status} this mail?`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.loading = true;

        let payload = { status: 'flagged' };
        this.mailService.updateStatus(payload, _id).subscribe(
          (res: any) => {
            this.loading = false;
            this.list = res?.data || [];
          },
          (err) => {
            this.loading = false;
          }
        );
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      },
      reject: () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }

  getCustomerList() {
    this.opCustomersService.getCustomersList().subscribe(
      (res: any) => {
        this.customers = res.data.map(e => ({ name: e.mail_box_num + ' ' + e.fname + ' ' + e.lname }));
      }, (err) => {
      }
    );
  }

  change(event) {
    // this.selectedCustomer = event.value;
  }
}
