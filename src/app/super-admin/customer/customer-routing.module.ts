import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {customer} from '@/super-admin/router-path-super-admin';
import {InboxComponent} from '@/super-admin/customer/inbox/inbox.component';
import {ArchivedScansComponent} from '@/super-admin/customer/archived-scans/archived-scans.component';

const routes: Routes = [
  {path: '', redirectTo: customer.inbox, pathMatch: 'full'},
  {path: customer.inbox, component: InboxComponent},
  {path: customer.archived_scans, component: ArchivedScansComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
