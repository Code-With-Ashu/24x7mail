import {Pipe, PipeTransform} from '@angular/core';
import {Router} from '@angular/router';

@Pipe({
  name: 'activeDropdown'
})
export class ActiveDropdownPipe implements PipeTransform {

  constructor(private router: Router) {
  }

  transform(value: any, ...args: unknown[]): unknown {
    return (value.submenu.filter(todo => todo.link === this.router.url).length !== 0) ? 'show' : '';
  }

}
