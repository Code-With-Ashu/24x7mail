import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReportsRoutingModule} from './reports-routing.module';
import {ReportsComponent} from './reports.component';
import {TestComponent} from './test/test.component';
import {OperationsComponent} from './operations/operations.component';
import {StatementsComponent} from './statements/statements.component';
import {QuaterlyReportComponent} from './quaterly-report/quaterly-report.component';
import {CloseAccountComponent} from './close-account/close-account.component';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    ReportsComponent,
    TestComponent,
    OperationsComponent,
    StatementsComponent,
    QuaterlyReportComponent,
    CloseAccountComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    TableModule
  ]
})
export class ReportsModule {
}
