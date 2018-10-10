import { Component } from '@angular/core';

/**
 * Generated class for the CatCheckComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cat-check',
  templateUrl: 'cat-check.html'
})
export class CatCheckComponent {

  text: string;

  constructor() {
    console.log('Hello CatCheckComponent Component');
    this.text = 'Hello World';
  }

}
