import { Component, ViewChild} from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'mini-cat',
  templateUrl: 'mini-cat.html'
})
export class MiniCatComponent {

  @ViewChild('SwipedTabsSlider') slides = Slides;

  
  cat1s: any = [];
  cat2s: any = [];
  cat3s: any = [];

  constructor(){
    this.cat1s = [
      {title: "CLOTHING", value: "WOMANS"},
      {title: "SHOES", value: "WOMANS"},
      {title: "ACCESSORIES", value: "WOMANS"},
      {title: "SPORTS", value: "WOMANS'"},
      {title: "CURVY & PLUS SIZE", value: "WOMANS"},
      {title: "MATERNITY", value: "WOMANS"},
      {title: "NEW ARRIVALS", value: "WOMANS"},
      {title: "SALES", value: "WOMANS"},
    ];

    this.cat2s = [
      {title: "CLOTHING", value: "MEN"},
      {title: "SHOES", value: "MEN"},
      {title: "ACCESSORIES", value: "MEN"},
      {title: "SPORTS", value: "MEN"},
      {title: "CURVY & PLUS SIZE", value: "MEN"},
      {title: "MATERNITY", value: "MEN"},
      {title: "NEW ARRIVALS", value: "MEN"},
      {title: "SALES", value: "MEN"},
    ];

    this.cat3s = [
      {title: "BABIES", value: "KID'S"},
      {title: "KIDS", value: "KID'S"},
      {title: "NEW ARRIVALS", value: "KID'S"},
      {title: "SALES", value: "KID'S"},
    ];
  }
}