import { Component } from '@angular/core';
import { ProjetosService } from '../../core/services/projetos.service';

@Component({
  standalone: false,
  selector: 'app-projetos',
  templateUrl: './projetos.html',
  styleUrl: './projetos.css',
})
export class Projetos {
  expandido = false;

  constructor(private projetosService: ProjetosService) {}

  get projetos() {
    return this.projetosService.getAll();
  }

  toggle(): void {
    this.expandido = !this.expandido;
  }
}
