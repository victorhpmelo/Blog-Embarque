import { Component, signal } from '@angular/core';
import { FooterModule } from '../footer/footer.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
// importando modulos para usar os componentes
  imports: [FooterModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
