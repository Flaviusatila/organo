import { Component, input } from '@angular/core';
import { GeneroLiterario } from '../livro/livro';
import { LivroComponent } from '../livro/livro.component';

@Component({
  selector: 'app-genero-literario',
  imports:[LivroComponent],
  templateUrl: './genero-literario.component.html',
  styleUrls: ['./genero-literario.component.css']
})
export class GeneroLiterarioComponent {
  genero = input.required<GeneroLiterario>();
}
