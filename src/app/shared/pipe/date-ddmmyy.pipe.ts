import {Pipe, PipeTransform} from '@angular/core';
import {AppService} from '../services/app.service';

@Pipe({
  name: 'dateDDMMYY'
})
export class DateDDMMYYPipe implements PipeTransform {
  constructor(private appService: AppService) {
  }

  transform(value: unknown, ...args: unknown[]): unknown {
    return this.appService.dateFormatDDMMYY(value);
  }

}
