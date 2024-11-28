import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostModule } from './components/post/post.module';
import { LoginModule } from './components/login/login.module';
import { MenuModule } from './components/menu/menu.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuModule,
    PostModule,
    LoginModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Connect-Uni';
}
