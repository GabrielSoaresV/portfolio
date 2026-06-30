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
  activeTab: 'descricao' | 'documentacao' | 'galeriaProjeto' | 'telasSistema' = 'descricao';
  progressBar = 1;
  htmlDescription!: SafeHtml;
  isLoaded = false;
  descricaoExpandida = false;
  imagemSelecionada: string | null = null;
  readonly fallbackImage = '/img/homolog2.png';

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

  setTab(tab: 'descricao' | 'documentacao' | 'galeriaProjeto' | 'telasSistema'): void {
    this.activeTab = tab;
  }

  abrirImagem(src: string | null | undefined) {
    this.imagemSelecionada = this.getImageSrc(src);
  }

  fecharImagem() {
    this.imagemSelecionada = null;
  }

  getImageSrc(value: string | null | undefined): string {
    if (!value) {
      return this.fallbackImage;
    }

    const normalized = value.trim().toLowerCase();

    return normalized === '' || normalized === 'null' || normalized === 'undefined' ? this.fallbackImage : value;
  }

  hasValidValue(value: string | null |undefined): boolean {

    if (value == null) {
      return false;
    }
    
    const normalized = value.trim().toLowerCase();
    return normalized !== '' && normalized !== 'null' && normalized !== 'undefined';
  }

  openExternalLink(url: string | null | undefined): void {
    if (!this.hasValidValue(url)) {
      return;
    }

    window.open(url!, '_blank', 'noopener,noreferrer');
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
