import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MailService {

  constructor(private http: HttpClient) { }

  setHeaders(params='') {
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
    console.log("reqData",reqData)
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


  
  uploadNewMail(payload: any) {
    console.log("payload",payload)
    return this.http.post(`https://api.24x7mail.com/mails`, payload)
      .pipe(
        catchError(this.handleError)
      );
  }

  uploadFile(data: any): Observable<any> {
  
    const hd = new HttpHeaders({
      'Content-Type':'image/jpeg; charset=utf-8',// 'image/jpeg',
      Authorization: `${localStorage.getItem('auth-token')}`,


    });
    const API_URL = `https://api.24x7mail.com/mails`;
    console.log({headers:hd})
    return this.http.post(API_URL,data, {headers:hd} );
  }

  //{'Content-Type': 'multipart/form-data'}
 
}