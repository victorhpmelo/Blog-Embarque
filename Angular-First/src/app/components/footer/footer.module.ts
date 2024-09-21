import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';

@NgModule({
// importando o componente para uso
  declarations: [FooterComponent],
  imports: [],
  providers: [],
  exports:[FooterComponent]
})
export class FooterModule {}