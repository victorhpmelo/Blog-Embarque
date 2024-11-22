import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        width: '20vw'
      })),
      state('closed', style({
        width: '5vw'
      })),
      transition('open <=> closed', [
        animate('0.3s')
      ])
    ])
  ]
})
export class MenuComponent {
  opened: boolean = false;

  openSidenav() {
    this.opened = true;
  }

  closeSidenav() {
    this.opened = false;
  }
}