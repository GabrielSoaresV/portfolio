import { Component, HostListener } from '@angular/core';

interface Stack {
  name: string;
  description: string;
  tags: string[];
  icon: string;

  credit?: {
    author: string;
    platform: string;
    url: string;
    license: string;
  };
}

@Component({
  standalone: false,
  selector: 'app-minhas-stacks',
  templateUrl: './minhas-stacks.html',
  styleUrl: './minhas-stacks.css',
})
export class MinhasStacks {
  expandido = false;

  openedCard: number | null = null;

  toggle() {
    this.expandido = !this.expandido;
  }

  @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
      const target = event.target as HTMLElement;

      const clickedButton = target.closest('.credit-btn');
      const clickedPopup = target.closest('.credit-popup');

      if (!clickedButton && !clickedPopup) {
        this.openedCard = null;
      }
    }

  stacks: Stack[] = [
    {
      name: 'Backend',
      description: 'APIs RESTful, arquitetura limpa e sistemas escaláveis, Mensage-Breake.',
      tags: ['Java', 'Spring Boot', 'Spring Security', 'JPA/Hibernate', 'JWT', 'Maven', 'C#', '.NET'],
      icon: 'icon/backend.png',
        credit: {
          author: 'Freepik',
          platform: 'Flaticon',
          url: 'https://www.flaticon.com/br/icone-gratis/codigo_1014414?term=codigo&page=1&position=6&origin=search&related_id=1014414',
          license: 'license/license-icon-backend.pdf'
        }
    },
    {
      name: 'Frontend',
      description: 'Interfaces modernas, responsivas e com foco em experiência do usuário.',
      tags: ['Angular', 'React', 'TypeScript', 'Tailwind CSS'],
      icon: 'icon/frontend.png',
        credit: {
          author: 'smalllikeart',
          platform: 'Flaticon',
          url: 'https://www.flaticon.com/br/icone-gratis/responsivo_896530?related_id=896405&origin=search',
          license: 'license/license-icon-frontend.pdf'
        }
    },
    {
      name: 'DevOps',
      description: 'CI/CD, containers, cloud e infraestrutura como código.',
      tags: ['Docker', 'Kubernetes', 'GitHub Actions', 'Terraform'],
      icon: 'icon/devops.png',
        credit: {
          author: 'Freepik',
          platform: 'Flaticon',
          url: 'https://www.flaticon.com/br/icone-gratis/devops_5084070',
          license: 'license/license-icon-devops.pdf'
        }
    },
    {
      name: 'Mensageria',
      description: 'CI/CD, containers, cloud e infraestrutura como código.',
      tags: ['Kafka', 'RabbitMQ', 'ActiveMQ', 'Amazon SQS'],
      icon: 'icon/mensageria.png',
        credit: {
          author: 'Maxim Basinski Premium',
          platform: 'Flaticon',
          url: 'https://www.flaticon.com/free-icon/cube_297505?term=microservices&page=1&position=3&origin=search&related_id=297505',
          license: 'license/license-icon-mensageria.pdf'
        }
    },
    {
      name: 'DataBase',
      description: 'Bancos de dados relacionais e não relacionais.',
      tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
      icon: 'icon/database.png',
        credit: {
          author: 'Uniconlabs',
          platform: 'Flaticon',
          url: 'https://www.flaticon.com/br/icone-gratis/arquivo-de-banco-de-dados_4233336',
          license: 'license/license-icon-database.pdf'
        }
    },
    {
      name: 'IA e Machine Learning',
      description: 'Inteligência artificial e aprendizado de máquina para desenvolvimento de soluções inteligentes.',
      tags: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
      icon: 'icon/ia.png',
        credit: {
          author: 'FACH',
          platform: 'Flaticon',
          url: 'https://www.flaticon.com/br/icone-gratis/aplicativo-de-ia_12164955',
          license: 'license/license-icon-ia.pdf'
        }
    },
    {
      name: 'Ferramentas',
      description: 'Produtividade, versionamento e colaboração em equipe.',
      tags: ['Git', 'VS Code', 'Jira', 'Slack', 'Notion'],
      icon: 'icon/ferramenta.png',
        credit: {
          author: 'Ayub Irawan',
          platform: 'Flaticon',
          url: 'https://www.flaticon.com/br/icone-gratis/ferramenta-de-reparacao_2760290?term=ferramentas&related_id=2760290',
          license: 'license/license-icon-ferramenta.pdf'
        }
    }
  ];

  toggleCredit(index: number) {
    this.openedCard =
      this.openedCard === index ? null : index;
  }
}
