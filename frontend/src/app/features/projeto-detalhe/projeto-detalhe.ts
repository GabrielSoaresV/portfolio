import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetosService, ProjetoDetalhado } from '../../core/services/projetos.service';
import { NavigationService } from '../../core/services/navigation.service';

@Component({
  standalone: false,
  selector: 'app-projeto-detalhe',
  templateUrl: './projeto-detalhe.html',
  styleUrl: './projeto-detalhe.css',
})
export class ProjetoDetalhe implements OnInit {
  projeto!: ProjetoDetalhado;
  activeTab: 'descricao' | 'documentacao' | 'galeria' = 'descricao';
  progressBar = 1;

  get progressoProjeto(): number {
    return Math.min(100, Math.max(1, this.progressBar));
  }

  constructor(
    private navigationService: NavigationService,
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
        this.progressBar = found.progressBar;
      } else {
        this.router.navigate(['/']);
      }
    }
  }

  setTab(tab: 'descricao' | 'documentacao' | 'galeria'): void {
    this.activeTab = tab;
  }

  goBack(): void {

    const previous = this.navigationService.getPreviousUrl();

    if (previous && previous !== this.router.url) {
      this.router.navigateByUrl(previous);
      return;
    }

    this.router.navigate(['/'], {
      fragment: 'projetos'
    });
  }
}
