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
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentModule } from '@/shared/components/component.module';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    MailComponent,
    RequestsComponent,
    UploadNewMailComponent,
    AssignMailComponent,
    ReturnedComponent,
    MailManagementComponent,
    PendingComponent

  ],
  imports: [
    CommonModule,
    MailRoutingModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentModule,
    ToastModule,
    ConfirmDialogModule
  ]

})
export class MailModule {
}
