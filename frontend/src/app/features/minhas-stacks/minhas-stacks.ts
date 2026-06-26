import { Component } from '@angular/core';

interface Stack {
  name: string;
  description: string;
  tags: string[];
  icon: string;
}

@Component({
  standalone: false,
  selector: 'app-minhas-stacks',
  templateUrl: './minhas-stacks.html',
  styleUrl: './minhas-stacks.css',
})
export class MinhasStacks {
  expandido = false;

  toggle() {
    this.expandido = !this.expandido;
  }

  stacks: Stack[] = [
    {
      name: 'Backend',
      description: 'APIs RESTful, arquitetura limpa e sistemas escaláveis, Mensage-Breake.',
      tags: ['Java', 'Spring Boot', 'Kafka', 'RabbitMQ', 'C#', '.NET'],
      icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="1.5"><path d="M5 12h14M12 5v14"/></svg>'
    },
    {
      name: 'Frontend',
      description: 'Interfaces modernas, responsivas e com foco em experiência do usuário.',
      tags: ['Angular', 'React', 'TypeScript', 'Tailwind CSS'],
      icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>'
    },
    {
      name: 'DevOps',
      description: 'CI/CD, containers, cloud e infraestrutura como código.',
      tags: ['Docker', 'Kubernetes', 'GitHub Actions', 'Terraform'],
      icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>'
    },
    {
      name: 'DataBase',
      description: 'Bancos de dados relacionais e não relacionais.',
      tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
      icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>'
    },
    {
      name: 'IA e Machine Learning',
      description: 'Inteligência artificial e aprendizado de máquina para desenvolvimento de soluções inteligentes.',
      tags: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
      icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>'
    },
    {
      name: 'Ferramentas',
      description: 'Produtividade, versionamento e colaboração em equipe.',
      tags: ['Git', 'VS Code', 'Jira', 'Slack', 'Notion'],
      icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>'
    }
  ];
}
