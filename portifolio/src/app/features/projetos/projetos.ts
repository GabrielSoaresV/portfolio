import { Component } from '@angular/core';

interface Projeto {
  title: string;
  description: string;
  tags: string[];
  link: string;
  letter: string;
}

@Component({
  standalone: false,
  selector: 'app-projetos',
  templateUrl: './projetos.html',
  styleUrl: './projetos.css',
})
export class Projetos {
  projetos: Projeto[] = [
    {
      title: 'E-commerce Premium',
      description: 'Plataforma de e-commerce completa com carrinho, checkout, painel administrativo e integração com gateway de pagamento.',
      tags: ['Angular', 'Node.js', 'PostgreSQL', 'Stripe'],
      link: '#',
      letter: 'E'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Painel de analytics em tempo real com gráficos interativos, relatórios personalizados e exportação de dados.',
      tags: ['React', 'TypeScript', 'D3.js', 'Firebase'],
      link: '#',
      letter: 'D'
    },
    {
      title: 'App de Gestão',
      description: 'Aplicativo mobile para gestão de equipes e tarefas com notificações push e sincronização offline.',
      tags: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
      link: '#',
      letter: 'A'
    },
    {
      title: 'SaaS de Automação',
      description: 'Ferramenta SaaS para automação de workflows com integrações a mais de 50 serviços externos.',
      tags: ['Vue.js', 'Python', 'AWS', 'Docker'],
      link: '#',
      letter: 'S'
    },
    {
      title: 'Portal de Cursos',
      description: 'Plataforma de ensino online com aulas em vídeo, quizzes, certificados e fórum de discussão.',
      tags: ['Angular', 'Spring Boot', 'MySQL', 'WebRTC'],
      link: '#',
      letter: 'P'
    },
    {
      title: 'API de Microserviços',
      description: 'Arquitetura de microserviços escalável com gateway, service discovery e observabilidade completa.',
      tags: ['Go', 'gRPC', 'Kubernetes', 'Prometheus'],
      link: '#',
      letter: 'M'
    }
  ];
}
