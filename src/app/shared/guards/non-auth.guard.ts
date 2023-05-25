import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree,} from '@angular/router';
import {Observable} from 'rxjs';
import {AppService} from '@/shared/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class NonAuthGuard implements CanActivate, CanActivateChild {
  constructor(private _appService: AppService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this._appService.userDetails()) {
      this._appService.rootNavigation();
    }
    return true;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.canActivate(next, state);
  }
}
