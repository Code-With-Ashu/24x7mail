import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  constructor(private http: HttpClient) { }
  
  setHeaders(params: any) {
    let reqData: any = { headers: {} };
    const accessToken = localStorage.getItem('auth-token');
    console.log(accessToken);
    if (accessToken) {
      reqData = {
        headers: {
          Authorization: `${accessToken}`,
        },
      };
    }
    if (params != null) {
      Object.keys(params).map((k) => {
        reqData.headers[k] = params[k];
      });
    }
    return reqData;
  }

  handleError(error) {
    let errorMessage = {};
    if (error.status == 0) {
      console.log("API Server is not responding")
    }
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = { message: error.error.message };
    } else {
      // server-side error
      errorMessage = { status: error.status, message: error.error.message };
    }
    return throwError(errorMessage);
  }

  ChangePassword(payload: any) {
    return this.http.patch(`https://api.24x7mail.com/user/change-password`, payload)
      .pipe(
        catchError(this.handleError)
      );
  }



}
