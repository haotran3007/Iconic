import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ShopPage } from '../pages/shop/shop';
import { ContactPage } from '../pages/contact/contact';
import { DailyPage } from '../pages/daily/daily';
import { TabsPage } from '../pages/tabs/tabs';
import { SearchPage } from '../pages/search/search';
import { FilterCatPage } from '../pages/filter-cat/filter-cat';
import { Filcat1Page } from '../pages/filcat1/filcat1';
import { Filcat2Page } from '../pages/filcat2/filcat2';
import { Filcat3Page } from '../pages/filcat3/filcat3';
import { Filcat4Page } from '../pages/filcat4/filcat4';
import { Filcat5Page } from '../pages/filcat5/filcat5';
import { Filcat6Page } from '../pages/filcat6/filcat6';
import { Filcat7Page } from '../pages/filcat7/filcat7';
import { Filcat8Page } from '../pages/filcat8/filcat8';
import { Filcat9Page } from '../pages/filcat9/filcat9';
import { Filcat10Page } from '../pages/filcat10/filcat10';
import { Filcat11Page } from '../pages/filcat11/filcat11';
import { Filcat12Page } from '../pages/filcat12/filcat12';
import { Filcat13Page } from '../pages/filcat13/filcat13';
import { Filcat14Page } from '../pages/filcat14/filcat14';
import { Filcat15Page } from '../pages/filcat15/filcat15';
import { Filcat16Page } from '../pages/filcat16/filcat16';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FeedItemComponent } from '../components/feed-item/feed-item';
import { SliderItemComponent } from '../components/slider-item/slider-item';
import { AdvertItemComponent } from '../components/advert-item/advert-item';
import { CollItemComponent } from '../components/coll-item/coll-item';
import { SlideMenuComponent } from '../components/slide-menu/slide-menu';
import { ProductItemsComponent } from '../components/product-items/product-items';
import { MiniCatComponent } from '../components/mini-cat/mini-cat';
import { CatCheckComponent } from '../components/cat-check/cat-check'



@NgModule({
  declarations: [
    MyApp,
    ShopPage,
    ContactPage,
    DailyPage,
    TabsPage,
    FilterCatPage,
    Filcat1Page,
    Filcat2Page,
    Filcat3Page,
    Filcat4Page,
    Filcat5Page,
    Filcat6Page,
    Filcat7Page,
    Filcat8Page,
    Filcat9Page,
    Filcat10Page,
    Filcat11Page,
    Filcat12Page,
    Filcat13Page,
    Filcat14Page,
    Filcat15Page,
    Filcat16Page,
    FeedItemComponent,
    SliderItemComponent,
    AdvertItemComponent,
    CollItemComponent,
    SlideMenuComponent,
    ProductItemsComponent,
    MiniCatComponent,
    SearchPage,
    CatCheckComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ShopPage,
    ContactPage,
    DailyPage,
    TabsPage,
    SearchPage,
    FilterCatPage,
    Filcat1Page,
    Filcat2Page,
    Filcat3Page,
    Filcat4Page,
    Filcat5Page,
    Filcat6Page,
    Filcat7Page,
    Filcat8Page,
    Filcat9Page,
    Filcat10Page,
    Filcat11Page,
    Filcat12Page,
    Filcat13Page,
    Filcat14Page,
    Filcat15Page,
    Filcat16Page,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
