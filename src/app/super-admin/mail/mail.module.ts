import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailRoutingModule } from './mail-routing.module';
import { MailComponent } from './mail.component';
import { RequestsComponent } from '@/super-admin/mail/requests/requests.component';
import { UploadNewMailComponent } from './upload-new-mail/upload-new-mail.component';
import { AssignMailComponent } from './assign-mail/assign-mail.component';
import { ReturnedComponent } from './returned/returned.component';
import { MailManagementComponent } from './mail-management/mail-management.component';
import { PendingComponent } from './outgoing-mail/pending/pending.component';
import { PackageListComponent } from './package/package-list/package-list.component';
import { PackageAddComponent } from './package/package-add/package-add.component';
import { PackageEditComponent } from './package/package-edit/package-edit.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MailComponent,
    RequestsComponent,
    UploadNewMailComponent,
    AssignMailComponent,
    ReturnedComponent,
    MailManagementComponent,
    PendingComponent,
    PackageListComponent,
    PackageAddComponent,
    PackageEditComponent
  ],
  imports: [
    CommonModule,
    MailRoutingModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MailModule {
}
