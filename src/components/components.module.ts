import { NgModule } from '@angular/core';
import { FeedItemComponent } from './feed-item/feed-item';
import { SliderItemComponent } from './slider-item/slider-item';
import { AdvertItemComponent } from './advert-item/advert-item';
import { CollItemComponent } from './coll-item/coll-item';
import { SlideMenuComponent } from './slide-menu/slide-menu';
import { ProductItemsComponent } from './product-items/product-items';
import { MenuModalComponent } from './menu-modal/menu-modal';
@NgModule({
	declarations: [FeedItemComponent,
    SliderItemComponent,
    AdvertItemComponent,
    CollItemComponent,
    SlideMenuComponent,
    ProductItemsComponent,
    MenuModalComponent],
	imports: [],
	exports: [FeedItemComponent,
    SliderItemComponent,
    AdvertItemComponent,
    CollItemComponent,
    SlideMenuComponent,
    ProductItemsComponent,
    MenuModalComponent]
})
export class ComponentsModule {}
