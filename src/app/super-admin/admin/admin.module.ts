import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageListComponent } from './package/package-list/package-list.component';
import { PackageAddComponent } from './package/package-add/package-add.component';
import { PackageEditComponent } from './package/package-edit/package-edit.component';
import { ComponentModule } from '@/shared/components/component.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
  declarations: [
    PackageListComponent,
    PackageAddComponent,
    PackageEditComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,
    ToastModule,
    ConfirmDialogModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    NgxPaginationModule,
    ToastModule,
    NgxPayPalModule
  ]
 
})
export class AdminModule {
}
