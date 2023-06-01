import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { PackageService } from '../package-list/package.services';
import { Output, EventEmitter } from '@angular/core';
import { AppService } from '@/shared/services/app.service';

@Component({
  selector: 'app-package-add',
  templateUrl: './package-add.component.html',
  styleUrls: ['./package-add.component.scss']
})
export class PackageAddComponent {
  addPackageForm: FormGroup;
  @Output() newItemEvent = new EventEmitter<{}>();

  constructor(private packageService: PackageService,
    ){}

  packages : any;
  submitted = false;

  ngOnInit() {
    this.getFeatureList();
    this.addPackageForm = new FormGroup({
      features_id : new FormControl('', Validators.required),
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
    
    this.submitted = true;
    if (this.addPackageForm.invalid) {  
      return;
    }
    let req = {
      type : this.addPackageForm.value.type,
      features_id : this.addPackageForm.value.features_id,
      name : this.addPackageForm.value.name,
      price : Number(this.addPackageForm.value.price),
      incoming_mail : Number( this.addPackageForm.value.incoming_mail),
      open_scan :  Number(this.addPackageForm.value.open_scan),
      recipients :  Number(this.addPackageForm.value.recipients)
    };

    this.packageService.savePackage(req).subscribe({
      next : ()=> {
        return   this.newItemEvent.emit({status : 'success', error_message:'Package added successfully!' })
      },
      error: (err) => {
        return  this.newItemEvent.emit({status : 'error', error_message:'Something went wrong' })
      }  
   });
  }

  featuresList=[];
  getFeatureList() {
    this.packageService.getFeaturesList().subscribe((res: any) => {
      this.featuresList = res.data.map((e)=>{
        return ( {
          feature_id : e._id, 
          name :  e.properties.address +  e.properties.zip_code,
        })
      });
    }, err => {

    });
  }
}
