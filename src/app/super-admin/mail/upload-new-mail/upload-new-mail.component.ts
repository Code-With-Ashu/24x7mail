import { FileHandle } from '@/shared/dragDrop.directive';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MailService } from '../mail.services';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-upload-new-mail',
  templateUrl: './upload-new-mail.component.html',
  styleUrls: ['./upload-new-mail.component.scss'],
  providers: [MessageService]

})
export class UploadNewMailComponent {

  files: FileHandle[] = [];
  _selectedFile = [];
  currentInputs: any = [];
  fileName = null;
  isPackageSelect: boolean = false;
  isDrag = false;
  isFileSelect = false;
  url = null; //Angular 11, for stricter type

  uploadNewMailForm: FormGroup;
  _fileObject = null;
  mail_type: string = 'enevelope';
  filesArray: any = [];


  constructor(private mailService: MailService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.uploadNewMailForm = new FormGroup({
      mail_type: new FormControl('', Validators.required),
      weight: new FormControl(''),
      length: new FormControl(''),
      width: new FormControl(''),
      height: new FormControl(''),
      thickness: new FormControl(''),

    })
  }


  onChangeSelectItemType(item) {
    this.isPackageSelect = (item.target.value == 'package' || item.target.value == 'magzine') ? true : false;
    this.mail_type = item.target.value;
    this.uploadNewMailForm.controls['length'].setValidators([Validators.required]);
    this.uploadNewMailForm.controls['width'].setValidators([Validators.required]);
    this.uploadNewMailForm.controls['height'].setValidators([Validators.required]);
    !this.isPackageSelect || this.uploadNewMailForm.controls['thickness'].setValidators([Validators.required])
  }


  selectFile(event: any, mailtype = '') {
    this.getLoginUserInfo();

    this.isFileSelect = true;
    var reader = new FileReader();
   var a = reader.readAsDataURL(event.target.files[0]);
 
    reader.onload = (_event) => {
      _event.preventDefault()

      this.url = reader.result;

      if (mailtype != 'postcard') {
        this.filesArray.push({ 'url': reader.result, 'name': event.target.files[0].name, 'file': event.target.files[0], 'weight': 0, lbs: 0.8 });
      }
      //if postcard then only select front and back 
      if (mailtype == 'postcard' && this.filesArray.length <= 1) {
        this.filesArray.push({ 'url': reader.result, 'name': event.target.files[0].name, 'file': event.target.files[0], 'weight': 0, lbs: 0.8 });
      }
    }
    
    console.log(this.filesArray)

    // reader.onload = (_event) => {
    //   this.url = reader.result;
    // }
  }

  onType(searchValue: string, index): void {
    this.filesArray[index].weight = searchValue;
  }

  clearImg(i: any) {
    (i == 0 ? this.filesArray = [] : this.filesArray.splice(i, 1));
    this.fileName = null;
    this.files = [];
    this.isDrag = false;
    this.isFileSelect = false;
    this.url = null;
    this._fileObject = null;
  }


  filesDropped(files: FileHandle[]): void {
    this.isDrag = true;
    this.files = files;
    this.fileName = this.files[0].file.name;
    this._fileObject = this.files[0].file;
    this.filesArray.push([this.files[0].file]);

  }



  upload() {

    if (this.uploadNewMailForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Select required fields.' });
      return;
    }
    let user = this.getLoginUserInfo();

    let formData = new FormData();

    formData.append('mail_type', this.uploadNewMailForm.value.mail_type);
    formData.append('mail', this.filesArray);
    formData.append('user', user._id);
    if (this.isPackageSelect) {
      formData.append('thickness', this.uploadNewMailForm.value.thickness || null);
      formData.append('width', this.uploadNewMailForm.value.width);
      formData.append('height', this.uploadNewMailForm.value.height);
      formData.append('length', this.uploadNewMailForm.value.length);
    }
    console.log("filesArray", this.filesArray)
    this.mailService.uploadFile(formData).subscribe(
      (res: any) => {
        this.uploadNewMailForm.reset()
        this.isPackageSelect = false;
        this.clearImg(0);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Mail is uploaded successfully!' });
      },
      (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      }
    );
  }

  getLoginUserInfo() {
    let loginUser = JSON.parse(localStorage.getItem('user-info')) || {};
    return loginUser.data;
  }
}
