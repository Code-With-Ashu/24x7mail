import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProfabricComponentsModule} from '@profabric/angular-components';
import {ComponentModule} from '@/shared/components/component.module';
import {DateDDMMYYPipe} from '@/shared/pipe/date-ddmmyy.pipe';
import {ImagePipe} from '@/shared/pipe/image.pipe';
import {DateWithDotPipe} from '@/shared/pipe/datewithdot.pipe';
import {FieldSumPipe} from '@/shared/pipe/sum.pipe';
import {DateYYMMDDPipe} from '@/shared/pipe/date-yymmdd.pipe';
import {DataTablesModule} from 'angular-datatables';
import {DropdownModule} from 'primeng/dropdown';
import {ScrollTopModule} from 'primeng/scrolltop';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {TooltipModule} from 'primeng/tooltip';
import {PaginatorModule} from 'primeng/paginator';
import {TableModule} from 'primeng/table';
import {ActiveDropdownPipe} from './pipe/active-dropdown.pipe';
import {HttpClientModule} from '@angular/common/http';

const modules: any = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  ProfabricComponentsModule,
  ComponentModule,
  DataTablesModule,
  DropdownModule,
  PaginatorModule,
  TableModule,
  TooltipModule,
  ScrollTopModule,
  AutoCompleteModule,
  HttpClientModule
];

const others: any = [
  FieldSumPipe,
  DateDDMMYYPipe,
  DateYYMMDDPipe,
  DateWithDotPipe,
  ImagePipe,
  ActiveDropdownPipe
];

@NgModule({
  declarations: [
    ...others

  ],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [...modules, ...others]
})
export class SharedModule {
}
