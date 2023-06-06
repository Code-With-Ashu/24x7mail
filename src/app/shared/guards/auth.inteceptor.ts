import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {AppService} from '@/shared/services/app.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _appService: AppService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'Authorization': `${this._appService.getToken()}`,
        // 'Content-Type':'image/jpeg'
        'Content-Type':'image/jpeg'
      }
    });

    return next.handle(request)
      .pipe(catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          // console.log('This is client side error');
          errorMsg = `Error: ${error.error.message}`;
        } else {
          // console.log('This is server side error');
          errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        }
        // console.log(errorMsg);
        this._appService.apiCallReqError();
        return throwError(errorMsg);
      }));
  }
}
