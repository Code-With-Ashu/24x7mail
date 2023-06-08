import {Component} from '@angular/core';

@Component({
  selector: 'app-operators-list',
  templateUrl: './operators-list.component.html',
  styleUrls: ['./operators-list.component.scss']
})
export class OperatorsList {
  addPackage: boolean;
  editopen: boolean;
  
  showNewPackage(){
    this.addPackage = true;
  }

  editoperators(){
   this.editopen =true;
  }



}
