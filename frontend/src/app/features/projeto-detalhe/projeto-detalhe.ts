import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetosService, ProjetoDetalhado } from '../../core/services/projetos.service';

@Component({
  standalone: false,
  selector: 'app-projeto-detalhe',
  templateUrl: './projeto-detalhe.html',
  styleUrl: './projeto-detalhe.css',
})
export class ProjetoDetalhe implements OnInit {
  projeto!: ProjetoDetalhado;
  activeTab: 'descricao' | 'documentacao' | 'galeria' = 'descricao';
  barraProgresso = 1;

  get progressoProjeto(): number {
    return Math.min(100, Math.max(1, this.barraProgresso));
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projetosService: ProjetosService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      const found = this.projetosService.getBySlug(slug);
      if (found) {
        this.projeto = found;
        this.barraProgresso = found.barraProgresso;
      } else {
        this.router.navigate(['/']);
      }
    }
  }

  setTab(tab: 'descricao' | 'documentacao' | 'galeria'): void {
    this.activeTab = tab;
  }

  goBack(): void {
    if (window.history.length > 1) {
      this.location.back();
      return;
    }

    this.router.navigate(['/'], { fragment: 'projetos' });
  }
}
