import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
      
  ],
  imports: [
    CommonModule,
    MenuComponent,
    MatSidenavModule,
    MatButtonModule,
    
  ],
  exports: [
    
  ]
})
export class MenuModule { }