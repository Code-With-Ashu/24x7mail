import { Component } from '@angular/core';
import { PackageService } from './package.services';
import { AppService } from '@/shared/services/app.service';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss'],
  providers: [ ]

})
export class PackageListComponent {

  packages=[];
  editPackage: boolean;
  closeResult = '';
  loading= true;
  addPackage: boolean;
  deletePopup = false;
  showSuccess= false;
  p: number = 1;
  selectPackageInfo = {};
  public payPalConfig?: IPayPalConfig;
;

  
  constructor(
    private packageService: PackageService,
    public _appService: AppService,

  ){

  }

  
  ngOnInit() {
    this.initConfig();

    this.getPackageList();
  }

  dialogInfoUpdate(info:any) {
    
    this.editPackage = false;  

    if(info.status == 'success'){
      this.addPackage = false;
    } else  if(info.status == 'error'){
      this.editPackage = false;
    }
    
    this._appService.toastService(info.status, info.error_message);
    this.getPackageList();
  }

  getPackageList(){
    this.loading = true;
    this.packageService.getPackageList().subscribe((res: any) => {
      this.packages = res.data;
      this.loading = false;
    }, err => {
      this.loading = false;
    });
  }

  showDialog(event,_package){
    this.selectPackageInfo = _package;
    this.editPackage = true;
  }

  closePackageDialog(){
    this.editPackage = false;
  }


  showNewPackage(){
    this.addPackage = true;
  }
  showDeleteDialog(id){
   
    this.deletePopup = true;
  }
  
  delete(event: Event, isDelete, packageId ='') {    
    this.loading = true;

    if(isDelete == 'YES'){
      this.packageService.deletePackage(packageId).subscribe((res: any) => {
        this.deletePopup = false;
        this.loading = false;
        this.getPackageList();
      }, err => {
        this.loading = false;
      });
    } else {
      this.loading = false;
      this.deletePopup = false;
    }
  }

  private initConfig(): void {
    this.payPalConfig = {
    currency: 'EUR',
    clientId: 'AStMgOw3RUFNZYGtYIUDMefiO7RZ6zqwivfxrat2A2jmzSR4ie_aWvSwI4BRzLmPCZyRm2kfdyO4CGpY',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'EUR',
            value: '9.99',
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: '9.99'
              }
            }
          },
          items: [
            {
              name: 'Enterprise Subscription',
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'EUR',
                value: '9.99',
              },
            }
          ]
        }
      ]
    },
    advanced: {
      commit: 'true'
    },
    style: {
      label: 'paypal',
      layout: 'vertical'
    },
    onApprove: (data, actions) => {
      console.log('onApprove - transaction was approved, but not authorized', data, actions);
      actions.order.get().then(details => {
        console.log('onApprove - you can get full order details inside onApprove: ', details);
      });
    },
    onClientAuthorization: (data) => {
      console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      this.showSuccess = true;
    },
    onCancel: (data, actions) => {
      console.log('OnCancel', data, actions);
    },
    onError: err => {
      console.log('OnError', err);
    },
    onClick: (data, actions) => {
      console.log('onClick', data, actions);
    },
  };
  }
}
