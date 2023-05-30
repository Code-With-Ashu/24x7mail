import { Component } from '@angular/core';
import { PackageService } from './package.services';

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
  
  
  constructor(
    private packageService: PackageService
  
  ){

  }


  ngOnInit() {
    this.getPackageList();
  }

  dialogInfoUpdate(newItem: string) {

    this.editPackage = false;
    if(newItem == 'saved-success'){
      this.addPackage = false;
      this.getPackageList();
    }

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

  showDialog(){
    this.editPackage = true;
  }

  closePackageDialog(){
    this.editPackage = false;
  }

  showNewPackage(){
    this.addPackage = true;
  }
  showDeleteDialog(){
    this.deletePopup = true;
  }
  
  delete(event: Event, isDelete) {    
    this.deletePopup = false;
    if(isDelete == 'YES'){
      this.deletePopup = false;

      this.packageService.deletePackage().subscribe((res: any) => {
        this.loading = false;
        this.getPackageList();
      }, err => {
        this.loading = false;
      });
    }

  }
}
