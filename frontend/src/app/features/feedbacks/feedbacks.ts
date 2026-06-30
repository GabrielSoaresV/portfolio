import { Component } from '@angular/core';

interface Feedback {
  nome: string;
  cargo: string;
  comentario: string;
  projeto: string;
  avatar: string;
  nota: number;
}

@Component({
  standalone: false,
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.html',
  styleUrl: './feedbacks.css',
})
export class Feedbacks {
  modalAberto = false;
  expandido = false;
  nome = '';
  cargo = '';
  comentario = '';
  projetoSelecionado = '';
  avatarUrl = '';
  notaHover = 0;
  notaSelecionada = 0;

  projetosDisponiveis = [
    'E-commerce Premium',
    'Dashboard Analytics',
    'App de Gestão',
    'SaaS de Automação',
    'Portal de Cursos',
    'API de Microserviços'
  ];

  feedbacks: Feedback[] = [
    //{
    //  nome: 'Teste',
    //  cargo: 'teste',
    // comentario: 'teste',
    //  projeto: 'teste',
    //  avatar: 'teste-url',
    //  nota: 5
    //},
  ];

  abrirModal(): void {
    this.modalAberto = true;
    document.body.style.overflow = 'hidden';
  }

  fecharModal(): void {
    this.modalAberto = false;
    this.limparFormulario();
    document.body.style.overflow = '';
  }

  limparFormulario(): void {
    this.nome = '';
    this.cargo = '';
    this.comentario = '';
    this.projetoSelecionado = '';
    this.avatarUrl = '';
    this.notaSelecionada = 0;
    this.notaHover = 0;
  }

  setNota(n: number): void {
    this.notaSelecionada = n;
  }

  hoverNota(n: number): void {
    this.notaHover = n;
  }

  resetHover(): void {
    this.notaHover = 0;
  }

  get notaAtual(): number {
    return this.notaHover || this.notaSelecionada;
  }

  toggle(): void {
    this.expandido = !this.expandido;
  }

  salvarFeedback(): void {
    if (!this.nome || !this.cargo || !this.comentario || !this.projetoSelecionado || !this.notaSelecionada) {
      return;
    }

    const novoFeedback: Feedback = {
      nome: this.nome,
      cargo: this.cargo,
      comentario: this.comentario,
      projeto: this.projetoSelecionado,
      avatar: this.avatarUrl || 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150',
      nota: this.notaSelecionada
    };

    this.feedbacks.unshift(novoFeedback);
    this.fecharModal();
  }
}
