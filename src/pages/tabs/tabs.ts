import { Component } from '@angular/core';

import { ShopPage } from '../shop/shop';
import { ContactPage } from '../contact/contact';
import { DailyPage } from '../daily/daily';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DailyPage;
  tab2Root = ShopPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
