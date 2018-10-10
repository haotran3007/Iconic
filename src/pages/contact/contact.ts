import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';
import { ShopPage } from '../shop/shop';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})

export class ContactPage {

  wishlist: string = "0";

  wish1s: any = [];
  sizes: any = [];
  quantis: any = [];
  fills: any = [];


  constructor(public navCtrl: NavController) {
    this.fills = ["SORT", "AGE", "CATEGORY", "SIZE", "BRAND", "COLOUR", "FRABIC/MATERIAL", "ACTIVITY", "SHAPE", "OCCATION", "FRAME COLOUR", "LENS COLUR", "POLARIED LENSES", "DELIVERY"];
    this.wish1s = [
      {
        title: "adidas Originals",
        type: "Campus - Unisex",
        price: "$91.00",
        value: "BAG"
      }
    ];

    this.sizes = ["US Men", "US Women"];
  }

  goBack(){
    this.navCtrl.push(ShopPage);
  }
  
  selectedItem(){

  }
}