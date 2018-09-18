import { Component } from '@angular/core';

/**
 * Generated class for the SliderItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'slider-item',
  templateUrl: 'slider-item.html'
})
export class SliderItemComponent {

  text: string;

  constructor() {
    console.log('Hello SliderItemComponent Component');
    this.text = 'Hello World';
  }

}
