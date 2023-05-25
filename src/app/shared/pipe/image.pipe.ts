import {Pipe, PipeTransform} from '@angular/core';
import {AppService} from '../services/app.service';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
  constructor(private _appService: AppService) {
  }

  transform(value: any, ...args: unknown[]): unknown {
    return this._appService.buildImageSrc(value);
  }
}
