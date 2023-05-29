import { Component } from '@angular/core';
import { PackageService } from './package.services';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss']
})
export class PackageListComponent {

  packages:any;

  constructor(
    private packageService: PackageService,
  ){

  }


  ngOnInit() {
    this.getPackageList();
  }


  getPackageList(){
    this.packageService.getPackageList().subscribe((res: any) => {
      this.packages = res.data;
      
    }, err => {

    });
  }



}
