import { Component } from '@angular/core';

import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { GeneroLiterarioComponent } from './componentes/genero-literario/genero-literario.component';
import { ListaLivrosComponent } from './componentes/lista-livros/lista-livros.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';

@Component({
  selector: 'app-root',
  imports: [
    CabecalhoComponent,
    RodapeComponent,
    GeneroLiterarioComponent,
    ListaLivrosComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'organo';
}
