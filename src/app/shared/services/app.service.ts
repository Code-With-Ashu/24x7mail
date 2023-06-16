import {Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {HttpApiService} from '@/shared/services/http-api.service';
import {FormGroup} from '@angular/forms';
import * as _ from 'lodash';
import {Location} from '@angular/common';
import {routesPath} from '@/shared/routes-path';
import { MessageService } from 'primeng/api';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class AppService {  
  user: any = {
    picture: 'assets/img/default-profile.png',
    email: 'Admin@gmail.com'
  };
  defaultImage = 'assets/images/upload.png';
  renderer: Renderer2;
  mapBoxAccessToken: string = 'pk.eyJ1IjoidmlydHVhbG1haWxib3giLCJhIjoiY2xnZzVrOWcwMDhkeTNta3g5Y2hqem4ybiJ9.by3bH_DOwqAG-_F4LkaDhQ';
  passwordType = '';
  passwordIcon = '';

  constructor(
    private rendererFactory: RendererFactory2,
    private _httpService: HttpApiService,
    private _location: Location,
    private _toast: ToastrService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.setPasswordEyeIcon();
  }

  closeRootLoading() {
    let loader = this.renderer.selectRootElement('#loader-wrapper');
    this.renderer.setStyle(loader, 'display', 'none');
  }

  userName() {
    return this.userDetails() ? this.userDetails().name : '';
  }

  getToken() {
    return (this.userDetails()) ? `${this.userDetails().token}` : '';
  }

  userDetails() {
    return JSON.parse(<any>localStorage.getItem('user-info'));
  }

  rootNavigation() {
    // this.router.navigate(['/home']).then();
    this.router.navigate(['/' + routesPath.superAdmin]).then();
  }

  pageNavigation(url: string) {
    this.router.navigate([`${url}`]).then();
  }

  gettingSubmenu(id: number) {
    // return _.keyBy(menuItem, 'id')[id].subMenu;
  }

  backClicked() {
    this._location.back();
  }

  logout() {
    localStorage.removeItem('user-info');
    localStorage.removeItem('auth-token');    
    this.router.navigate(['/' + routesPath.login]).then();
    this.router.navigate(['/']).then();
  }

  dataTableOptions() {
    return {
      info: false,
      paging: false,
      searching: false,
      lengthMenu: [[-1, 5, 10], ['All', 5, 10]],
      order: [],
      bSort: false,
      fixedHeader: true,
      responsive: true,
      scrollY: '55vh',
      scrollCollapse: true,
      scrollX: true
    };
  }

  dateFormatWithDot(date: any) {
    const d = (date) ? new Date(date) : new Date();
    return [
      ('0' + d.getDate()).slice(-2),
      ('0' + (d.getMonth() + 1)).slice(-2),
      d.getFullYear(),
    ].join('.');
  }

  dateFormatDDMMYY(date: any) {
    const d = (date) ? new Date(date) : new Date();
    return [
      ('0' + d.getDate()).slice(-2),
      ('0' + (d.getMonth() + 1)).slice(-2),
      d.getFullYear(),
    ].join('-');
  }

  dateFormatYYMMDD(date: any) {
    const d = (date) ? new Date(date) : new Date();
    return [
      d.getFullYear(),
      ('0' + (d.getMonth() + 1)).slice(-2),
      ('0' + d.getDate()).slice(-2),
    ].join('-');
  }

  dateIsoString(date: any) {
    return new Date(date).toISOString();
  }

  /*convertOriginalDateFormat(date: any) {
    return date.split('-').reverse().join('-');
  }*/

  /*tConvert12(time: any) {
    // Check a correct time format and split into component
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If a time format corrects
      time = time.slice(1);  // Remove full string match value
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  }

  tConvert24(timeStr: any) {
    const [time, modifier] = timeStr.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') {
      hours = '00';
    }
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
    return `${hours}:${minutes}`;
  }

  startEndTimeCompare(startTime: any, endTime: any) {
    let timeFrom = new Date();
    let temp = startTime.split(':');
    timeFrom.setHours((parseInt(temp[0]) - 1 + 24) % 24);
    timeFrom.setMinutes(parseInt(temp[1]));

    let timeTo = new Date();
    temp = endTime.split(':');
    timeTo.setHours((parseInt(temp[0]) - 1 + 24) % 24);
    timeTo.setMinutes(parseInt(temp[1]));

    const status = timeTo < timeFrom;
    if (status) {
      this.toastService('warning', 'open time should be smaller than close time!');
    }
    return status;
  }

  openLinkNewWindow(url: string) {
    window.open(`//${url}`, '_blank');
  } */

  onImgError(event: any): any {
    event.target.src = 'assets/images/noimage.png' + this.imgCacheClear();
    // Do other stuff with the event.target
  }

  handleFileInput(event: any) {
    return new Promise((resolve) => {
      let imageObj: any = {
        base64: '',
        ext: '',
        preview: ''
      };

      const file: File = event.target.files[0];
      if (file) {
        const allowed_types = ['image/png', 'image/jpeg', 'image/jpg'];
        if (!_.includes(allowed_types, file.type)) {
          this.toastService('warning', 'Invalid image format, please select a valid image format');
          resolve(imageObj);
          return;
        }

        if (Math.round(file.size / 1000) > 500) {
          this.toastService('warning', 'Image size should be less then 500kb');
          resolve(imageObj);
          return;
        }
      }

      if (event.target.files && event.target.files[0]) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]); // read file as data url
        reader.onload = (event: any) => {
          if (event != undefined) {
            imageObj = {
              base64: this.replaceToBase64(event.target.result),
              ext: ('.' + event.target.result.split(';')[0].split('/')[1]),
              preview: event.target.result
            };
          }
          resolve(imageObj);
        };
      }
    });
  }

  handleWebCamImage(webcamImage: any) {
    let imageObj: any = {
      base64: '',
      ext: '',
      preview: ''
    };
    return new Promise((resolve) => {
      imageObj = {
        base64: this.replaceToBase64(webcamImage.imageAsDataUrl),
        ext: ('.' + 'jpeg'),
        preview: webcamImage.imageAsDataUrl
      };
      resolve(imageObj);
    });
  }

  replaceToBase64(imageSrc: any) {
    return imageSrc.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');
  }

  imgCacheClear() {
    return '?t=' + Math.random();
  }

  editImagePreview(dataObj: any, fileInputName: string, extName: string) {
    return (dataObj[fileInputName + '_' + extName] ? `${this._httpService.baseUrl}${dataObj[fileInputName + '_' + extName]}` : this.defaultImage) + this.imgCacheClear();
  }

  editImagePreview1(dataObj: any, fileInputName: string) {
    return (dataObj[fileInputName] ? `${this._httpService.baseUrl}${dataObj[fileInputName]}` : this.defaultImage) + this.imgCacheClear();
  }

  buildImageSrc(imageUrl: string) {
    return `${this._httpService.baseUrl}${imageUrl}${this.imgCacheClear()}`;
  }

  checkImage(path: string) {
    if (path === null || path === '') {
      return '';
    } else {
      const ext = path.substring(path.lastIndexOf('.') + 1);
      return (ext === '') ? '' : `.${ext}`;
    }
  }

  statusMsg(formValue: any, msg: any) {
    if (formValue.srno === 0) {
      this.toastService('success', `${msg} Added Successfully.`);
    } else {
      this.toastService('info', `${msg} Updated Successfully.`);
    }
  }

  toastService(status: string, msg: string) {
    this._toast.clear();
  
    const obj: any = {
      timeOut: 2000,
      positionClass: 'toast-top-center'
    };
    if (status === 'success') {
      this._toast.success(msg, 'Success', obj);
    } else if (status === 'error') {
      this._toast.error(msg, 'Error', obj);
    } else if (status === 'info') {
      this._toast.info(msg, 'Info', obj);
    } else if (status === 'warning') {
      this._toast.warning(msg, 'Warning', obj);
    }
  }

  apiCallReqError() {
    /*this._toast.close();
    // this.closeRootLoading();
    this._toast.error('Something Went Wrong....', {
      duration: 2000,
      position: 'top-right'
    });*/
  }

  apiResponseFalse(res: any) {
    /*this._toast.close();
    this.toastService('warning', res.message);*/
  }

  isEmptyObject(value: any) {
    return Object.keys(value).length === 0 && value.constructor === Object;
  }

  destroyModal(id: any) {
    $('#' + id).modal('hide');
  }

  openModal(id: any) {
    $('#' + id).modal({keyboard: false, backdrop: 'static'}).modal('show');
  }

  editAPIRegion(data: any) {
    return {
      countrysrno: data.countrysrno,
      statesrno: data.statesrno,
      districtsrno: data.districtsrno,
      talukasrno: data.talukasrno,
      mst_area_srno: data.mst_area_srno,
    };
  }

  markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach((control: any) => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // below function is used to show or hide the password text with the help of eye icon in the enter password.
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'fa-eye-slash' ? 'fa-eye' : 'fa-eye-slash';
  }

  setPasswordEyeIcon() {
    this.passwordType = 'password';
    this.passwordIcon = 'fa-eye-slash';
  }

}
