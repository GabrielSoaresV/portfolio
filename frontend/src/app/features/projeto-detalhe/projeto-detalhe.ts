import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetosService, ProjetoDetalhado } from '../../core/services/projetos.service';
import { NavigationService } from '../../core/services/navigation.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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
  htmlDescription!: SafeHtml;
  isLoaded = false;

  get progressoProjeto(): number {
    return Math.min(100, Math.max(1, this.progressBar));
  }

  constructor(
    private navigationService: NavigationService,
    private route: ActivatedRoute,
    private router: Router,
    private projetosService: ProjetosService,
    private location: Location,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');

    if (!slug) {
      return;
    }

    const found = this.projetosService.getBySlug(slug);

    if (!found) {
      this.router.navigate(['/']);
      return;
    }

    this.projeto = found;
    this.progressBar = found.progressBar;

    this.http
      .get(found.descriptionDetalhes, { responseType: 'text' })
      .subscribe(html => {

        this.htmlDescription = this.sanitizer.bypassSecurityTrustHtml(html);
        this.isLoaded = true;
        this.cdr.detectChanges();
      }
    );
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
