import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { OpCustomersService } from '../op-customers.services';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {

  
  constructor( private _router: Router,
    private opCustomersService: OpCustomersService
    ) {
  }
  ngOnInit() {
   // this.getCustomersList()
  }

  remoteLogin(){
    localStorage.setItem('customer-remote-auth','token');
    this._router.navigate([`superAdmin/customer/`]);
  }

  getCustomersList(){
    this.opCustomersService.getCustomersList().subscribe(
      (res: any) => {
        console.log(res)
      },
      (err) => {
      }
    );
  }
}
