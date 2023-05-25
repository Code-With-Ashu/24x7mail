import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../shared/services/app.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor(
    public appService: AppService
  ) {
  }

  ngOnInit(): void {
  }

}
