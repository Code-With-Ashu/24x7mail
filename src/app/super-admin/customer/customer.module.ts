import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomerRoutingModule} from './customer-routing.module';
import {CustomerComponent} from './customer.component';
import {InboxComponent} from './inbox/inbox.component';
import {ArchivedScansComponent} from './archived-scans/archived-scans.component';
import {OutgoingMailComponent} from './outgoing-mail/outgoing-mail.component';


@NgModule({
  declarations: [
    CustomerComponent,
    InboxComponent,
    ArchivedScansComponent,
    OutgoingMailComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule {
}
