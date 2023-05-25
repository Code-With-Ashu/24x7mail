import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BlankRoutingModule} from './blank-routing.module';
import {BlankComponent} from '@pages/blank/blank.component';
import {SharedModule} from '@/shared/shared.module';

@NgModule({
  declarations: [
    BlankComponent
  ],
  imports: [
    CommonModule,
    BlankRoutingModule,
    SharedModule
  ]
})
export class BlankModule {
}
