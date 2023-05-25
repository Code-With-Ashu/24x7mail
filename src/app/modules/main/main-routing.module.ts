import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlankComponent} from '@pages/blank/blank.component';
import {MainComponent} from '@modules/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'blank',
        pathMatch: 'prefix'
      },
      {
        path: 'blank',
        component: BlankComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
