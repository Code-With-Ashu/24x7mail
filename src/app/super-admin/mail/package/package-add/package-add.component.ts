import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { PackageService } from '../package-list/package.services';

@Component({
  selector: 'app-package-add',
  templateUrl: './package-add.component.html',
  styleUrls: ['./package-add.component.scss']
})
export class PackageAddComponent {
  addPackageForm: FormGroup;

  constructor(private packageService: PackageService){}

  packages : any;

  ngOnInit() {
    this.addPackageForm = new FormGroup({
      type: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      incomingMail: new FormControl('', Validators.required)
    });
  }

  save() {
    this.packageService.savePackage(this.addPackageForm.value).subscribe((res: any) => {
      console.log(res.data)
      // this.packages = res.data;
      
    }, err => {

    });
  }
}
