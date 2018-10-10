import { NgModule } from '@angular/core';
import { FeedItemComponent } from './feed-item/feed-item';
import { SliderItemComponent } from './slider-item/slider-item';
import { AdvertItemComponent } from './advert-item/advert-item';
import { CollItemComponent } from './coll-item/coll-item';
import { SlideMenuComponent } from './slide-menu/slide-menu';
import { ProductItemsComponent } from './product-items/product-items';
import { MiniCatComponent } from './mini-cat/mini-cat';
import { WishlistComponent } from './wishlist/wishlist';
import { CatCheckComponent } from './cat-check/cat-check';
@NgModule({
	declarations: [FeedItemComponent,
    SliderItemComponent,
    AdvertItemComponent,
    CollItemComponent,
    SlideMenuComponent,
    ProductItemsComponent,
    MiniCatComponent,
    WishlistComponent,
    CatCheckComponent,],
    imports: [],
	exports: [FeedItemComponent,
    SliderItemComponent,
    AdvertItemComponent,
    CollItemComponent,
    SlideMenuComponent,
    ProductItemsComponent,
    MiniCatComponent,
    WishlistComponent,
    CatCheckComponent,
    ]
})
export class ComponentsModule {}
