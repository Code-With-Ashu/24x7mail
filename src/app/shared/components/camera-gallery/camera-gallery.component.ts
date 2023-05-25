import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AppService} from '../../services/app.service';

/*import {Device} from '@capacitor/device';
import {Camera, CameraResultType, CameraSource} from '@capacitor/camera';*/

@Component({
  selector: 'app-camera-gallery',
  templateUrl: './camera-gallery.component.html',
  styleUrls: ['./camera-gallery.component.scss']
})
export class CameraGalleryComponent implements OnInit, OnChanges {
  public imgBase64Source: any = [];
  public showWebCamera: boolean = false;
  @Input() clearResource: any;
  @Output() sendImageObj: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public appService: AppService
  ) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.imgBase64Source = this.clearResource;
  }

  removeImage(index: any) {
    this.imgBase64Source.splice(index, 1);
  }

  async getWebcamImage(event: any) {
    const imageObj: any = await this.appService.handleWebCamImage(event);
    this.showWebCamera = false;
    this.setImageObj(imageObj);
  }

  async handleFileInput(event: any) {
    const imageObj: any = await this.appService.handleFileInput(event);
    this.setImageObj(imageObj);
  }

  setImageObj(imageObj: any) {
    if (imageObj.preview !== '') {
      const sendObj: any = {
        base64String: imageObj.base64,
        imagename: '',
        ext: imageObj.ext,
        preview: imageObj.preview
      };
      this.imgBase64Source.push(sendObj);
      this.emitImageObj();
    }
  }

  cameraCloseHandler(status: any) {
    if (status === 0) {
      this.showWebCamera = false;
    }
  }

  emitImageObj() {
    this.sendImageObj.emit(this.imgBase64Source);
  }

  async checkPlatformAndOpenCamera() {
    this.showWebCamera = true;
    // disable comment after install capacitor
    /*const deviceInfo = await Device.getInfo();
    if (deviceInfo.operatingSystem === 'windows') {
      this.showWebCamera = true;
    } else if (deviceInfo.operatingSystem === 'android') {
      const imageInfo = await Camera.getPhoto({
        quality: 10,
        allowEditing: false,
        source: CameraSource.Camera,
        resultType: CameraResultType.DataUrl
      });

      const sendObj: any = {
        base64String: this.appService.replaceToBase64(imageInfo.dataUrl),
        imagename: '',
        ext: `.${imageInfo.format}`,
        preview: imageInfo.dataUrl
      };
      this.imgBase64Source.push(sendObj);
      this.emitImageObj();
    }*/
  }
}
