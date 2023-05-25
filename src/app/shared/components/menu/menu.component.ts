import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {AppService} from '../../services/app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() submenuItem: any;
  public submenu: any = [];

  constructor(private appService: AppService, private router: Router) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.submenu = this.submenuItem; // this is if send data from parent to child as new value every time declare onChanges lifecycle
  }

  gotoPage(menu: any) {
    const routePath = `${this.router.url}/${menu.url}`;
    this.appService.pageNavigation(routePath);
  }

  gotoBack() {
    this.appService.backClicked();
  }
}
