import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-package-add',
  templateUrl: './package-add.component.html',
  styleUrls: ['./package-add.component.scss']
})
export class PackageAddComponent {
  public form: FormGroup;
  submitted = false;
  show: boolean = false;
  confirm_show: boolean = false;
  public pageName: string = 'Package';
  customer_id:string;
  customer_loan_id:string;
  errorMessage='';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _location:Location,
    private route: ActivatedRoute
  ){

  }

  ngOnInit(): void {
  

    this.form = this.formBuilder.group({      
      notes:['',Validators.required],
    })
  }

  onSubmit(): void {
  }

  back(){
    this._location.back();
  }
}
