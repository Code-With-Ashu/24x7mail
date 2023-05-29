import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SuperAdminComponent} from './super-admin.component';
import {superAdminRoutes} from '@/super-admin/router-path-super-admin';
import { PackageListComponent } from './mail/package/package-list/package-list.component';

const routes: Routes = [
  {
    path: '', component: SuperAdminComponent,
    children: [
      {path: '', redirectTo: superAdminRoutes.mail, pathMatch: 'full'},
      {path: superAdminRoutes.mail, loadChildren: () => import('./mail/mail.module').then(m => m.MailModule)},
      {
        path: superAdminRoutes.customer,
        loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
      },
      {
        path: superAdminRoutes.report,
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
      },
      {
        path: superAdminRoutes.settings,
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: superAdminRoutes.admin,
        component: PackageListComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule {
}
