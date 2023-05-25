import {Component, OnInit} from '@angular/core';
import {AppService} from '@/shared/services/app.service';
import * as mapboxgl from 'mapbox-gl';
import {frontEndRoutesPath} from '@/shared/routes-path';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  locationName: any;
  frontEndRoutesPath = frontEndRoutesPath;

  constructor(private _appService: AppService
  ) {
  }

  ngOnInit() {
    (mapboxgl as typeof mapboxgl).accessToken = this._appService.mapBoxAccessToken;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      zoom: 1,
      center: [-82.033629763236, 28.9444647055242]
    });

    const marker1 = new mapboxgl.Marker({color: 'black'})
      .setLngLat([-82.033629763236, 28.9444647055242])
      .addTo(map);
    this.locationName = JSON.parse(localStorage.getItem('locationSet')).text;

  }
}
