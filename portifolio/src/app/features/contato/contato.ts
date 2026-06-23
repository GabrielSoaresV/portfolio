import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-contato',
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  onSubmit(event: Event): void {
    event.preventDefault();
    alert('Obrigado pela mensagem! Entrarei em contato em breve.');
  }
}
