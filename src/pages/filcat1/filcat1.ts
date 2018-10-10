import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Filcat1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filcat1',
  templateUrl: 'filcat1.html',
})
export class Filcat1Page {

  itemmenus: any =[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemmenus=["POPULARITY", "NEW ARRIVALS", "PRICE HIGH TO LOW", "PRICE LOW TO HIGH", "BRAND A TO Z", "BRAND Z TO A"];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Filcat1Page');
  }

}
