import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetosService, ProjetoDetalhado } from '../../core/services/projetos.service';

@Component({
  standalone: false,
  selector: 'app-projetos',
  templateUrl: './projetos.html',
  styleUrl: './projetos.css',
})
export class Projetos {
  expandido = false;
  readonly fallbackImage = '/img/homolog2.png';

  constructor(
    private projetosService: ProjetosService,
    private router: Router
  ) {}

  get projetos() {
    return this.projetosService.getAll();
  }

  getImageSrc(value: string | null | undefined): string {
    if (value === null || value === undefined) {
      return this.fallbackImage;
    }

    const normalized = value.toString().trim();
    return normalized === '' || normalized.toLowerCase() === 'null' || normalized.toLowerCase() === 'undefined'
      ? this.fallbackImage
      : value.toString();
  }

  hasValidValue(value: string | null | undefined): boolean {
    if (value === null || value === undefined) {
      return false;
    }

    const normalized = value.toString().trim();
    return normalized !== '' && normalized.toLowerCase() !== 'null' && normalized.toLowerCase() !== 'undefined';
  }

  goToProject(projeto: ProjetoDetalhado): void {
    if (projeto.status !== 'PUBLICADO') {
      return;
    }

    this.router.navigate(['/projetos', projeto.slug]);
  }

  toggle(): void {
    this.expandido = !this.expandido;
  }
}
