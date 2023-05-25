import {Component, OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {AppService} from '@/shared/services/app.service';
import {frontEndRoutesPath} from '@/shared/routes-path';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {
  locationName: any;
  frontEndRoutesPath = frontEndRoutesPath;

  constructor(private _appService: AppService) {
  }

  ngOnInit() {
    (mapboxgl as typeof mapboxgl).accessToken = this._appService.mapBoxAccessToken;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      zoom: 5,
      center: JSON.parse(localStorage.getItem('locationSet')).center
    });
    const popup = new mapboxgl.Popup({offset: 25, className: 'text-dark'}).setText(
      'Construction on the Washington Monument began in 1848.'
    );
    const marker1 = new mapboxgl.Marker({color: 'black'})
      .setLngLat(JSON.parse(localStorage.getItem('locationSet')).geometry.coordinates)
      .setPopup(popup)
      .addTo(map);
    this.locationName = JSON.parse(localStorage.getItem('locationSet')).text;

  }
}
