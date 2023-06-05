import { FileHandle } from '@/shared/dragDrop.directive';
import {Component} from '@angular/core';
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
  currentInputs : any = [];
  fileName= null;
  isPackageSelect : boolean = false;
  isDrag = false;
  isFileSelect = false;
	url=null; //Angular 11, for stricter type

  uploadNewMailForm: FormGroup;
  _fileObject = null;

  constructor(private mailService: MailService) {}

  ngOnInit() {
    this.uploadNewMailForm = new FormGroup({
      mail_type: new FormControl('', Validators.required),
      weight: new FormControl(''),
      length: new FormControl(''),
      width: new FormControl(''),
      height: new FormControl(''),
    })
  }


  onChangeSelectItemType(item){
    this.isPackageSelect = (item.target.value == 'package') ? true : false;   
    this.uploadNewMailForm.controls['weight'].setValidators([Validators.required]);
    this.uploadNewMailForm.controls['length'].setValidators([Validators.required]);
    this.uploadNewMailForm.controls['width'].setValidators([Validators.required]);
    this.uploadNewMailForm.controls['height'].setValidators([Validators.required]);

  }

  selectFile(event:any){
    this.isFileSelect = true;    
    this._fileObject = event.target.files[0];
    this.fileName = event.target.files[0].name; 
    var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.url = reader.result; 
		}
  }

  clearImg(){
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
    this._fileObject = this.files[0].file;
  }

  upload() {
    if (this.uploadNewMailForm.invalid && this._fileObject != null) {
      return;
    }
    let requestParam : any = {}
    var ff =  new FormData();

    // requestParam = {
    //   mail_type : this.uploadNewMailForm.value.mail_type, 
    //   mail : this._fileObject,
    //   user:"646c849d8a7ba45bb20add1d"
    // };

    // if(this.uploadNewMailForm.value.mail_type == 'package'){
    //   requestParam.weight = this.uploadNewMailForm.value.weight;
    //   requestParam.length = this.uploadNewMailForm.value.length;
    //   requestParam.width = this.uploadNewMailForm.value.width;
    //   requestParam.height = this.uploadNewMailForm.value.height;
    // }
    

    // ff.append("mail_type",this.uploadNewMailForm.value.mail_type);
    // ff.append("mail",this._fileObject);
    ff.append("user",'646c849d8a7ba45bb20add1d');

    // for (var i = 0; i < this._fileObject.length; i++) {
    //    console.log(this._fileObject[i]) 
    //   formData.append("mail", this._fileObject[i]);
    // }
    // formData.append("file", this._fileObject, this._fileObject.name)
    // requestParam = {
    //   mail_type : this.uploadNewMailForm.value.mail_type, 
    //   mail : formData,
    //   user:"646c849d8a7ba45bb20add1d"
    // };

    let formData = new FormData();
    formData.append('mail_type', 'envelope');
    formData.append('mail', this._fileObject);
    formData.append('weight', '1');
    formData.append('height', '2');
    formData.append('width', '3');
    formData.append('length', '7');
    formData.append('user', '646c849d8a7ba45bb20add1d');

    this.mailService.uploadFile(formData).subscribe(
      (res: any) => {
      },
      (err) => {
      }
    );
  }
}
