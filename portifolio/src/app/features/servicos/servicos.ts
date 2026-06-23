import { Component } from '@angular/core';

interface Servico {
  numero: string;
  titulo: string;
  descricao: string;
  features: string[];
  icon: string;
}

@Component({
  standalone: false,
  selector: 'app-servicos',
  templateUrl: './servicos.html',
  styleUrl: './servicos.css',
})
export class Servicos {
  servicos: Servico[] = [
    {
      numero: '01',
      titulo: 'Websites e Landing Pages',
      descricao: 'Sites institucionais, landing pages de alta conversão e portfolios com design moderno e performance otimizada.',
      features: ['Design responsivo', 'SEO otimizado', 'Alta performance', 'Animações suaves'],
      icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>'
    },
    {
      numero: '02',
      titulo: 'Aplicações Web',
      descricao: 'Sistemas web completos com autenticação, dashboards, CRUDs e integrações com APIs de terceiros.',
      features: ['SPA / PWA', 'Autenticação segura', 'Dashboards interativos', 'APIs RESTful'],
      icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>'
    },
    {
      numero: '03',
      titulo: 'Aplicativos Mobile',
      descricao: 'Apps nativos e híbridos para iOS e Android com experiência fluida e recursos nativos do dispositivo.',
      features: ['iOS & Android', 'Notificações push', 'Offline first', 'Publicação nas stores'],
      icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>'
    },
    {
      numero: '04',
      titulo: 'APIs e Backend',
      descricao: 'Arquitetura de APIs escaláveis, bancos de dados otimizados e infraestrutura em nuvem.',
      features: ['REST / GraphQL', 'Microsserviços', 'Banco de dados', 'Cloud & DevOps'],
      icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>'
    }
  ];
}
