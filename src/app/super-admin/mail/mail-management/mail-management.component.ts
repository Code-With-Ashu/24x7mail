import { Component } from '@angular/core';
import { MailService } from '../mail.services';

@Component({
  selector: 'app-mail-management',
  templateUrl: './mail-management.component.html',
  styleUrls: ['./mail-management.component.scss']
})
export class MailManagementComponent {
  loading: boolean;

  constructor(private mailService: MailService) { }

  date: Date;
  openshipDetail: boolean;
  assignedMail: boolean = false;
  dataBoxInfo: any = {};
  mailId:any={};
  mailFile:[];
  p: number = 1;
  assign = [];


  shipDetai() {
    this.openshipDetail = true
  }

  assignedmail(assigns) {
    this.assignedMail = true;
    this.dataBoxInfo = assigns;
    this.mailId= assigns.mail_id;
    this.mailFile = assigns.mail_id.file;
    console.log(this.dataBoxInfo.mail_id.file)
    // console.log(this.dataBoxInfo.mail_id.mail_type)
    
  }

  ngOnInit() {
    this.assignMail()
  }

  assignMail() {
    this.loading = true;
    this.mailService.assignMail().subscribe((res: any) => {
      this.assign = res.data.slice(2,4);
      console.log(this.assign)
      this.loading = false;
    }, err => {
      this.loading = false;
    });
  }


}
