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
      tags: ['Java', 'Spring Boot', 'Spring Security', 'JPA/Hibernate', 'JWT', 'Maven', 'C#', '.NET'],
      icon: 'icon/backend.png'
    },
    {
      name: 'Frontend',
      description: 'Interfaces modernas, responsivas e com foco em experiência do usuário.',
      tags: ['Angular', 'React', 'TypeScript', 'Tailwind CSS'],
      icon: 'icon/frontend.png'
    },
    {
      name: 'DevOps',
      description: 'CI/CD, containers, cloud e infraestrutura como código.',
      tags: ['Docker', 'Kubernetes', 'GitHub Actions', 'Terraform'],
      icon: 'icon/devops.png'
    },
    {
      name: 'Mensageria',
      description: 'CI/CD, containers, cloud e infraestrutura como código.',
      tags: ['Kafka', 'RabbitMQ', 'ActiveMQ', 'Amazon SQS'],
      icon: 'icon/mensageria.png'
    },
    {
      name: 'DataBase',
      description: 'Bancos de dados relacionais e não relacionais.',
      tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
      icon: 'icon/database.png'
    },
    {
      name: 'IA e Machine Learning',
      description: 'Inteligência artificial e aprendizado de máquina para desenvolvimento de soluções inteligentes.',
      tags: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
      icon: 'icon/ia.png'
    },
    {
      name: 'Ferramentas',
      description: 'Produtividade, versionamento e colaboração em equipe.',
      tags: ['Git', 'VS Code', 'Jira', 'Slack', 'Notion'],
      icon: 'icon/ferramenta.png'
    }
  ];
}
