import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostModule } from './components/post/post.module';
import { FooterModule } from './components/footer/footer.module';
import { MenuComponent } from './components/menu/menu.component';
import { SidenavOpenCloseExample } from './components/sidenav-open-close-example/sidenav-open-close-example.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuComponent,
    PostModule,
    FooterModule,
    SidenavOpenCloseExample,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Connect-Uni';
}
