import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from '@modules/main/main.component';
import {MenuSidebarComponent} from '@modules/main/menu-sidebar/menu-sidebar.component';
import {HeaderComponent} from '@modules/main/header/header.component';
import {FooterComponent} from '@modules/main/footer/footer.component';
import {MessagesComponent} from '@modules/main/header/messages/messages.component';
import {NotificationsComponent} from '@modules/main/header/notifications/notifications.component';
import {LanguageComponent} from '@modules/main/header/language/language.component';
import {ControlSidebarComponent} from '@modules/main/control-sidebar/control-sidebar.component';
import {UserComponent} from '@modules/main/header/user/user.component';
import {SharedModule} from '@/shared/shared.module';
import {MenuItemComponent} from '@modules/main/components/menu-item/menu-item.component';
import {SidebarSearchComponent} from '@modules/main/components/sidebar-search/sidebar-search.component';

@NgModule({
  declarations: [
    MainComponent,
    MenuSidebarComponent,
    HeaderComponent,
    FooterComponent,
    MessagesComponent,
    NotificationsComponent,
    UserComponent,
    LanguageComponent,
    ControlSidebarComponent,
    MenuItemComponent,
    SidebarSearchComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule {
}
