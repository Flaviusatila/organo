import { Component, input } from '@angular/core';
import { GeneroLiterario } from '../livro/livro';
import { LivroComponent } from '../livro/livro.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genero-literario',
  imports:[
    LivroComponent,
    CommonModule
  ],
  templateUrl: './genero-literario.component.html',
  styleUrls: ['./genero-literario.component.css']
})
export class GeneroLiterarioComponent {
  genero = input.required<GeneroLiterario>();
}
