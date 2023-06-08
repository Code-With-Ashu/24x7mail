import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerRoutingModule} from './customer-routing.module';
import {CustomerComponent} from './customer.component';
import {InboxComponent} from './inbox/inbox.component';
import {ArchivedScansComponent} from './archived-scans/archived-scans.component';
import {OutgoingMailComponent} from './outgoing-mail/outgoing-mail.component';
import { InboxViewComponent } from './inbox-view/inbox-view.component';

import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomerComponent,
    InboxComponent,
    ArchivedScansComponent,
    OutgoingMailComponent,
    InboxViewComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    OverlayPanelModule,
    ButtonModule,
    ConfirmPopupModule,
    FormsModule
  ]
})
export class CustomerModule {
}
