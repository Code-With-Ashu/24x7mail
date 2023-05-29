import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PackageService {

    constructor(
        private http: HttpClient    
        ) {

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
        
      }