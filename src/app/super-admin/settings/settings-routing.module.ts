import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsComponent} from './settings.component';
import {settings} from '@/super-admin/router-path-super-admin';

const routes: Routes = [{
  path: '', component: SettingsComponent, children: [
    {path: '', redirectTo: settings.test, pathMatch: 'full'},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {
}
