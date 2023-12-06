import { Component } from '@angular/core';
import {
  trigger,
  style,
  animate,
  query,
  stagger,
  transition,
} from '@angular/animations';


const transition1 = trigger('listAnimation', [
  transition('* => *', [ // each time the binding value changes
    query(':leave', [
      stagger(-100, [
        animate('0.5s', style({ opacity: 0 }))
      ])
    ], { optional: true }),
    query(':enter', [
      style({ opacity: 0 }),
      stagger(500, [
        animate('0.5s', style({ opacity: 1 }))
      ])
    ], { optional: true })
  ])
])

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    transition1
  ]
})
export class AppComponent {

  items = [];

  showItems() {
    this.items = [0,1,2,3,4];
  }

  hideItems() {
    this.items = [];
  }

  toggle() {
    this.items.length ? this.hideItems() : this.showItems();
   }

}

