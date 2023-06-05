import {frontEndRoutesPath, routesPath} from '@/shared/routes-path';
import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  frontEndRoutesPath = frontEndRoutesPath;
  routesPath = routesPath;

  _LoggedIn : boolean = false;

  //@HostListener('window:scroll', ['$event'])
  ngOnInit() {
    
    if(localStorage.getItem('auth-token')){
      this._LoggedIn = true;
    }
    // $(document).ready(function(){
    //   $(window).on("scroll",function(){
    //     var wn = $(window).scrollTop();
    //     if(wn > 10){
    //       $(".navbar").addClass('bg-header-white navbar-light')
    //       $(".nav-link").addClass('text-dark')
    //     }
    //     else{
    //       $(".navbar").removeClass(' bg-header-white')
    //       $(".nav-link").removeClass('text-dark')
    //     }
    //   });
    // });

  }

  closeToggleMenu() {
    $('.navbar-collapse').collapse('hide');
  }

}
