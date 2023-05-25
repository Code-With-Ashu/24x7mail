import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsComponent} from './settings.component';
import {settings} from '@/super-admin/router-path-super-admin';
import {Test2Component} from '@/super-admin/settings/test2/test2.component';

const routes: Routes = [{
  path: '', component: SettingsComponent, children: [
    {path: '', redirectTo: settings.test, pathMatch: 'full'},
    {path: settings.test, component: Test2Component},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {
}
