import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PackageService} from '../package-list/package.services';
import {Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-package-edit',
    templateUrl: './package-edit.component.html',
    styleUrls: ['./package-edit.component.scss']
})
export class PackageEditComponent {
    @Input() _id: any = null;

    @Input() packageDetail: any = [];
    @Output() newItemEvent = new EventEmitter<string>();
    featuresList = [];
    submitted = false;
    packageEditForm: FormGroup;
    packageData: any = {};
    packages: any;

    constructor(private packageService: PackageService) {}


    ngOnInit() {
        this.getFeatureList();
        console.log('packageDetail', this.packageDetail);

        this.packageEditForm = new FormGroup({
            type: new FormControl('', Validators.required),
            name: new FormControl('', Validators.required),
            price: new FormControl('', Validators.required),
            incoming_mail: new FormControl('', Validators.required),
            open_scan: new FormControl('', Validators.required),
            recipients: new FormControl('', Validators.required),
            features_id: new FormControl('', Validators.required)
        });

        this.getPackageById();
    }

    ngOnChanges(changes: SimpleChanges) {
 
      if (!changes.packageDetail['firstChange']) {
            this.packageData = changes.packageDetail['currentValue'];
            this.setFormData();
        }
    }

    getPackageById() {
        this.packageService.getPackageById(this._id).subscribe(
            (res: any) => {
                this.packages = res.data;
            },
            (err) => {}
        );
    }

    setFormData() {
      // console.log(this.packageData)
      if ( this.packageData != null &&  this.packageData != 'undefined') {

        this.packageEditForm.get('type').setValue(this.packageData.type);
            this.packageEditForm.get('name').setValue(this.packageData.name);
            this.packageEditForm.get('price').setValue(this.packageData.price);
            this.packageEditForm
                .get('incoming_mail')
                .setValue(this.packageData.incoming_mail);
            this.packageEditForm
                .get('open_scan')
                .setValue(this.packageData.open_scan);
            this.packageEditForm
                .get('recipients')
                .setValue(this.packageData.recipients);

            this.packageEditForm
                .get('features_id')
                .setValue(this.packageData.features_id._id);
        console.log(this.packageData)
              }
        
    }

    saveEdit() {
        if (this.packageEditForm.invalid) {
            return;
        }
        let req = {
            type: this.packageEditForm.value.type,
            features_id: this.packageEditForm.value.features_id,
            name: this.packageEditForm.value.name,
            price: Number(this.packageEditForm.value.price),
            incoming_mail: Number(this.packageEditForm.value.incoming_mail),
            open_scan: Number(this.packageEditForm.value.open_scan),
            recipients: Number(this.packageEditForm.value.recipients)
        };

        this.packageService.editPackage(req, this.packageData._id).subscribe(
            (res: any) => {
                this.newItemEvent.emit('success');
            },
            (err) => {
                this.newItemEvent.emit('error');
            }
        );
    }

    getFeatureList() {
        this.packageService.getFeaturesList().subscribe(
            (res: any) => {
                this.featuresList = res.data.map((e) => {
                    return {
                        feature_id: e._id,
                        name: e.properties.address + e.properties.zip_code
                    };
                });
            },
            (err) => {}
        );
    }
}
