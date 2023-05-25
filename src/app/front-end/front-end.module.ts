import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FrontEndRoutingModule} from './front-end-routing.module';
import {FrontEndComponent} from './front-end.component';
import {HomeComponent} from './home/home.component';
import {PricingComponent} from './pricing/pricing.component';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {HowitsworkComponent} from './howitswork/howitswork.component';
import {LocationsComponent} from './locations/locations.component';
import {PartnerOperatorComponent} from './partner-operator/partner-operator.component';
import {PartnerAffiliateComponent} from './partner-affiliate/partner-affiliate.component';
import {NewsComponent} from './component/news/news.component';
import {LottieComponent} from 'ngx-lottie';
import {RequestLocationComponent} from './request-location/request-location.component';
import {StatesComponent} from './states/states.component';
import {CitiesComponent} from './cities/cities.component';
import {PlanRegistrationComponent} from './plan-registration/plan-registration.component';
import {SharedModule} from '@/shared/shared.module';


@NgModule({
  declarations: [
    FrontEndComponent,
    HomeComponent,
    PricingComponent,
    HeaderComponent,
    FooterComponent,
    HowitsworkComponent,
    LocationsComponent,
    PartnerOperatorComponent,
    PartnerAffiliateComponent,
    NewsComponent,
    RequestLocationComponent,
    StatesComponent,
    CitiesComponent,
    PlanRegistrationComponent
  ],
  imports: [
    CommonModule,
    FrontEndRoutingModule,
    LottieComponent,
    SharedModule
  ]
})
export class FrontEndModule {
}
