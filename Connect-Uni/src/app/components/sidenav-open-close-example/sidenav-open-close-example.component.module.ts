import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavOpenCloseExample } from './sidenav-open-close-example.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    SidenavOpenCloseExample
  ],
  exports: []
})
export class SidenavOpenCloseExampleModule { }