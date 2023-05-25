import {Pipe, PipeTransform} from '@angular/core';
import {AppService} from '../services/app.service';

@Pipe({
  name: 'dateYYMMDD'
})
export class DateYYMMDDPipe implements PipeTransform {
  constructor(private appService: AppService) {
  }

  transform(value: unknown, ...args: unknown[]): unknown {
    return this.appService.dateFormatYYMMDD(value);
  }

}
