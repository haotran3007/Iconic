import { Component } from '@angular/core';

/**
 * Generated class for the ProductItemsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product-items',
  templateUrl: 'product-items.html'
})
export class ProductItemsComponent {

  text: string;

  constructor() {
    console.log('Hello ProductItemsComponent Component');
    this.text = 'Hello World';
  }

}
