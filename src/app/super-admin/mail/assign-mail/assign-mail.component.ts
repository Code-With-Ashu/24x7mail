import { Component } from '@angular/core';
import { MailService } from '../mail.services';
import { ConfirmationService, MessageService } from 'primeng/api';
import { OpCustomersService } from '@/super-admin/op-customers/op-customers.services';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from "environments/environment";
interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
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
  submitted: boolean = false;
  first: number = 0;
  totalRows: number = 0;
  limit: number = 10;
  DEFAULT_IMAGE = '../../../assets/images/no-image-icon-23486.gif'
  page_no = 1;

  constructor(private mailService: MailService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private opCustomersService: OpCustomersService) {
  }

  ngOnInit() {
    this.assignForm = new FormGroup({
      mailbox_id: new FormControl('', Validators.required),
      sender_name: new FormControl('', Validators.required),
      mail_id: new FormControl(''),
      mail_type: new FormControl(''),

    });
    this.getPendingAssingMailList("pending");
    this.getCustomerList();
  }

  showDetailDailog(data) {
    this.showDetail = true;
    this.mailBoxInfo = data || {};
    this.assignForm.controls.mail_id.disable();
    this.assignForm.controls.mail_type.disable();
    this.assignForm.controls.mail_id.setValue(this.mailBoxInfo?.mail_box_id);
    this.assignForm.controls.mail_type.setValue(this.mailBoxInfo?.mail_type);

  }

  closeDialog() {
    this.showDetail = false;
  }

  doSomethingOnError(event: any) {
    event.target.src = '../../../../assets/images/no-image-icon-23486.gif'
  }

  getPendingAssingMailList(status = "pending", page_no = 1) {
    this.loading = true;
    this.mailService.getAssingMailList(status, this.page_no, this.limit - 1).subscribe(
      (res: any) => {
        this.loading = false;
        this.list = res?.data || [];
        this.totalRows = res?.total || 0;
      },
      (err) => {
        this.loading = false;
      }
    );
  }

  onPageChange(event: PageEvent) {
    this.page_no = event.page + 1;
    this.limit = event.rows;
    this.getPendingAssingMailList();
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
        this.customers = res.data.map(e => ({ name: e.mail_box_num + ' ' + e.fname + ' ' + e.lname, mail_box_id: e.mail_box_num, user_id: e.id }));
      }, (err) => {
      }
    );
  }


  selectMailbox(event) {
    this.selectedCustomer = event.value;

  }

  assigneMail() {
    this.submitted = true;
    this.loading = true;

    if (this.assignForm.invalid) {
      this.submitted = false;
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Select required fields.' });
      return;
    }

    let payload = {
      mail_id: this.mailBoxInfo?.id,
      reciver: this.selectedCustomer.user_id,
      assingn_status: "assigned",
      sender: this.assignForm.value.sender_name,
    }
    this.mailService.createAssignMail(payload).subscribe(
      (res: any) => {
        this.showDetail = false;
        this.loading = false;
      },
      (err) => {
        this.loading = this.submitted = false;
      }
    );

  }
}
