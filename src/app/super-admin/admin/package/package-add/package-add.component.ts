import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { PackageService } from '../package-list/package.services';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-package-add',
  templateUrl: './package-add.component.html',
  styleUrls: ['./package-add.component.scss']
})
export class PackageAddComponent {
  addPackageForm: FormGroup;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor(private packageService: PackageService){}

  packages : any;
  submitted = false;

  ngOnInit() {
    this.addPackageForm = new FormGroup({
      type: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      incoming_mail: new FormControl('', Validators.required),
      open_scan: new FormControl('', Validators.required),
      recipients: new FormControl('', Validators.required)
    });
  }

  close(){
    this.newItemEvent.emit('close');
  }

  save() {
    this.newItemEvent.emit('saved-success');
    return;
    this.submitted = true;
    if (this.addPackageForm.invalid) {  
      return;
    }

    this.packageService.savePackage(this.addPackageForm.value).subscribe((res: any) => {
      console.log(res.data)
      // this.packages = res.data;
      
    }, err => {

    });
  }
}
