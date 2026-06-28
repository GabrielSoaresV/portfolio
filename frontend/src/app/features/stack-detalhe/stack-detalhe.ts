import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { ProjetoDetalhado, ProjetosService } from '../../core/services/projetos.service';
import { StackCategory, StackCertificate, StackSubcategory, StacksService } from '../../core/services/stacks.service';
import { NavigationService } from '../../core/services/navigation.service';

type DetailTab = 'visao-geral' | 'projetos' | 'certificados';

@Component({
  standalone: false,
  selector: 'app-stack-detalhe',
  templateUrl: './stack-detalhe.html',
  styleUrl: './stack-detalhe.css'
})
export class StackDetalhe implements OnInit {
  category?: StackCategory;
  activeSubcategory?: StackSubcategory;
  activeTab: DetailTab = 'visao-geral';
  certificates: StackCertificate[] = [];

  constructor(
    private navigationService: NavigationService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly stacksService: StacksService,
    private readonly projetosService: ProjetosService,
    private readonly http: HttpClient
  ) {}

  ngOnInit(): void {
    combineLatest([this.route.paramMap, this.route.queryParamMap]).subscribe(([params, query]) => {
      const category = this.stacksService.getBySlug(params.get('categoria') ?? '');
      if (!category) {
        this.router.navigate(['/'], { fragment: 'stacks' });
        return;
      }

      this.category = category;
      const requestedSubcategory = query.get('tecnologia');
      this.activeSubcategory = category.subcategories.find(item => item.slug === requestedSubcategory)
        ?? category.subcategories[0];
    });

    this.http.get<StackCertificate[]>('certificados/certificados.json').subscribe({
      next: certificates => this.certificates = certificates,
      error: () => this.certificates = []
    });
  }

  get projects(): ProjetoDetalhado[] {
    return (this.activeSubcategory?.projectSlugs ?? [])
      .map(slug => this.projetosService.getBySlug(slug))
      .filter((project): project is ProjetoDetalhado => Boolean(project));
  }

  get filteredCertificates(): StackCertificate[] {
    if (!this.category || !this.activeSubcategory) return [];
    return this.certificates.filter(certificate =>
      certificate.category === this.category?.slug &&
      certificate.subcategory === this.activeSubcategory?.slug
    );
  }

  selectSubcategory(subcategory: StackSubcategory): void {
    this.activeSubcategory = subcategory;
    this.activeTab = 'visao-geral';
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { tecnologia: subcategory.slug },
      queryParamsHandling: 'merge',
      replaceUrl: true
    });
  }

  setTab(tab: DetailTab): void {
    this.activeTab = tab;
  }

  goBack(): void {

    const previous = this.navigationService.getPreviousUrl();

    if (previous && previous !== this.router.url) {
      this.router.navigateByUrl(previous);
      return;
    }

    this.router.navigate(['/'], {
      fragment: 'stacks'
    });
  }
}
