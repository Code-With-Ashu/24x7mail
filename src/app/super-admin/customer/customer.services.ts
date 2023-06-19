import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { environment } from "environments/environment";

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

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

  getCustomerAssignMailList(user_id,limit,page_no){
    const API_URL = `${environment.API_URL}/assign?user_id=${user_id}&page=${page_no}&limit=${limit}`;
    return this.http.get(API_URL,this.setHeaders());
  }

}
