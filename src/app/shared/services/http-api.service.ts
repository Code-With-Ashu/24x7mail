import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {
  baseUrl = 'https://api.24x7mail.com/';
  dataAPI: any = {};

  constructor(
    private _http: HttpClient,
  ) {
    this.dataAPI = {
      login: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}user/login`, data);
      },
      register: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}user/register`, data);
      },

      // use for getting plan price list
      packages: (data: any) => {
        return this.getAjaxMethod(`${this.baseUrl}package`);
      },

      // MapBox Api
      mapSearchBox: (query: string, accessToken?: string) => {
        return this.getAjaxMethod(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${accessToken}`);
      },
      dateSetAPi: (accessToken?: string) => {
        return this.getAjaxMethod(`https://api.mapbox.com/datasets/v1/test/dXJuOm1ieHBsYzpCZVRz?access_token=${accessToken}`);
      }
    };
  }

  getAjaxMethod(url: any) {
    return this._http.get(url);
  }

  postAjaxMethod(url: any, data: any) {
    return this._http.post(url, JSON.stringify(data));
  }

  forgotPassword(email: string) {
    return this._http.post(`${this.baseUrl}user/forgot-password`, email);
  }
}
