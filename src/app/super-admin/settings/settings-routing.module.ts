import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsComponent} from './settings.component';
import {settings} from '@/super-admin/router-path-super-admin';
import {Test2Component} from '@/super-admin/settings/test2/test2.component';
import  {MyAccount} from "@/super-admin/settings/my-account/my-account.component"
import  {MailBoxSetting} from "@/super-admin/settings/mailbox-setting/mailbox-setting.component"
import {Operators} from "@/super-admin/settings/operators/operators.component"
import {AdvancedSetting} from "@/super-admin/settings/advanced-setting/advanced-setting.component"
import {VedioTutorials} from "@/super-admin/settings/vedio-tutorials/vedio-tutorials.component"
 
const routes: Routes = [{
  path: '', component: SettingsComponent, children: [
    {path: '', redirectTo: settings.my_account, pathMatch: 'full'},
    {path: settings.test, component: Test2Component},
    {path: settings.my_account, component: MyAccount},
    {path: settings.operators, component: Operators},
    {path: settings.advanced_setting, component: AdvancedSetting},
    {path: settings.mailbox_setting, component: MailBoxSetting},
    {path: settings.vedio_tutorials, component: VedioTutorials},

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {
}
