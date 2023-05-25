import {Injectable} from '@angular/core';
import {HttpApiService} from './http-api.service';
import {AppService} from './app.service';

@Injectable({
  providedIn: 'root',
})
export class PromiseApiService {
  constructor(
    private _appService: AppService,
    private _httpService: HttpApiService
  ) {
  }

  allPlanList() {
    return new Promise((resolve, reject) => {
      this._httpService.dataAPI.packages().subscribe({
        next: (res: any) => {
          resolve(res);
        }, // nextHandler
        error: (error: any) => {
          resolve(error);
        }, // errorHandler
        complete: () => {
        }, // completeHandler
      });
    });
  }
}
