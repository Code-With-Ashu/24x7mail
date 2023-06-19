import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, retry } from 'rxjs/operators';
import { environment } from "environments/environment";

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
    return this.http.post( `${environment.API_URL}/mails`, payload)
      .pipe(
        catchError(this.handleError)
      );
  }

  uploadFile(data: any): Observable<any> {
    const API_URL = `${environment.API_URL}/mails`;
    return this.http.post(API_URL,data);
  }

  getAssingMailList(status: any,page,limit): Observable<any> {
    const API_URL = `${environment.API_URL}/mails?assign_status=${status}&page=${page}&limit=${limit}`;
    return this.http.get(API_URL,this.setHeaders());
  }
 
    
  updateStatus(payload: any,id) {
    return this.http.patch( `${environment.API_URL}/mails/flagged/${id}`, payload)
      .pipe(
        catchError(this.handleError)
      );
  }

  softDeleteMail(id) {
    return this.http.delete( `${environment.API_URL}/mails/soft-delete/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  assignMail(){
    const API_URL = `${environment.API_URL}/assign`;
    return this.http.get(API_URL,this.setHeaders());
  }

  
  createAssignMail(payload){
    const API_URL = `${environment.API_URL}/assign`;
    return this.http.post(API_URL,payload,this.setHeaders());
  }
}