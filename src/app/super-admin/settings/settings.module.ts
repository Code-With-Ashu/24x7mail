import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {SettingsRoutingModule} from './settings-routing.module';
import {SettingsComponent} from './settings.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import  {OperatorsList} from './operators/operators-list/operators-list.component'
import { OperatorsAdd } from './operators/operators-add/operators-add.component';
import { OperatorsEditComponent } from './operators/operators-edit/operators-edit.component';
import { MyAccount } from './my-account/my-account.component';
import { ChangePasswordComponent } from './my-account/change-password/change-password.component';
import  { EditAccount } from  "./my-account/edit-account/edit-account.component";
import { ToggleButtonModule } from 'primeng/togglebutton';
import {MarketingFile} from "./marketing-files/marketing-files.component"



@NgModule({
  declarations: [
    SettingsComponent,
    OperatorsList,
    OperatorsAdd,
    OperatorsEditComponent,
    MyAccount,
    MarketingFile,
    ChangePasswordComponent,
    EditAccount 

    
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    DialogModule,
    ButtonModule,
    ReactiveFormsModule
  ]
})
export class SettingsModule {
}
