import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {admin, mail} from '@/super-admin/router-path-super-admin';
import { AdminComponent } from './admin.component';
import { PackageListComponent } from './package/package-list/package-list.component';
import { PackageAddComponent } from './package/package-add/package-add.component';
import { PackageEditComponent } from './package/package-edit/package-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [ 
      {path: '', redirectTo: admin.packages, pathMatch: 'full'},
      {path: admin.packages, component: PackageListComponent},
      // {path: admin.packages+'/add', component: PackageAddComponent},
      // {path: admin.packages+'/edit', component: PackageEditComponent}
    ]
  },
];   

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
