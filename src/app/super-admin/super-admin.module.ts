import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SuperAdminRoutingModule} from './super-admin-routing.module';
import {SuperAdminComponent} from './super-admin.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {SharedModule} from '@/shared/shared.module';


@NgModule({
  declarations: [
    SuperAdminComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    SharedModule
  ]
})
export class SuperAdminModule {
}
