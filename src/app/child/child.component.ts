import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  animations: [
    trigger('childAnimation', [
      transition(':enter', [
        animate('2000ms', style({ transform: 'translateX(80%)' })),
        animate('2000ms', style({ transform: 'translateX(0)' })),
      ])
    ])
  ]

})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}