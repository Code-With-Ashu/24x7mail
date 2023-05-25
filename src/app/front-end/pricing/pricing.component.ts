import {frontEndRoutesPath} from '@/shared/routes-path';
import {Component, OnInit} from '@angular/core';
import {AppService} from '@/shared/services/app.service';
import {HttpApiService} from '@/shared/services/http-api.service';
import {PromiseApiService} from '@/shared/services/promise-api.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  frontEndRoutesPath = frontEndRoutesPath;
  planType = 'monthly';
  planList = [];

  constructor(
    private _appService: AppService,
    private _http: HttpApiService,
    private _promiseService: PromiseApiService
  ) {
  }

  async ngOnInit() {
    await this.filterPlanList();
  }

  async filterPlanList() {
    const allPlan: any = await this._promiseService.allPlanList();
    this.planList = allPlan.data.filter((value: any) => value.type === this.planType);
  }
}
