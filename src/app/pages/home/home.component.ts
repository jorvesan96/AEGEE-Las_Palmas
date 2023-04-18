import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('showHide', [
      state('show', style({
        height: '*',
        opacity: 1,
      })),
      state('hide', style({
        height: 0,
        opacity: 0
      })),  
      transition('show <=> hide', animate('2s ease-in-out'))
    ])
  ]
})
export class HomeComponent {
  showInfo=false;
}
