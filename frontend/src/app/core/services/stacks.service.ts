import { Injectable } from '@angular/core';

export interface StackSubcategory {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  experience: string[];
  technologies: { name: string; description: string }[];
  projectSlugs: string[];
}

export interface StackCategory {
  slug: string;
  name: string;
  description: string;
  icon: string;
  tags: string[];
  subcategories: StackSubcategory[];
}

export interface StackCertificate {
  category: string;
  subcategory: string;
  title: string;
  issuer: string;
  date?: string;
  file: string;
}

@Injectable({ providedIn: 'root' })
export class StacksService {
  private readonly categories: StackCategory[] = [
    {
      slug: 'backend',
      name: 'Backend',
      description: 'APIs RESTful, arquitetura limpa, segurança e sistemas escaláveis.',
      icon: 'icon/backend.png',
      tags: ['Java', 'Spring Boot', 'Spring Security', 'JPA/Hibernate', 'Maven', 'C#', '.NET'],
      subcategories: [
        {
          slug: 'java',
          name: 'Java & Spring Boot',
          eyebrow: 'Ecossistema Java',
          description: 'Desenvolvimento de APIs e aplicações empresariais robustas, seguras e preparadas para crescer.',
          experience: ['APIs REST com contratos bem definidos', 'Autenticação e autorização com JWT/OAuth2', 'Persistência e modelagem de dados', 'Testes, documentação e automação de builds'],
          technologies: [
            { name: 'Java', description: 'Orientação a objetos, collections, streams e boas práticas.' },
            { name: 'Spring Boot', description: 'APIs REST, validação, configuração e injeção de dependências.' },
            { name: 'Spring Security', description: 'Autenticação, autorização, JWT e proteção de endpoints.' },
            { name: 'JPA / Hibernate', description: 'Mapeamento objeto-relacional, queries e relacionamentos.' },
            { name: 'Maven', description: 'Gerenciamento de dependências, builds e perfis de ambiente.' },
            { name: 'JUnit / Mockito', description: 'Testes unitários e isolamento de dependências.' }
          ],
          projectSlugs: ['portal-cursos']
        },
        {
          slug: 'csharp',
          name: 'C# & .NET',
          eyebrow: 'Ecossistema Microsoft',
          description: 'Serviços modernos com C# e .NET, priorizando clareza, desempenho e manutenção.',
          experience: ['APIs REST com ASP.NET Core', 'Entity Framework e migrations', 'Autenticação baseada em tokens', 'Arquitetura em camadas e SOLID'],
          technologies: [
            { name: 'C#', description: 'Programação orientada a objetos, LINQ e recursos assíncronos.' },
            { name: '.NET', description: 'Plataforma para aplicações web e serviços multiplataforma.' },
            { name: 'ASP.NET Core', description: 'Web APIs, middlewares, filtros e injeção de dependência.' },
            { name: 'Entity Framework', description: 'Persistência, migrations e consultas com LINQ.' },
            { name: 'xUnit', description: 'Testes automatizados e validação de regras de negócio.' }
          ],
          projectSlugs: []
        }
      ]
    },
    {
      slug: 'frontend',
      name: 'Frontend',
      description: 'Interfaces modernas, responsivas e focadas na experiência do usuário.',
      icon: 'icon/frontend.png',
      tags: ['Angular', 'React', 'TypeScript', 'Tailwind CSS'],
      subcategories: [
        {
          slug: 'angular', name: 'Angular', eyebrow: 'Aplicações web',
          description: 'SPAs escaláveis com componentes reutilizáveis, tipagem forte e atenção à experiência.',
          experience: ['Componentização e rotas', 'Formulários e validação', 'Integração com APIs REST', 'Layouts responsivos e acessíveis'],
          technologies: [
            { name: 'Angular', description: 'Componentes, services, guards e roteamento.' },
            { name: 'TypeScript', description: 'Tipagem segura e contratos claros.' },
            { name: 'RxJS', description: 'Fluxos reativos e operações assíncronas.' },
            { name: 'HTML & CSS', description: 'Semântica, responsividade e animações.' }
          ], projectSlugs: ['ecommerce-premium', 'portal-cursos']
        },
        {
          slug: 'react', name: 'React', eyebrow: 'Interfaces reativas',
          description: 'Experiências interativas com componentes funcionais e estado previsível.',
          experience: ['Componentes reutilizáveis', 'Hooks e gerenciamento de estado', 'Dashboards e visualização de dados', 'Design responsivo'],
          technologies: [
            { name: 'React', description: 'Hooks, contextos e composição de componentes.' },
            { name: 'TypeScript', description: 'Componentes e dados fortemente tipados.' },
            { name: 'Tailwind CSS', description: 'Interfaces consistentes e responsivas.' },
            { name: 'D3.js', description: 'Visualizações de dados customizadas.' }
          ], projectSlugs: ['dashboard-analytics', 'app-gestao']
        }
      ]
    },
    {
      slug: 'arquitetura',
      name: 'Arquitetura',
      description: 'Estruturação de sistemas escaláveis, desacoplados e de fácil manutenção.',
      icon: 'icon/arquitetura.png',
      tags: ['Clean Architecture', 'Microsserviços', 'Design Patterns', 'Ports & Adapters'],
      subcategories: [
        {
          slug: 'clean-architecture',
          name: 'Clean Architecture',
          eyebrow: 'Arquitetura em camadas',
          description: 'Organização do sistema com separação clara de responsabilidades, regras de negócio independentes e baixo acoplamento.',
          experience: ['Separação entre domínio, aplicação e infraestrutura', 'Inversão de dependências', 'Casos de uso independentes do framework', 'Entidades orientadas ao domínio'],
          technologies: [
            { name: 'Use Cases', description: 'Centralização das regras de negócio.' },
            { name: 'Domain', description: 'Entidades e regras independentes de infraestrutura.' },
            { name: 'Dependency Inversion', description: 'Dependências apontando para abstrações.' },
            { name: 'DTOs', description: 'Transferência de dados entre camadas.' }
          ], projectSlugs: ['stock-control']
        },
        {
          slug: 'ports-adapters',
          name: 'Ports & Adapters',
          eyebrow: 'Arquitetura Hexagonal',
          description: 'Isolamento do domínio através de portas e adaptadores, permitindo trocar tecnologias sem afetar as regras de negócio.',
          experience: ['Interfaces para acesso a serviços', 'Repositórios desacoplados', 'Adaptadores de entrada e saída', 'Facilidade para testes'],
          technologies: [
            { name: 'Ports', description: 'Contratos utilizados pelo domínio.' },
            { name: 'Adapters', description: 'Implementações de infraestrutura.' },
            { name: 'Repositories', description: 'Persistência desacoplada.' },
            { name: 'Dependency Injection', description: 'Resolução das implementações.' }
          ], projectSlugs: ['stock-control']
        },
        {
          slug: 'design-patterns',
          name: 'Design Patterns',
          eyebrow: 'Boas práticas',
          description: 'Aplicação de padrões de projeto para tornar o código mais reutilizável, extensível e de fácil manutenção.',
          experience: ['Padrões comportamentais', 'Padrões estruturais', 'Padrões criacionais', 'Refatoração orientada a padrões' ],
          technologies: [
            { name: 'Strategy', description: 'Troca dinâmica de comportamentos.' },
            { name: 'Factory', description: 'Criação desacoplada de objetos.' },
            { name: 'Builder', description: 'Construção de objetos complexos.' },
            { name: 'Observer', description: 'Comunicação baseada em eventos.' }
          ], projectSlugs: ['stock-control']
        },
        {
          slug: 'microservices',
          name: 'Microsserviços',
          eyebrow: 'Arquitetura distribuída',
          description: 'Conhecimento sobre divisão de sistemas em serviços independentes, comunicação e escalabilidade.',
          experience: [ 'Separação por domínio', 'Comunicação entre serviços', 'APIs independentes', 'Escalabilidade horizontal' ],
          technologies: [
            { name: 'REST', description: 'Comunicação síncrona entre serviços.' },
            { name: 'API Gateway', description: 'Ponto único de entrada.' },
            { name: 'Service Discovery', description: 'Localização dinâmica de serviços.' },
            { name: 'Mensageria', description: 'Comunicação assíncrona baseada em eventos.' }
          ], projectSlugs: []
        }
      ]
    },
    {
      slug: 'devops', name: 'DevOps',
      description: 'CI/CD, containers, cloud e infraestrutura como código.',
      icon: 'icon/devops.png', tags: ['Docker', 'Kubernetes', 'GitHub Actions', 'Terraform'],
      subcategories: [
        {
          slug: 'containers', name: 'Containers', eyebrow: 'Ambientes consistentes',
          description: 'Empacotamento e orquestração de aplicações do desenvolvimento à produção.',
          experience: ['Imagens enxutas e reproduzíveis', 'Ambientes com Docker Compose', 'Orquestração e escalabilidade', 'Configuração por ambiente'],
          technologies: [{ name: 'Docker', description: 'Imagens, volumes, redes e multi-stage builds.' }, { name: 'Kubernetes', description: 'Deployments, services e configuração de workloads.' }, { name: 'Helm', description: 'Templates e versionamento de deployments.' }],
          projectSlugs: ['saas-automacao', 'api-microservicos']
        },
        {
          slug: 'automacao', name: 'CI/CD & Cloud', eyebrow: 'Entrega contínua',
          description: 'Pipelines e infraestrutura automatizada para entregas seguras e frequentes.',
          experience: ['Pipelines de build, testes e deploy', 'Infraestrutura versionada', 'Estratégias de entrega contínua', 'Observabilidade básica'],
          technologies: [{ name: 'GitHub Actions', description: 'Automação de testes, builds e deploys.' }, { name: 'Terraform', description: 'Infraestrutura como código.' }, { name: 'AWS', description: 'Serviços de computação, armazenamento e entrega.' }, { name: 'ArgoCD', description: 'Deploy contínuo baseado em GitOps.' }],
          projectSlugs: ['saas-automacao', 'api-microservicos']
        }
      ]
    },
    {
      slug: 'mensageria', name: 'Mensageria',
      description: 'Comunicação assíncrona, filas e integração resiliente entre serviços.',
      icon: 'icon/mensageria.png', tags: ['Kafka', 'RabbitMQ', 'ActiveMQ', 'Amazon SQS'],
      subcategories: [
        {
          slug: 'event-streaming', name: 'Eventos & Streaming', eyebrow: 'Alto volume',
          description: 'Fluxos de eventos desacoplados para sistemas distribuídos e orientados a dados.',
          experience: ['Produtores e consumidores', 'Particionamento e grupos de consumo', 'Tratamento de falhas e reprocessamento', 'Eventos de domínio'],
          technologies: [{ name: 'Apache Kafka', description: 'Streaming distribuído e processamento de eventos.' }, { name: 'Schema Registry', description: 'Evolução segura dos contratos de eventos.' }],
          projectSlugs: ['api-microservicos']
        },
        {
          slug: 'filas', name: 'Filas', eyebrow: 'Processamento assíncrono',
          description: 'Filas confiáveis para tarefas, integrações e redução de acoplamento.',
          experience: ['Filas de trabalho', 'Retry e dead-letter queues', 'Roteamento de mensagens', 'Idempotência de consumidores'],
          technologies: [{ name: 'RabbitMQ', description: 'Exchanges, filas e padrões de roteamento.' }, { name: 'ActiveMQ', description: 'Mensageria compatível com JMS.' }, { name: 'Amazon SQS', description: 'Filas gerenciadas e escaláveis na AWS.' }],
          projectSlugs: ['saas-automacao']
        }
      ]
    },
    {
      slug: 'testes',
      name: 'Testes',
      description: 'Desenvolvimento de testes automatizados para garantir qualidade, estabilidade e confiabilidade das aplicações.',
      icon: 'icon/teste.png',
      tags: ['Testes Unitários', 'Integração', 'E2E', 'TDD'],
      subcategories: [
        {
          slug: 'java',
          name: 'Java',
          eyebrow: 'Spring Boot e aplicações corporativas',
          description: 'Testes automatizados para APIs REST, microsserviços e aplicações Java.',
          experience: ['Testes unitários', 'Testes de integração', 'Testes End-to-End', 'Validação de APIs REST'],
          technologies: [
            { name: 'JUnit 5', description: 'Framework para testes unitários e de integração.' },
            { name: 'AssertJ', description: 'Asserções fluentes e legíveis.' },
            { name: 'Mockito', description: 'Criação de mocks e isolamento de dependências.' },
            { name: 'Selenium', description: 'Automação de testes para aplicações web.' }
          ], projectSlugs: []
        },
        {
          slug: 'javascript-typescript',
          name: 'JavaScript / TypeScript',
          eyebrow: 'Aplicações Web',
          description: 'Testes para SPAs, aplicações web modernas e APIs desenvolvidas com JavaScript e TypeScript.',
          experience: ['Testes unitários', 'Testes de integração', 'Testes End-to-End', 'Automação de interface'],
          technologies: [
            { name: 'Jest', description: 'Framework para testes unitários.' },
            { name: 'Vitest', description: 'Framework moderno para testes rápidos.' },
            { name: 'Playwright', description: 'Automação E2E para aplicações web.' },
            { name: 'Cypress', description: 'Testes End-to-End para SPAs.' }
          ], projectSlugs: []
        },
        {
          slug: 'python',
          name: 'Python',
          eyebrow: 'Backend e Automação',
          description: 'Testes automatizados para APIs, automações e aplicações desenvolvidas em Python.',
          experience: ['Testes unitários', 'Testes funcionais', 'Automação de testes', 'Testes End-to-End'],
          technologies: [
            { name: 'pytest', description: 'Framework para testes unitários e funcionais.' },
            { name: 'Playwright', description: 'Automação E2E para aplicações web.' },
            { name: 'Selenium', description: 'Automação de navegadores para testes web.' }
          ], projectSlugs: []
        },
        {
          slug: 'dotnet',
          name: '.NET / C#',
          eyebrow: 'Aplicações Enterprise',
          description: 'Testes automatizados para aplicações corporativas, APIs Web e sistemas desenvolvidos em .NET.',
          experience: ['Testes unitários', 'Testes de integração', 'Automação de interface', 'Validação de APIs'],
          technologies: [
            { name: 'xUnit', description: 'Framework moderno para testes em .NET.' },
            { name: 'NUnit', description: 'Framework tradicional para testes automatizados.' },
            { name: 'Playwright', description: 'Automação E2E para aplicações web.' },
            { name: 'Selenium', description: 'Automação de testes em navegadores.' }
          ], projectSlugs: []
        }
      ]
    },
    {
      slug: 'database', name: 'DataBase',
      description: 'Bancos de dados relacionais, não relacionais e estratégias de cache.',
      icon: 'icon/database.png', tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
      subcategories: [
        {
          slug: 'relacionais', name: 'SQL', eyebrow: 'Dados relacionais',
          description: 'Modelagem consistente, consultas eficientes e integridade transacional.',
          experience: ['Modelagem e normalização', 'Índices e otimização de queries', 'Transações e migrations', 'Integração via ORM'],
          technologies: [{ name: 'PostgreSQL', description: 'Banco relacional robusto e extensível.' }, { name: 'MySQL', description: 'Persistência relacional amplamente adotada.' }, { name: 'SQL', description: 'Consultas, joins, agregações e modelagem.' }],
          projectSlugs: ['ecommerce-premium', 'portal-cursos', 'saas-automacao']
        },
        {
          slug: 'nosql-cache', name: 'NoSQL & Cache', eyebrow: 'Flexibilidade e desempenho',
          description: 'Dados flexíveis e cache para aplicações de baixa latência.',
          experience: ['Documentos e agregações', 'Estratégias de cache', 'Expiração e invalidação', 'Persistência para alto volume'],
          technologies: [{ name: 'MongoDB', description: 'Documentos, índices e aggregation pipeline.' }, { name: 'Redis', description: 'Cache, sessões e estruturas em memória.' }],
          projectSlugs: ['ecommerce-premium', 'app-gestao']
        }
      ]
    },
    {
      slug: 'cloud',
      name: 'Cloud',
      description: 'Conhecimentos em plataformas de computação em nuvem para hospedagem, armazenamento e gerenciamento de aplicações.',
      icon: 'icon/cloud.png',
      tags: ['AWS', 'Azure'],
      subcategories: [
        {
          slug: 'aws',
          name: 'AWS',
          eyebrow: 'Amazon Web Services',
          description: 'Serviços em nuvem para desenvolvimento, implantação e gerenciamento de aplicações escaláveis.',
          experience: ['Computação em nuvem', 'Armazenamento de arquivos', 'Bancos de dados gerenciados', 'Controle de acesso e permissões'],
          technologies: [
            { name: 'EC2', description: 'Instâncias de computação para hospedagem de aplicações.' },
            { name: 'S3', description: 'Armazenamento escalável de objetos e arquivos.' },
            { name: 'RDS', description: 'Serviço gerenciado de banco de dados relacional.' },
            { name: 'IAM', description: 'Gerenciamento de identidades, usuários e permissões.' }
          ], projectSlugs: []
        },
        {
          slug: 'azure',
          name: 'Azure',
          eyebrow: 'Microsoft Azure',
          description: 'Plataforma de computação em nuvem voltada para aplicações corporativas e serviços gerenciados.',
          experience: ['Hospedagem de aplicações', 'Máquinas virtuais', 'Serviços de banco de dados', 'Armazenamento em nuvem'],
          technologies: [
            { name: 'Azure App Service', description: 'Hospedagem de aplicações web e APIs.' },
            { name: 'Azure Virtual Machines', description: 'Infraestrutura virtual em nuvem.' },
            { name: 'Azure SQL Database', description: 'Banco de dados relacional gerenciado.' },
            { name: 'Azure Storage', description: 'Serviço de armazenamento de arquivos e objetos.' }
          ], projectSlugs: []
        }
      ]
    },
    {
      slug: 'ia-machine-learning', name: 'IA e Machine Learning',
      description: 'Inteligência artificial e aprendizado de máquina para soluções inteligentes.',
      icon: 'icon/ia.png', tags: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
      subcategories: [
        {
          slug: 'machine-learning', name: 'Machine Learning', eyebrow: 'Modelos e dados',
          description: 'Exploração de dados, treinamento e avaliação de modelos para problemas reais.',
          experience: ['Preparação e análise de dados', 'Treinamento e comparação de modelos', 'Métricas e validação', 'Integração de modelos em aplicações'],
          technologies: [{ name: 'Python', description: 'Linguagem principal para dados e automação.' }, { name: 'Scikit-learn', description: 'Modelos clássicos e pipelines de ML.' }, { name: 'TensorFlow', description: 'Treinamento e implantação de redes neurais.' }, { name: 'PyTorch', description: 'Experimentação e deep learning.' }],
          projectSlugs: []
        }
      ]
    },
    {
      slug: 'ferramentas', name: 'Ferramentas',
      description: 'Produtividade, versionamento e colaboração em equipe.',
      icon: 'icon/ferramenta.png', tags: ['Git', 'VS Code', 'IntelliJ IDEA', 'Jira', 'Notion'],
      subcategories: [
        {
          slug: 'desenvolvimento', name: 'Desenvolvimento', eyebrow: 'Fluxo de trabalho',
          description: 'Ferramentas que apoiam qualidade, colaboração e produtividade no dia a dia.',
          experience: ['Versionamento e revisão de código', 'Organização de branches e releases', 'Depuração e produtividade na IDE', 'Documentação e gestão de tarefas'],
          technologies: [{ name: 'Git & GitHub', description: 'Versionamento, pull requests e colaboração.' }, { name: 'IntelliJ IDEA', description: 'Desenvolvimento Java com refatoração e debugging.' }, { name: 'VS Code', description: 'Desenvolvimento web e edição multiplataforma.' }, { name: 'Jira & Notion', description: 'Planejamento, documentação e acompanhamento.' }],
          projectSlugs: ['ecommerce-premium', 'portal-cursos', 'api-microservicos']
        }
      ]
    }
  ];

  getAll(): StackCategory[] {
    return this.categories;
  }

  getBySlug(slug: string): StackCategory | undefined {
    return this.categories.find(category => category.slug === slug);
  }
}
