import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostModule } from './components/post/post.module';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderModule,PostModule,FooterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Connect-Uni';
}
