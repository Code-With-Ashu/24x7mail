import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { op_customer } from '../router-path-super-admin';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { NotFoundComponent } from '@/shared/components/not-found/not-found.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';


const routes: Routes = [
    { path: '', redirectTo: op_customer.customer_list, pathMatch: 'full' },
    { path: op_customer.customer_list, component: CustomerListComponent },
    { path: op_customer.customer_list+'/:id', component: CustomerDetailsComponent },

    { path: '**', component: NotFoundComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OpCustomersRoutingModule {
}
