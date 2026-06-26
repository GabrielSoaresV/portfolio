import { Component, OnInit } from '@angular/core';
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projetosService: ProjetosService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      const found = this.projetosService.getBySlug(slug);
      if (found) {
        this.projeto = found;
      } else {
        this.router.navigate(['/']);
      }
    }
  }

  setTab(tab: 'descricao' | 'documentacao' | 'galeria'): void {
    this.activeTab = tab;
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
