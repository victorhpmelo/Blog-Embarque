import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';

/** @title Sidenav open & close behavior */
@Component({
  standalone: true,
  selector: 'sidenav-open-close-example',
  templateUrl: './sidenav-open-close-example.component.html',
  styleUrls: ['./sidenav-open-close-example.component.css'],
  imports: [MatSidenavModule, MatCheckboxModule, FormsModule, MatButtonModule],
})
export class SidenavOpenCloseExample {
  events: string[] = [];
  opened: boolean = true;

  shouldRun = true;
}
