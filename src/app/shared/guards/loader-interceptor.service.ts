import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoaderService} from './loader.service';


@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  private requests: HttpRequest<any>[] = [];

  constructor(private loaderService: LoaderService) {
  }

  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    if (i >= 0) {
      this.requests.splice(i, 1);
    }

    this.loaderService.isLoading.next(this.requests.length > 0);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.requests.push(req);

    // console.log('No of requests--->' + this.requests.length);

    this.loaderService.isLoading.next(true);
    return Observable.create((observer: any) => {
      const subscription = next.handle(req)
        .subscribe({
          next: (event: any) => {
            if (event instanceof HttpResponse) {
              this.removeRequest(req);
              observer.next(event);
            }
          },
          error: (err: any) => {
            // alert('error' + err);
            this.removeRequest(req);
            observer.error(err);
          },
          complete: () => {
            this.removeRequest(req);
            observer.complete();
          }
        });
      // remove request from queue when cancelled
      return () => {
        this.removeRequest(req);
        subscription.unsubscribe();
      };
    });
  }
}
