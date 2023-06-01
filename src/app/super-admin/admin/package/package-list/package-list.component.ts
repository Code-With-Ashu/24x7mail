import { Component } from '@angular/core';
import { PackageService } from './package.services';
import { AppService } from '@/shared/services/app.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss'],
  providers: [ ]

})
export class PackageListComponent {

  packages=[];
  editPackage: boolean;
  closeResult = '';
  loading= true;
  addPackage: boolean;
  deletePopup = false;
  p: number = 1;

  
  constructor(
    private packageService: PackageService,
    public _appService: AppService,

  ){

  }

  
  ngOnInit() {
    this.getPackageList();
  }

  dialogInfoUpdate(info:any) {
    
    this.editPackage = false;  

    if(info.status == 'success'){
      this.addPackage = false;
    } else  if(info.status == 'error'){
      this.editPackage = false;
    }
    
    this._appService.toastService(info.status, info.error_message);
    this.getPackageList();
  }

  getPackageList(){
    this.loading = true;
    this.packageService.getPackageList().subscribe((res: any) => {
      this.packages = res.data;
      this.loading = false;
    }, err => {
      this.loading = false;
    });
  }

  selectPackageInfo = {};
  showDialog(event,_package){
    this.selectPackageInfo = _package;
    this.editPackage = true;
  }

  closePackageDialog(){
    this.editPackage = false;
  }

  showNewPackage(){
    this.addPackage = true;
  }
  showDeleteDialog(id){
   
    this.deletePopup = true;
  }
  
  delete(event: Event, isDelete, packageId ='') {    
    this.loading = true;

    if(isDelete == 'YES'){
      this.packageService.deletePackage(packageId).subscribe((res: any) => {
        this.deletePopup = false;
        this.loading = false;
        this.getPackageList();
      }, err => {
        this.loading = false;
      });
    } else {
      this.loading = false;
      this.deletePopup = false;
    }
  }
}
