import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../shared/services/app.service';

@Component({
  selector: 'app-loading-process',
  templateUrl: './loading-process.component.html',
  styleUrls: ['./loading-process.component.scss']
})
export class LoadingProcessComponent implements OnInit {

  constructor(
    public appService: AppService
  ) {
  }

  ngOnInit(): void {
  }

}
