import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { SearchPage } from '../search/search'

@Component({
  selector: 'page-daily',
  templateUrl: 'daily.html'
})


export class DailyPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  @ViewChild('ProductSliderOne') ProductSliderOne: Slides;

  ngAfterViewInit() {
    this.ProductSliderOne.spaceBetween = 15;
    this.ProductSliderOne.width = 210;
  }
  selectButton(){
    document.getElementById("select").style.display = "block";
  }

  hideButton(){
    document.getElementById("select").style.display = "none";
  }

  search(){
    document.getElementById("searchbar").style.display = "block";
  }
  
  gotosearch(){
    this.navCtrl.push(SearchPage);
  }

  viewManProduct(){
    document.getElementById('men').style.display = "block";
    document.getElementById('women').style.display = "none";
    document.getElementById("select").style.display = "none";
  }

  viewWomanProduct(){
    document.getElementById('men').style.display = "none";
    document.getElementById('women').style.display = "block";
    document.getElementById("select").style.display = "none";
  }

}
