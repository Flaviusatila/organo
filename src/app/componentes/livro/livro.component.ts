import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {

  alternarFavorito(){
    this.livro.favorito = !this.livro.favorito
  }

  livro = {
    titulo: "As Ondas",
    autoria: "Virginia Wolf",
    imagem: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQzoyRtT93iJEWXR8ZR16Czg_L_R_h4-2TZFDpulqQWvmMrgDjuSv9w8hAEZRR4vALJGdcrgOKh0UyaRq09HLLuJf0_HBEXRcXiIPaw2qImtgw&usqp=CAc",
    favorito: false
  }
}
