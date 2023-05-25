import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlankComponent} from '@pages/blank/blank.component';

const routes: Routes = [
  {path: '', component: BlankComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlankRoutingModule {
}
