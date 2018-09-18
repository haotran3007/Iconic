import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, Content, Platform } from 'ionic-angular';


@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {

  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides;
  @ViewChild('MultiItemsScrollingTabs') ItemsTitles: Content;

  SwipedTabsIndicator: any = null;
  tabTitleWidthArray: any = [];
  tabElementWidth_px: number = 50;
  screenWidth_px: number = 0;
  isRight: boolean = true;
  isLeft: boolean = true;
  tabs: any = [];
  
  SwipedMenusIndicator: any = null;
  menuTitleWidthArray: any = [];
  menus: any = [];


  constructor(public navCtrl: NavController, platform: Platform) {
    this.tabs = ["ALL", "DRESSES", "TOPS", "T-SHIRTS & SINGLETS", "COAT & JACKETS", "JUMPERS & CARDIGANS", "PANTS", "SKIRTS", "JEANS", "SWIMMEAR", "SHORTS", "SWEATS & HOODIES", "LINGERIE"];
    console.log('Width: ' + platform.width());
    this.screenWidth_px = platform.width();
    console.log(this.tabTitleWidthArray);
  }

  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator");
    for (let i in this.tabs)
      this.tabTitleWidthArray.push(document.getElementById("tabTitle" + i).offsetWidth);
    this.selectTab(0);
  }


  scrollIndicatiorTab() {
    this.ItemsTitles.scrollTo(this.calculateDistanceToSpnd(this.SwipedTabsSlider.getActiveIndex()) - this.screenWidth_px / 3, 0);
  }

  selectTab(index) {
    this.SwipedTabsIndicator.style.width = this.tabTitleWidthArray[index] + "px";
    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.calculateDistanceToSpnd(index)) + 'px,0,0)';
    this.SwipedTabsSlider.slideTo(index);
  }

  calculateDistanceToSpnd(index) {
    var result = 0;
    for (var _i = 0; _i < index; _i++) {
      result = result + this.tabTitleWidthArray[_i];
    }
    return result;
  }

  updateIndicatorPosition() {
    var index = this.SwipedTabsSlider.getActiveIndex();
    if (this.SwipedTabsSlider.length() == index)
      index = index - 1;

    this.SwipedTabsIndicator.style.width = this.tabTitleWidthArray[index] + "px";
    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.calculateDistanceToSpnd(index)) + 'px,0,0)';

  }

  updateIndicatorPositionOnTouchEnd() {
    setTimeout(() => { this.updateIndicatorPosition(); }, 200);
  }

  animateIndicator($event) {

    this.isLeft = false;
    this.isRight = false;
    var currentSliderCenterProgress = (1 / (this.SwipedTabsSlider.length() - 1)) * this.SwipedTabsSlider.getActiveIndex();
    if ($event.progress < currentSliderCenterProgress) {
      this.isLeft = true;
      this.isRight = false;

    } if ($event.progress > currentSliderCenterProgress) {
      this.isLeft = false;
      this.isRight = true;
    }

    if (this.SwipedTabsSlider.isEnd())
      this.isRight = false;

    if (this.SwipedTabsSlider.isBeginning())
      this.isLeft = false;

    if (this.isRight)
      this.SwipedTabsIndicator.style.webkitTransform =
        'translate3d(' + (this.calculateDistanceToSpnd(this.SwipedTabsSlider.getActiveIndex())
          + ($event.progress - currentSliderCenterProgress) * (this.SwipedTabsSlider.length() - 1) * this.tabTitleWidthArray[this.SwipedTabsSlider.getActiveIndex() + 1])
        + 'px,0,0)';

    if (this.isLeft)
      this.SwipedTabsIndicator.style.webkitTransform =
        'translate3d(' + (this.calculateDistanceToSpnd(this.SwipedTabsSlider.getActiveIndex())
          + ($event.progress - currentSliderCenterProgress) * (this.SwipedTabsSlider.length() - 1) * this.tabTitleWidthArray[this.SwipedTabsSlider.getActiveIndex() - 1])
        + 'px,0,0)';

    if (!this.isRight && !this.isLeft)
      this.SwipedTabsIndicator.style.width = this.tabTitleWidthArray[this.SwipedTabsSlider.getActiveIndex()] + "px";

  }

  openDiv() {
    // document.getElementById("viewDiv").style.display = "block";
    console.log('clicked');
  }

  // selectMenu(index) {
  //   this.menus = ["SHOP WOMAN", "SHOP MEN", "SHOP KIDS"];
  //   this.SwipedMenusIndicator.style.width = this.menuTitleWidthArray[index] + "px";
  //   this.SwipedMenusIndicator.style.webkitTransform = 'translate3d(' + (this.calculateDistanceToSpnd(index)) + 'px,0,0)';
  //   this.SwipedMenusSlider.slideTo(index);
  // }

  // menuViewDidEnter() {
  //   for (let a in this.menus)
  //     this.menuTitleWidthArray.push(document.getElementById("menuTitle" + a).offsetWidth);
  //   this.selectMenu(0);
  // }

}






