import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

/**
 * Generated class for the SlideMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'slide-menu',
  templateUrl: 'slide-menu.html'
})
export class SlideMenuComponent {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  @ViewChild('ProductSliderOne') ProductSliderOne: Slides;

  ngAfterViewInit() {
    this.ProductSliderOne.spaceBetween = 15;
    this.ProductSliderOne.width = 200;
  }
}
