import { Component } from '@angular/core';

/**
 * Generated class for the CollItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'coll-item',
  templateUrl: 'coll-item.html'
})
export class CollItemComponent {

  text: string;

  constructor() {
    console.log('Hello CollItemComponent Component');
    this.text = 'Hello World';
  }

}
