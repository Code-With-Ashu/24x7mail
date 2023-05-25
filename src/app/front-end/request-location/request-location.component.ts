import {Component, OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {HttpApiService} from '@/shared/services/http-api.service';
import {AppService} from '@/shared/services/app.service';
import {Router} from '@angular/router';
import {frontEndRoutesPath} from '@/shared/routes-path';

export interface MapboxOutput {
  attribution: string;
  features: Feature[];
  query: [];
}

export interface Feature {
  place_name: string;
}


@Component({
  selector: 'app-request-location',
  templateUrl: './request-location.component.html',
  styleUrls: ['./request-location.component.scss']
})
export class RequestLocationComponent implements OnInit {
  addresses: any = [];
  selectedAddress = '';
  frontEndRoutesPath = frontEndRoutesPath;

  constructor(private _http: HttpApiService, private _apiService: AppService, private _router: Router) {
  }

  ngOnInit() {
    localStorage.removeItem('locationSet');
    (mapboxgl as typeof mapboxgl).accessToken = this._apiService.mapBoxAccessToken;
  }

  search(event: any) {
    const searchTerm = event.query.toLowerCase();
    if (searchTerm && searchTerm.length > 0) {
      this._http.dataAPI.mapSearchBox(searchTerm, mapboxgl.accessToken)
        .subscribe({
          next: (res: any) => {
            console.log(res);
            this.addresses = res.features;
          }
        });

      /* this.searchWord(searchTerm)
         .subscribe((features: Feature[]) => {
           console.log(features);
           // this.addresses = features.map(feat => feat.place_name);
           this.addresses = features;
           console.log(this.addresses);
         });*/
    } else {
      this.addresses = [];
    }
  }

  onSelect(address: string) {
    console.log(address);
    this.selectedAddress = address;
    this.addresses = [];
    localStorage.setItem('locationSet', JSON.stringify(address));
    this._router.navigate([`/${this.frontEndRoutesPath.states}`]).then();
  }
}
