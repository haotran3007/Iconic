import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Filcat1Page } from '../filcat1/filcat1';
import { Filcat2Page } from '../filcat2/filcat2';
import { Filcat3Page } from '../filcat3/filcat3';
import { Filcat4Page } from '../filcat4/filcat4';
import { Filcat5Page } from '../filcat5/filcat5';
import { Filcat6Page } from '../filcat6/filcat6';
import { Filcat7Page } from '../filcat7/filcat7';
import { Filcat8Page } from '../filcat8/filcat8';
import { Filcat9Page } from '../filcat9/filcat9';
import { Filcat10Page } from '../filcat10/filcat10';
import { Filcat11Page } from '../filcat11/filcat11';
import { Filcat12Page } from '../filcat12/filcat12';
import { Filcat13Page } from '../filcat13/filcat13';
import { Filcat14Page } from '../filcat14/filcat14';
import { Filcat15Page } from '../filcat15/filcat15';
import { Filcat16Page } from '../filcat16/filcat16';

import{ CatCheckComponent } from '../../components/cat-check/cat-check'


/**
 * Generated class for the FilterCatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter-cat',
  templateUrl: 'filter-cat.html',
})
export class FilterCatPage {

  navOptions: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navOptions = {
      animation: 'ios-transition'
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterCatPage');
  }

  navcat1(){
    this.navCtrl.push(Filcat1Page, null, this.navOptions);
    // this.navCtrl.push(CatCheckComponent);
  }

  navcat2(){
    this.navCtrl.push(Filcat2Page, null, this.navOptions);
  }

  navcat3(){
    this.navCtrl.push(Filcat3Page, null, this.navOptions);
  }

  navcat4(){
    this.navCtrl.push(Filcat4Page, null, this.navOptions);
  }

  navcat5(){
    this.navCtrl.push(Filcat5Page, null, this.navOptions);
  }

  navcat6(){
    this.navCtrl.push(Filcat6Page, null, this.navOptions);
  }

  navcat7(){
    this.navCtrl.push(Filcat7Page, null, this.navOptions);
  }

  navcat8(){
    this.navCtrl.push(Filcat8Page, null, this.navOptions);
  }

  navcat9(){
    this.navCtrl.push(Filcat9Page, null, this.navOptions);
  }

  navcat10(){
    this.navCtrl.push(Filcat10Page, null, this.navOptions);
  }

  navcat11(){
    this.navCtrl.push(Filcat11Page, null, this.navOptions);
  }

  navcat12(){
    this.navCtrl.push(Filcat12Page, null, this.navOptions);
  }

  navcat13(){
    this.navCtrl.push(Filcat13Page, null, this.navOptions);
  }

  navcat14(){
    this.navCtrl.push(Filcat14Page, null, this.navOptions);
  }

  navcat15(){
    this.navCtrl.push(Filcat15Page, null, this.navOptions);
  }

  navcat16(){
    this.navCtrl.push(Filcat16Page, null, this.navOptions);
  }

}
