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

  //@HostListener('window:scroll', ['$event'])
  ngOnInit() {
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
