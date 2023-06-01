import {Component} from '@angular/core';

@Component({
  selector: 'app-upload-new-mail',
  templateUrl: './upload-new-mail.component.html',
  styleUrls: ['./upload-new-mail.component.scss']
})
export class UploadNewMailComponent {

  isPackageSelect : boolean = false;
  onChangeSelectItemType(item){
    this.isPackageSelect = (item.target.value == 'package') ? true : false;   
  }
}
