import { Component , Input} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { PackageService } from '../package-list/package.services';

@Component({
  selector: 'app-package-edit',
  templateUrl: './package-edit.component.html',
  styleUrls: ['./package-edit.component.scss']
})

export class PackageEditComponent {

  @Input() _id: any = null;

  packageEditForm: FormGroup;

  constructor(private packageService: PackageService){}

  packages : any;
  // "features_id":"646ca2f0297c8f8035968a00",
  //   "name":"starter",
  //   "price":7,
  //   "incoming_mail":20,

  ngOnInit() {
    this.packageEditForm = new FormGroup({
      type: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      incomingMail: new FormControl('', Validators.required)
    });

    this.getPackageById()
  }

  getPackageById(){
    this.packageService.getPackageById(this._id).subscribe((res: any) => {
      this.packages = res.data;
      console.log(this.packages)
      this.setFormData();
    }, err => {

    });
  }

  setFormData() {
    this.packageEditForm.get('type').setValue(this.packages.type);
    this.packageEditForm.get('name').setValue(this.packages.name);
    this.packageEditForm.get('price').setValue(this.packages.price);
    this.packageEditForm.get('incomingMail').setValue(this.packages.incoming_mail);
  }

  saveEdit() {
    this.packageService.savePackage(this.packageEditForm.value).subscribe((res: any) => {
      console.log(res.data)
      // this.packages = res.data;
      
    }, err => {

    });
  }
}
