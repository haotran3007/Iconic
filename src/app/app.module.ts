import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ShopPage } from '../pages/shop/shop';
import { ContactPage } from '../pages/contact/contact';
import { DailyPage } from '../pages/daily/daily';
import { TabsPage } from '../pages/tabs/tabs';
import {ProfilePage} from '../pages/profile/profile'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {FeedItemComponent} from '../components/feed-item/feed-item';
import {SliderItemComponent} from '../components/slider-item/slider-item';
import {AdvertItemComponent} from '../components/advert-item/advert-item';
import {CollItemComponent} from '../components/coll-item/coll-item';
import {SlideMenuComponent} from '../components/slide-menu/slide-menu';
import {ProductItemsComponent} from '../components/product-items/product-items';
import {MenuModalComponent} from '../components/menu-modal/menu-modal';


@NgModule({
  declarations: [
    MyApp,
    ShopPage,
    ContactPage,
    DailyPage,
    TabsPage,
    FeedItemComponent,
    SliderItemComponent,
    AdvertItemComponent,
    CollItemComponent,
    SlideMenuComponent,
    ProductItemsComponent,
    MenuModalComponent,
    ProfilePage
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
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
