import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {AppService} from '../../services/app.service';
import {PromiseApiService} from '../../services/promise-api.service';

@Component({
  selector: 'app-business-global',
  templateUrl: './business-global.component.html',
  styleUrls: ['./business-global.component.scss']
})
export class BusinessGlobalComponent implements OnInit {
  businessForm!: FormGroup;
  businessList: any = [];
  @Output() selectedBusiness: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public _appService: AppService,
    private _promiseService: PromiseApiService
  ) {
    this.businessForm = new FormGroup({
      business: new FormControl('', Validators.compose([Validators.required]))
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.businessForm.controls;
  }

  ngOnInit(): void {
    this.getAllBusiness().then();
  }

  async getAllBusiness() {
    const business_list: any = await this._promiseService.businessGetAllList();
    if (business_list.issuccess) {
      this.businessList = business_list.data;
    } else {
      this._appService.apiResponseFalse(business_list);
    }
  }

  getBusiness(e: any) {
    this.selectedBusiness.emit(e.value.srno);
  }
}
