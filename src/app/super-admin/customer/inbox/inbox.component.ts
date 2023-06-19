import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.services';
interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent {
  isChecked;
  mailList: any = [];
  DEFAULT_IMAGE = '../../../assets/images/no-image-icon-23486.gif'
  first: number = 0;
  totalRows: number = 0;
  limit: number = 5;
  page_no = 1;

  constructor(private router: Router,
    public customerService: CustomerService
  ) { }

  ngOnInit() {
    this.getCustomerAssignMailList();
  }
  viewInbox() {
    this.router.navigate(['/superAdmin/customer/view-inbox']);
  }

  checkValue(event: any) {
    console.log(event);
  }

  checkUncheckAll() {
    this.isChecked = true;
  } 

  getCustomerAssignMailList() {
    console.log(this.page_no,this.limit,this.totalRows)
    this.customerService.getCustomerAssignMailList('648837cc7beffa6d08b23a64', this.limit, this.page_no+1).subscribe(
      (res: any) => {
        this.mailList = res?.data;
        this.totalRows = res?.total;
      },
      (err) => {
      }
    );
  }

  onPageChange(event: PageEvent) {
    this.page_no = event.page;
    this.limit = event.rows;
    this.getCustomerAssignMailList();
  }
}
