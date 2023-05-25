import {Pipe, PipeTransform} from '@angular/core';
import {AppService} from '../services/app.service';

@Pipe({
  name: 'dateWithDotPipe'
})
export class DateWithDotPipe implements PipeTransform {
  constructor(private appService: AppService) {
  }

  transform(value: unknown, ...args: unknown[]): unknown {
    return this.appService.dateFormatWithDot(value);
  }

}
