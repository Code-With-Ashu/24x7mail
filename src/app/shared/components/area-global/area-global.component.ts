import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {AppService} from '../../services/app.service';
import {HttpApiService} from '../../services/http-api.service';
import {PromiseApiService} from '../../services/promise-api.service';

@Component({
  selector: 'app-area-global',
  templateUrl: './area-global.component.html',
  styleUrls: ['./area-global.component.scss']
})
export class AreaGlobalComponent implements OnInit, OnChanges {
  regionForm!: FormGroup;
  countryList: any = [];
  stateList: any = [];
  districtList: any = [];
  talukaList: any = [];
  areaList: any = [];
  @Input() regionData: any = {};
  @Output() selectedRegion: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public _appService: AppService,
    private _httpService: HttpApiService,
    private _promiseService: PromiseApiService
  ) {
    this.regionForm = new FormGroup({
      countrysrno: new FormControl('', Validators.compose([Validators.required])),
      statesrno: new FormControl('', Validators.compose([Validators.required])),
      districtsrno: new FormControl('', Validators.compose([Validators.required])),
      talukasrno: new FormControl('', Validators.compose([Validators.required])),
      mst_area_srno: new FormControl('', Validators.compose([Validators.required])),
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.regionForm.controls;
  }

  async ngOnInit() {
    await this.getAllCountry();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this._appService.isEmptyObject(this.regionData)) {
      this.countryWiseStateList(this.regionData.countrysrno, false).then();
      this.stateWiseDistrictList(this.regionData.statesrno, false).then();
      this.districtWiseTalukaList(this.regionData.districtsrno, false).then();
      this.talukaWiseAreaList(this.regionData.talukasrno).then();
      this.regionForm.patchValue(this.regionData);
    } else {
      this.regionForm.reset();
      this.stateList = this.districtList = this.talukaList = this.areaList = [];
    }
  }

  async getAllCountry() {
    const country_list: any = await this._promiseService.countryGetAllList();
    if (country_list.issuccess) {
      this.countryList = country_list.data;
    } else {
      this._appService.apiResponseFalse(country_list);
    }
  }

  async countryWiseStateList(countryId: any, clearData: boolean) {
    const dataObj = this.apiSearchData();

    const state_list: any = await this._promiseService.stateOnlyNameList(countryId, dataObj);
    if (state_list.issuccess) {
      if (clearData) {
        this.stateList = [];
        this.districtList = [];
        this.talukaList = [];
        this.areaList = [];
      }
      this.stateList = state_list.data;
    } else {
      this._appService.apiResponseFalse(state_list);
    }
  }

  async stateWiseDistrictList(stateId: any, clearData: boolean) {
    const dataObj = this.apiSearchData();

    const district_list: any = await this._promiseService.districtOnlyNameList(stateId, dataObj);
    if (district_list.issuccess) {
      this.districtList = district_list.data;
      if (clearData) {
        this.talukaList = [];
        this.areaList = [];
      }
    } else {
      this._appService.apiResponseFalse(district_list);
    }
  }

  async districtWiseTalukaList(districtId: any, clearData: boolean) {
    const dataObj = this.apiSearchData();

    const taluka_list: any = await this._promiseService.talukaOnlyNameList(districtId, dataObj);
    if (taluka_list.issuccess) {
      this.talukaList = taluka_list.data;
      if (clearData) {
        this.areaList = [];
      }
    } else {
      this._appService.apiResponseFalse(taluka_list);
    }
  }

  async talukaWiseAreaList(talukaId: any) {
    const dataObj = this.apiSearchData();

    const area_list: any = await this._promiseService.areaOnlyNameList(talukaId, dataObj);
    if (area_list.issuccess) {
      this.areaList = area_list.data;
    } else {
      this._appService.apiResponseFalse(area_list);
    }
  }

  sendRegion() {
    this.selectedRegion.emit(this.regionForm.value);
  }

  apiSearchData() {
    return {
      code: 0,
      inputtext: ''
    };
  }
}
