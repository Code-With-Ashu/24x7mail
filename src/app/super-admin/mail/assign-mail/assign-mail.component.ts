import { Component } from '@angular/core';
import { MailService } from '../mail.services';
import { ConfirmationService, MessageService } from 'primeng/api';
import { OpCustomersService } from '@/super-admin/op-customers/op-customers.services';

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
  customers=[];
  loading = true;
  constructor(private mailService: MailService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private opCustomersService: OpCustomersService) {
  }

  ngOnInit() {
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
    event.target.src = '../../../assets/img/pay.jpg'
  }

  getPendingAssingMailList(status = "pending") {
    console.log(status)
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

  deleteConfirm(event: Event) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Are you sure that you want to delete this mail?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }

  flaggedConfirm(event: Event) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Are you sure that you want to flagged this mail?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }


  selectedCustomer: any;

  getCustomerList(){
    this.opCustomersService.getCustomersList().subscribe(
      (res: any) => {
        this.customers = res.data.map(e=>({name : e.username}));
        console.log(this.customers)
      },(err) => {
      }
    );
  }

  change(event){
    // this.selectedCustomer = event.value;
  }
}
