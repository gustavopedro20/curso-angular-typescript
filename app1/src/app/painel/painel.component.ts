import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frase-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  frases: Frase[] = FRASES;
  instrucao: String = 'Traduza a frase:';
  resposta: String = '';

  rodada: number = 0;
  rodadaFrase: Frase;

  progresso: number = 0;

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  verificarResposta() {
    if(this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução está correta');
      this.rodada++;
      this.progresso = this.progresso + (100 / this.frases.length);
      this.atualizaRodada();
      this.resposta = '';
    } else {
      alert('A tradução está errada');
    }
  }

  atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
  }
}
