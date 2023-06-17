import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-assigned-mail',
  templateUrl: './assigned-mail.component.html',
  styleUrls: ['./assigned-mail.component.scss']
})
export class AssignedMailComponent {
  @Input() assignData;
  @Input() mailData;
  @Input() mailFileimg:string[]=[];
  loading: boolean;
  p: number = 1;

  constructor (){

  }


  
 
  
}



