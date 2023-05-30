import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MailComponent} from './mail.component';
import {RequestsComponent} from '@/super-admin/mail/requests/requests.component';
import {mail} from '@/super-admin/router-path-super-admin';
import {UploadNewMailComponent} from '@/super-admin/mail/upload-new-mail/upload-new-mail.component';
import {AssignMailComponent} from '@/super-admin/mail/assign-mail/assign-mail.component';
import {ReturnedComponent} from '@/super-admin/mail/returned/returned.component';
import {MailManagementComponent} from '@/super-admin/mail/mail-management/mail-management.component';
import {PendingComponent} from '@/super-admin/mail/outgoing-mail/pending/pending.component';
import { PackageListComponent } from './package/package-list/package-list.component';
import { PackageAddComponent } from './package/package-add/package-add.component';
import { PackageEditComponent } from './package/package-edit/package-edit.component';

const routes: Routes = [
  {
    path: '',
    component: MailComponent,
    children: [
      {path: '', redirectTo: mail.request, pathMatch: 'full'},
      {path: mail.request, component: RequestsComponent},
      {path: mail.upload_new_mail, component: UploadNewMailComponent},
      {path: mail.assign_mail, component: AssignMailComponent},
      {path: mail.returned, component: ReturnedComponent},
      {path: mail.mail_management, component: MailManagementComponent},
      {path: mail.pending, component: PendingComponent},
      {path: mail.packages, component: PackageListComponent},
      {path: mail.packages+'/add', component: PackageAddComponent},
      {path: mail.packages+'/edit', component: PackageEditComponent},

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailRoutingModule {
}
