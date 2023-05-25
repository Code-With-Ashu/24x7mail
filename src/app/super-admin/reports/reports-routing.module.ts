import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReportsComponent} from './reports.component';
import {reports} from '@/super-admin/router-path-super-admin';
import {OperationsComponent} from '@/super-admin/reports/operations/operations.component';
import {StatementsComponent} from '@/super-admin/reports/statements/statements.component';
import {QuaterlyReportComponent} from '@/super-admin/reports/quaterly-report/quaterly-report.component';
import {CloseAccountComponent} from '@/super-admin/reports/close-account/close-account.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    children: [
      {path: '', redirectTo: reports.operations, pathMatch: 'full'},
      {path: reports.operations, component: OperationsComponent},
      {path: reports.statements, component: StatementsComponent},
      {path: reports.quarterlyReport, component: QuaterlyReportComponent},
      {path: reports.closedAccount, component: CloseAccountComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule {
}
