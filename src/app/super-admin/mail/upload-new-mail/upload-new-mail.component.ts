import { FileHandle } from '@/shared/dragDrop.directive';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MailService } from '../mail.services';

@Component({
  selector: 'app-upload-new-mail',
  templateUrl: './upload-new-mail.component.html',
  styleUrls: ['./upload-new-mail.component.scss']
})
export class UploadNewMailComponent {

  files: FileHandle[] = [];
  _selectedFile;
  currentInputs: any = [];
  fileName = null;
  isPackageSelect: boolean = false;
  isDrag = false;
  isFileSelect = false;
  url = null; //Angular 11, for stricter type

  uploadNewMailForm: FormGroup;
  _fileObject = null;

  constructor(private mailService: MailService) { }

  ngOnInit() {
    this.uploadNewMailForm = new FormGroup({
      mail_type: new FormControl('', Validators.required),
      weight: new FormControl(''),
      length: new FormControl(''),
      width: new FormControl(''),
      height: new FormControl(''),
    })
  }


  onChangeSelectItemType(item) {
    this.isPackageSelect = (item.target.value == 'package') ? true : false;
    this.uploadNewMailForm.controls['weight'].setValidators([Validators.required]);
    this.uploadNewMailForm.controls['length'].setValidators([Validators.required]);
    this.uploadNewMailForm.controls['width'].setValidators([Validators.required]);
    this.uploadNewMailForm.controls['height'].setValidators([Validators.required]);

  }
  
  imageUrl : any;


  changeListener($event) : void {
     this.readThis($event.target);
  }


  readThis(inputValue: any) : void {
    var file:File = inputValue.files[0]; 
    var myReader:FileReader = new FileReader();

     myReader.onloadend = function(e){
      // you can perform an action with readed data here
       return   e.target.result;
    }
    console.log(this.imageUrl)

    myReader.readAsText(file);
  }

  selectedFile: File | any = null;
  readURL(input: any, obj: any): void {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (e && e.target) {
          // this.imageUrl = e.target.result;
          // this.isFileSet = true;
        }
      };
      reader.readAsDataURL(input.files[0]);
    }
    // this.fileWrapper = obj;
  }

  onFileSelected(event: any) {
    console.log("event",event.target.files)
    this.selectedFile = event.target.files[0];
    var url = 'users/me/avatar';
    var formData = new FormData();
    formData.append('mail', this.selectedFile);
    // this.spinner.show();
    this.mailService.uploadFile(formData).subscribe(
      (res: any) => {
      },
      (err) => {
      }
    );
  }

  selectFile(event: any) {
    // this.readURL(event.target);

    // this.isFileSelect = true;
    // this._fileObject = <File>event.target.files[0];
    // this.fileName = event.target.files[0].name;
    // var reader = new FileReader();
    // reader.readAsDataURL(event.target.files[0]);

    // reader.onload = (_event) => {
    //   this.url = reader.result;
    // }
  }


  clearImg() {
    this.fileName = null;
    this.files = [];
    this.isDrag = false;
    this.isFileSelect = false;
    this.url = null;
  }


  filesDropped(files: FileHandle[]): void {
    this.isDrag = true;
    this.files = files;
    this.fileName = this.files[0].file.name;
    this._fileObject = this.files[0];
  }

  upload() {

    // if (this.uploadNewMailForm.invalid && this._fileObject != null) {
    //   return;
    // }
    // let requestParam : any = {}
    // var ff =  new FormData();




    let formData = new FormData();
    formData.append('mail', this._fileObject);
    formData.append("mail_type", this.uploadNewMailForm.value.mail_type);
    formData.append("user", '646c849d8a7ba45bb20add1d');

    this.mailService.uploadFile(formData).subscribe(
      (res: any) => {
      },
      (err) => {
      }
    );
  }
}
