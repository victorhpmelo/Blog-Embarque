import { Component, signal } from '@angular/core';
import { FooterModule } from '../footer/footer.module';
import { CommonModule } from '@angular/common';
import { HelloWorldService } from '../../services/hello-world.service';

@Component({
  selector: 'app-home',
  standalone: true,
// importando modulos para usar os componentes
  imports: [FooterModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
// Declarando a variavel
  name = "Olá World";
  randomUrl = "Inserir url Aqui";
  cont = signal(0);
  name1 = signal("Oi ")
  value = true

// Definindo o metodo
  teste(){
    alert("Oi");
    }

// Usando Signals pro valor ser atualizado de forma dinamica quando a funcao do botao for chamada
    contagem(){
  this.cont.update(cont => cont + 1);
  this.name1.set("Oi " + this.cont());
    }

  lista = [
    //"Victor","Gustavo","Daniel","Adrielly","Felipe"
  ]

  // Pegando os dados da chamada
  constructor(private service:HelloWorldService ){
    this.service.getHelloWorld().subscribe(
      {
        next:(data)=>{
          console.log(data)
        },
        error:(error)=> {
          console.log(error)
        },
        complete:()=>[
          console.log("Finalizou")
        ]
      }
    )
  }
}
