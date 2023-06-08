import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FormsModule } from '@angular/forms';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { OpCustomersRoutingModule } from './op-customers-routing.module';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerDetailsComponent
  ],
  imports: [
    CommonModule,
    OpCustomersRoutingModule,
    OverlayPanelModule,
    ButtonModule,
    ConfirmPopupModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class OpCustomersModule { }
