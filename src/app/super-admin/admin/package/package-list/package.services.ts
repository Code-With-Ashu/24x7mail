import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PackageService {

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

  getPackageList() {
    return this.http.get(`https://api.24x7mail.com/package`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getPackageById(id: any) {
    return this.http.get(`https://api.24x7mail.com/package/` + id)
      .pipe(
        catchError(this.handleError)
      );
  }

  savePackage(payload: any) {
    return this.http.post(`https://api.24x7mail.com/package`, payload)
      .pipe(
        catchError(this.handleError)
      );
  }

  editPackage(payload: any, id) {
    return this.http.patch(`https://api.24x7mail.com/package/${id}`, payload)
      .pipe(
        catchError(this.handleError)
      );
  }

  deletePackage(packageId) {
    return this.http.delete(`https://api.24x7mail.com/package/${packageId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getFeaturesList() {
    return this.http.get(`https://api.24x7mail.com/features/`)
      .pipe(
        catchError(this.handleError)
      );
  }
}