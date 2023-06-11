import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NoDataComponent} from './no-data/no-data.component';
import {ImageModule} from 'primeng/image';
import {CommingSoonComponent} from './comming-soon/comming-soon.component';
import {MenuComponent} from './menu/menu.component';
import {LoadingInterceptorComponent} from './loading-interceptor/loading-interceptor.component';
import {CameraComponent} from './camera/camera.component';
import {CameraGalleryComponent} from './camera-gallery/camera-gallery.component';
import {WebcamModule} from 'ngx-webcam';
import {LoadingComponent} from './loading/loading.component';
import {LoadingProcessComponent} from './loading-process/loading-process.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgtoastComponent } from './ngtoast/ngtoast.component';
import { ToastModule } from 'primeng/toast';

const components: any = [
  CameraComponent,
  CameraGalleryComponent,
  CommingSoonComponent,
  LoadingInterceptorComponent,
  MenuComponent,
  NoDataComponent,
  LoadingComponent,
  LoadingProcessComponent,
  NotFoundComponent,
  NgtoastComponent
];

@NgModule({
  declarations: [
    ...components,
    
  ],
  imports: [
    CommonModule,
    ImageModule,
    RouterModule,
    WebcamModule,
    ToastModule
  ],
  exports: [
    ...components
  ]
})
export class ComponentModule {
}
