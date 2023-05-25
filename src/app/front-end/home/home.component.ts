import {frontEndRoutesPath} from '@/shared/routes-path';
import {Component, OnInit} from '@angular/core';
import AOS from 'aos';
import {AnimationItem} from 'lottie-web';
import {AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  frontEndRoutesPath = frontEndRoutesPath;
  options: AnimationOptions = {
    path: '/assets/animation.json',
  };

  ngOnInit() {
    AOS.init({
      once: true,
    });

  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
