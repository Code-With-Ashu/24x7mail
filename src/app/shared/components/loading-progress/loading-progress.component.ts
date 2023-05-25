import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../shared/services/app.service';

@Component({
  selector: 'app-loading-progress',
  templateUrl: './loading-progress.component.html',
  styleUrls: ['./loading-progress.component.scss']
})
export class LoadingProgressComponent implements OnInit {

  constructor(
    public appService: AppService
  ) {
  }

  ngOnInit(): void {
  }

}
