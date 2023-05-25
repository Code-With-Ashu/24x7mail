import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NonAuthGuard} from '@/shared/guards/non-auth.guard';
import {AuthGuard} from '@/shared/guards/auth.guard';
import {routesPath} from '@/shared/routes-path';

const routes: Routes = [
  {path: '', loadChildren: () => import('@/front-end/front-end.module').then(m => m.FrontEndModule)},
  {
    path: routesPath.admin, loadChildren: () => import('@modules/main/main.module').then(m => m.MainModule)
  },
  {
    path: routesPath.login,
    loadChildren: () => import('@modules/login/login.module').then(m => m.LoginModule),
    canActivate: [NonAuthGuard]
  },
  {
    path: routesPath.superAdmin,
    loadChildren: () => import('./super-admin/super-admin.module').then(m => m.SuperAdminModule),
    canActivate: [AuthGuard]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    useHash: true,
    scrollPositionRestoration: 'top',
    scrollOffset: [0, 0],
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
