import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {customer, op_customer} from '@/super-admin/router-path-super-admin';
import {InboxComponent} from '@/super-admin/customer/inbox/inbox.component';
import {ArchivedScansComponent} from '@/super-admin/customer/archived-scans/archived-scans.component';
import { InboxViewComponent } from './inbox-view/inbox-view.component';
import { OutgoingMailComponent } from './outgoing-mail/outgoing-mail.component';

const routes: Routes = [
  {path: '', redirectTo: customer.inbox, pathMatch: 'full'},
  {path: customer.inbox, component: InboxComponent},
  {path: customer.view_inbox, component: InboxViewComponent},
  {path: customer.archived_scans, component: ArchivedScansComponent},
  {path: customer.outgoing_mail, component: OutgoingMailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
