import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { StackCertificate, StacksService } from '../../core/services/stacks.service';

interface Stack {
  slug: string;
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

interface StackStats {
  especialidades: number;
  projetos: number;
  certificados: number;
}

@Component({
  standalone: false,
  selector: 'app-minhas-stacks',
  templateUrl: './minhas-stacks.html',
  styleUrl: './minhas-stacks.css',
})
export class MinhasStacks implements OnInit {
  expandido = false;
  openedCard: number | null = null;
  readonly stats: Record<string, StackStats> = {};
  private readonly emptyStats: StackStats = { especialidades: 0, projetos: 0, certificados: 0 };

  constructor(
    private readonly stacksService: StacksService,
    private readonly http: HttpClient
  ) {
    this.stacksService.getAll().forEach(category => {
      const projetos = new Set(category.subcategories.flatMap(subcategory => subcategory.projectSlugs));
      this.stats[category.slug] = {
        especialidades: category.subcategories.length,
        projetos: projetos.size,
        certificados: 0
      };
    });
  }

  ngOnInit(): void {
    this.http.get<StackCertificate[]>('certificados/certificados.json').subscribe({
      next: certificates => certificates.forEach(certificate => {
        const categoryStats = this.stats[certificate.category];
        if (categoryStats) categoryStats.certificados++;
      })
    });
  }

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
      slug: 'backend',
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
      slug: 'frontend',
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
      slug: 'arquitetura',
      name: 'Arquitetura',
      description: 'Design e estruturação de sistemas complexos.',
      tags: ['Clean Architecture', 'Microsserviços', 'Design Patterns', 'Ports & Adapters'],
      icon: 'icon/arquitetura.png',
        credit: {
          author: 'Icon home',
          platform: 'Flaticon',
          url: 'https://www.flaticon.com/br/icone-gratis/architechture_5738037?term=arquitetura+de+software&page=1&position=1&origin=tag&related_id=5738037',
          license: 'license/license-icon-arquitetura.pdf'
        }
    },
    {
      slug: 'devops',
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
      slug: 'mensageria',
      name: 'Mensageria',
      description: 'Comunicação assíncrona, filas e integração resiliente entre serviços.',
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
      slug: 'testes',
      name: 'Testes',
      description: 'Automatização de testes e validação de funcionalidades.',
      tags: ['JUnit', 'Vitest', 'Selenium', 'NUnit', 'Postman', 'Swagger'],
      icon: 'icon/teste.png',
        credit: {
          author: 'Freepik',
          platform: 'Flaticon',
          url: 'https://www.flaticon.com/br/icone-gratis/teste_744320?term=testes&page=1&position=4&origin=search&related_id=744320',
          license: 'license/license-icon-teste.pdf'
        }
    },
    {
      slug: 'database',
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
      slug: 'cloud',
      name: 'Cloud',
      description: 'Conhecimentos em plataformas de computação em nuvem para hospedagem, armazenamento e gerenciamento de aplicações.',
      tags: ['AWS', 'Azure'],
      icon: 'icon/cloud.png',
        credit: {
          author: 'iconmas',
          platform: 'Flaticon',
          url: 'https://www.flaticon.com/br/icone-gratis/computacao-em-nuvem_10349470?related_id=10349470',
          license: 'license/license-icon-cloud.pdf'
        }
    },
    {
      slug: 'ia-machine-learning',
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
      slug: 'ferramentas',
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

  getStats(slug: string): StackStats {
    return this.stats[slug] ?? this.emptyStats;
  }

  marqueeDuration(tagCount: number): string {
    return `${Math.max(12, tagCount * 5.5)}s`;
  }
}
