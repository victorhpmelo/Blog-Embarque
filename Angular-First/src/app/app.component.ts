import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";

@Component({

// seleciona o nome do tag destino 
  selector: 'app-root',

// Define o componente como sendo seu proprio modulo, sem precisar do NgModule pra funcionar
  standalone: true,

// Importa as dependências a serem usadas(exclusivo pra componentes standalone)
  imports: [RouterOutlet, HomeComponent],
  
// Caminho do arquivo de estrutura html
  templateUrl:'./app.component.html',

// Caminho do arquivo estilizacao
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular-First';
}
