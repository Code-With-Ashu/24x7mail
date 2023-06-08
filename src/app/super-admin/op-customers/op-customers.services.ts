import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class OpCustomersService {

    constructor(private http: HttpClient) { }

    setHeaders(params = '') {
        let reqData: any = { headers: {} };
        const accessToken = localStorage.getItem('auth-token');
        console.log(accessToken);
        if (accessToken) {
            reqData = {
                headers: {
                    Authorization: `${accessToken}`,
                    'Content-Type': `image/jpeg`
                },
            };
        }
        if (params) {
            Object.keys(params).map((k) => {
                reqData.headers[k] = params[k];
            });
        }
        console.log("reqData", reqData)
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

    getCustomersList() {
        return this.http.get(`${environment.API_URL}/user/customer-list`,this.setHeaders())
          .pipe(
            catchError(this.handleError)
          );
      }

}