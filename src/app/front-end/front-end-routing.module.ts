import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FrontEndComponent} from './front-end.component';
import {HomeComponent} from '@frontend/home/home.component';
import {PricingComponent} from '@frontend/pricing/pricing.component';
import {HowitsworkComponent} from '@frontend/howitswork/howitswork.component';
import {LocationsComponent} from '@frontend/locations/locations.component';
import {PartnerOperatorComponent} from '@frontend/partner-operator/partner-operator.component';
import {PartnerAffiliateComponent} from '@frontend/partner-affiliate/partner-affiliate.component';
import {RequestLocationComponent} from '@frontend/request-location/request-location.component';
import {StatesComponent} from '@frontend/states/states.component';
import {CitiesComponent} from '@frontend/cities/cities.component';
import {PlanRegistrationComponent} from '@frontend/plan-registration/plan-registration.component';
import {frontEndRoutesPath} from '@/shared/routes-path';

const routes: Routes = [
  {
    path: '',
    component: FrontEndComponent,
    children: [
      {path: '', redirectTo: frontEndRoutesPath.home, pathMatch: 'full'},
      {path: frontEndRoutesPath.home, component: HomeComponent},
      {path: frontEndRoutesPath.pricing, component: PricingComponent},
      {path: frontEndRoutesPath.howItWorks, component: HowitsworkComponent},
      {path: frontEndRoutesPath.browseLocations, component: LocationsComponent},
      {path: frontEndRoutesPath.partnerOperator, component: PartnerOperatorComponent},
      {path: frontEndRoutesPath.partnerAffiliate, component: PartnerAffiliateComponent},
      {path: frontEndRoutesPath.requestLocation, component: RequestLocationComponent},
      {path: frontEndRoutesPath.states, component: StatesComponent},
      {path: frontEndRoutesPath.cities, component: CitiesComponent},
      {path: frontEndRoutesPath.planRegistration, component: PlanRegistrationComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontEndRoutingModule {
}
