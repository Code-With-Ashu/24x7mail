import {Component, OnInit} from '@angular/core';
import {LoaderService} from '@/shared/guards/loader.service';

@Component({
  selector: 'app-loading-interceptor',
  templateUrl: './loading-interceptor.component.html',
  styleUrls: ['./loading-interceptor.component.scss']
})
export class LoadingInterceptorComponent implements OnInit {
  loading!: boolean;

  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe((v: any) => {
      // console.log(v);
      this.loading = v;
    });
  }

  ngOnInit(): void {
  }

}
