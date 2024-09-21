import { Component, signal } from '@angular/core';
import { FooterModule } from '../footer/footer.module';

@Component({
  selector: 'app-home',
  standalone: true,
// importando o modulo para usar o componente
  imports: [FooterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
// Declarando a variavel
  name = "Olá World";
  randomUrl = "Inserir url Aqui";
  cont = signal(0);
  name1 = signal("Oi ")
// Definindo o metodo
  teste(){
    alert("Oi");
    }

// Usando Signals pro valor ser atualizado quando a funcao do botao for chamada
    contagem(){
  this.cont.update(cont => cont + 1);
  this.name1.set("Oi " + this.cont());
    }
}
