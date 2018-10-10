import { Component } from '@angular/core';

/**
 * Generated class for the WishlistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'wishlist',
  templateUrl: 'wishlist.html'
})
export class WishlistComponent {

  text: string;

  constructor() {
    console.log('Hello WishlistComponent Component');
    this.text = 'Hello World';
  }

}
