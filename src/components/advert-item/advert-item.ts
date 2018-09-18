import { Component } from '@angular/core';

/**
 * Generated class for the AdvertItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'advert-item',
  templateUrl: 'advert-item.html'
})
export class AdvertItemComponent {

  text: string;

  constructor() {
    console.log('Hello AdvertItemComponent Component');
    this.text = 'Hello World';
  }

}
