import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SettingsRoutingModule} from './settings-routing.module';
import {SettingsComponent} from './settings.component';
import {Test2Component} from './test2/test2.component';


@NgModule({
  declarations: [
    SettingsComponent,
    Test2Component
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule {
}
