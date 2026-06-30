import { Injectable } from '@angular/core';

export interface ProjetoDetalhado {
  status: 'PUBLICADO' | 'HOMOLOGACAO';
  slug: string;
  progressBar: number;
  title: string;
  descriptionCard: string;
  descriptionDetalhes: string;
  shortDesc: string;
  tags: string[];
  coverCard: string;
  icon: string;
  link: string;
  repo: string;
  docs: string;
  coverImage: string;
  detalhes: {
    problema: string;
    solucao: string;
    resultado: string;
  };
  funcionalidades: string[];
  tecnologias: { nome: string; descricao: string }[];
  telasSistema: { src: string; legenda: string }[];
  galeriaProjeto: { src: string; legenda: string }[];
  documentacao: {
    arquitetura: string;
    instalacao: string;
    uso: string;
    api?: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {
  private projetos: ProjetoDetalhado[] = [
    {
      status: 'PUBLICADO',
      slug: 'sinca',
      progressBar: 81,
      title: 'SINCA - Sistema Integrado de Negócios e Controle Administrativo',
      shortDesc: 'Plataforma unificada para gestão administrativa, processos internos, autenticação, calendário e comunicação organizacional.',
      descriptionCard: 'Desenvolvido voluntariamente para uma ONG, o SINCA substituiu processos manuais por uma plataforma integrada de gestão, aumentando a eficiência e a segurança das operações da Casa Azul Felipe Augusto.',
      descriptionDetalhes: 'projects/sinca/descricao.html',
      tags: ['Angular', 'Java', 'PostgreSQL', 'Spring Boot', 'Docker'],
      coverCard: 'projects/sinca/img/teste.png',
      icon: 'projects/sinca/img/inca-icon.png',
      link: 'null',
      repo: 'https://github.com/GabrielSoaresV/SINCA.git',
      docs: 'null',
      coverImage: 'projects/sinca/img/teste.png',
      detalhes: {
        problema: 'A instituição dependia de controles descentralizados em planilhas e documentos físicos para gerenciar centenas de informações relacionadas a jovens aprendizes, empresas parceiras e contratos, gerando retrabalho, inconsistências e dificuldades no acompanhamento das atividades.',
        solucao: 'Projetei e desenvolvi o SINCA, uma plataforma de gestão institucional que centraliza os processos administrativos da Casa Azul. A solução incorpora autenticação centralizada, gestão de aprendizes, empresas, contratos, avaliações, calendário institucional e demandas internas, seguindo princípios de DDD, CQRS e Arquitetura Hexagonal para garantir escalabilidade e manutenibilidade.',
        resultado: 'A plataforma substituiu o processo manual por um ambiente integrado, proporcionando maior confiabilidade dos dados, rastreabilidade das operações, automação de rotinas administrativas e uma base arquitetural preparada para a evolução contínua do sistema.'
      },
      funcionalidades: [
        'Cadastro e gerenciamento de jovens aprendizes e empresas parceiras',
        'Controle de contratos de aprendizagem e avaliações obrigatórias',
        'Calendário acadêmico e institucional com regras automatizadas',
        'Gestão de demandas internas e comunicação entre colaboradores',
        'Autenticação segura com controle de perfis e permissões',
        'Envio automatizado de notificações por e-mail',
        'Pesquisa avançada com filtros, paginação e exportação de dados',
        'Rastreabilidade completa das operações e histórico de alterações'
      ],
      tecnologias: [
        { nome: 'Angular', descricao: 'Frontend SPA com Angular Material, RxJS e formulários reativos' },
        { nome: 'Java', descricao: 'Linguagem de programação para backend com Spring Boot' },
        { nome: 'Spring Boot', descricao: 'APIs REST seguindo Arquitetura Hexagonal, DDD e CQRS' },
        { nome: 'Spring Security + JWT', descricao: 'Autenticação baseada em tokens JWT e controle de acesso por perfis' },
        { nome: 'PostgreSQL', descricao: 'Banco relacional com índices otimizados para busca' },
        { nome: 'Hibernate / JPA', descricao: 'Mapeamento objeto-relacional com persistência e gerenciamento de entidades' },
        { nome: 'Docker', descricao: 'Containerização da aplicação, padronização dos ambientes e deploy' }
      ],
      telasSistema: [
        { src: 'projects/sinca/img/sinca_login.gif', legenda: 'Tela de login - 29/06/2026' },
        { src: 'projects/sinca/galeria/home.png', legenda: 'Tela inicial - 29/06/2026' },
        { src: 'projects/sinca/galeria/contratos.png', legenda: 'Tela de contratos - 29/06/2026' },
        { src: 'projects/sinca/galeria/avaliacoes.png', legenda: 'Tela de avaliações - 29/06/2026' },
        { src: 'projects/sinca/galeria/calendario.png', legenda: 'Tela de calendário - 29/06/2026' },
        { src: 'projects/sinca/galeria/export.png', legenda: 'Tela de exportação - 29/06/2026' },
      ],
      galeriaProjeto: [
        { src: 'projects/sinca/galeria/foto-1.jpg', legenda: 'Apresentação de protótipo de baixa fidelidade pelo Figma - 28/06/2025' },
        { src: 'projects/sinca/galeria/foto-2.jpg', legenda: 'Reunião de Validação de Requisitos - 28/06/2025' },
        { src: 'projects/sinca/galeria/foto-3.jpeg', legenda: 'Primeiro teste rodando na rede local da ONG - 25/11/2025' },
        { src: 'projects/sinca/galeria/foto-4.jpeg', legenda: 'Configurando SSH para acesso remoto - 11/02/2026' },
        { src: 'projects/sinca/galeria/foto-5.jpg', legenda: 'Instalando ferramentas de observabilidade e monitoriamento - 19/04/2026' },
        { src: 'projects/sinca/galeria/foto-6.jpg', legenda: 'Upgrade de memória do servidor que hospeda a aplicação - 20/04/2026' },
        { src: 'projects/sinca/galeria/foto-7.jpg', legenda: 'Atendendo chamado "servidor sem internet" - 24/06/2026' },
        { src: 'projects/sinca/galeria/foto-8.jpeg', legenda: 'O motivo da internet ter caído 😂 - 24/06/2026' },
      ],
      documentacao: {
        arquitetura: 'Em homologação...',
        instalacao: 'Em homologação...',
        uso: 'Em homologação...',
        api: 'Em homologação...'
      }
    },
    {
      status: 'HOMOLOGACAO',
      slug: 'null',
      progressBar: 0,
      title: 'Catálogo de compras - Embalagens Caramujo',
      shortDesc: 'null',
      descriptionCard: 'Catálogo digital que permite aos clientes navegar pelos produtos, adicionar itens ao carrinho e realizar pedidos de forma prática e organizada.',
      descriptionDetalhes: 'null',
      tags: ['Angular', 'C#', '.NET', 'MySQL', 'Redis', 'Ollama'],
      coverCard: 'null',
      icon: 'null',
      link: 'null',
      repo: 'null',
      docs: 'null',
      coverImage: '',
      detalhes: {
        problema: 'null',
        solucao: 'null',
        resultado: 'null',
      },
      funcionalidades: [
        'null',
        'null',
        'null',
        'null'
      ],
      tecnologias: [
        { nome: 'null', descricao: 'null' },
        { nome: 'null', descricao: 'null' }
      ],
      telasSistema: [
        { src: 'null', legenda: 'null' },
        { src: 'null', legenda: 'null' }
      ],
      galeriaProjeto: [
        { src: 'null', legenda: 'null' },
        { src: 'null', legenda: 'null' }
      ],
      documentacao: {
        arquitetura: 'null.',
        instalacao: 'null.',
        uso: 'null.',
        api: 'null.'
      }
    },
    {
      status: 'HOMOLOGACAO',
      slug: 'null',
      progressBar: 0,
      title: 'Biblioteca de APIs Spring Reutilizável',
      shortDesc: 'null',
      descriptionCard: 'Biblioteca Open Source modular para aplicações Spring Boot, oferecendo APIs reutilizáveis de autenticação, monitoramento, calendário, e-mail e outros serviços comuns.',
      descriptionDetalhes: 'null',
      tags: ['Java', 'Spring Boot', 'JWT', 'Redis', 'Docker'],
      coverCard: 'null',
      icon: 'null',
      link: 'null',
      repo: 'null',
      docs: 'null',
      coverImage: '',
      detalhes: {
        problema: 'null',
        solucao: 'null',
        resultado: 'null',
      },
      funcionalidades: [
        'null',
        'null',
        'null',
        'null'
      ],
      tecnologias: [
        { nome: 'null', descricao: 'null' },
        { nome: 'null', descricao: 'null' }
      ],
      telasSistema: [
        { src: 'null', legenda: 'null' },
        { src: 'null', legenda: 'null' }
      ],
      galeriaProjeto: [
        { src: 'null', legenda: 'null' },
        { src: 'null', legenda: 'null' }
      ],
      documentacao: {
        arquitetura: 'null.',
        instalacao: 'null.',
        uso: 'null.',
        api: 'null.'
      }
    },
    {
      status: 'HOMOLOGACAO',
      slug: 'null',
      progressBar: 70,
      title: 'Assistente-Vitual',
      shortDesc: 'null',
      descriptionCard: 'Assistente virtual com reconhecimento de voz que interpreta comandos e controla dispositivos conectados a um ESP32 por meio de uma API Web.',
      descriptionDetalhes: 'Aplicativo mobile completo para gestão de equipes de campo em uma construtora, com foco em sincronização offline e geolocalização para acompanhamento de atividades.',
      tags: ['Java', 'Spring Boot'],
      coverCard: '',
      icon: 'projects/sinca/img/inca-icon2.png',
      link: 'https://appgestao-demo.vercel.app',
      repo: 'https://github.com/dev/app-gestao',
      docs: 'https://docs.appgestao-demo.vercel.app',
      coverImage: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200',
      detalhes: {
        problema: 'Uma construtora com 200+ funcionários em obras espalhadas pela cidade tinha dificuldade em acompanhar a produtividade das equipes. Relatórios eram feitos em papel e digitados no fim do dia, causando atrasos e erros.',
        solucao: 'Desenvolvi um app mobile com React Native que funciona offline, sincronizando dados quando há conexão. Implementei geolocalização para rastreamento de presença, chat interno e integração com sistema de folha de pagamento.',
        resultado: 'Redução de 80% no tempo de fechamento de ponto. A produtividade das equipes aumentou 30% com o acompanhamento em tempo real. O app tem 4.8 estrelas na Play Store com 10k+ downloads.'
      },
      funcionalidades: [
        'Gestão de tarefas com kanban e calendário',
        'Registro de ponto com geolocalização e foto',
        'Chat interno com notificações push',
        'Sincronização offline com queue de ações',
        'Relatórios de produtividade por equipe',
        'Integração com sistema de folha de pagamento',
        'Checklist de segurança para obras',
        'Galeria de fotos por obra com marca d\'água'
      ],
      tecnologias: [
        { nome: 'React Native', descricao: 'Framework cross-platform para iOS e Android' },
        { nome: 'Redux Toolkit', descricao: 'Gerenciamento de estado global com persistência' },
        { nome: 'Node.js', descricao: 'API REST com autenticação JWT' },
        { nome: 'MongoDB', descricao: 'Banco NoSQL para dados flexíveis de obras' },
        { nome: 'Expo', descricao: 'Plataforma de desenvolvimento e build' },
        { nome: 'OneSignal', descricao: 'Notificações push cross-platform' }
      ],
      telasSistema: [
        { src: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Dashboard principal com métricas consolidadas' },
        { src: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Gráficos de funil de conversão' },
        { src: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Relatório comparativo de campanhas' },
        { src: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Configuração de alertas e metas' }
      ],
      galeriaProjeto: [
        { src: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Tela inicial com resumo do dia' },
        { src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Kanban de tarefas da equipe' },
        { src: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Registro de ponto com geolocalização' },
        { src: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Relatório de produtividade' }
      ],
      documentacao: {
        arquitetura: 'O app é construído com React Native e Expo, utilizando Redux Toolkit para estado global com persistência no AsyncStorage. A API em Node.js segue o padrão MVC com MongoDB como banco de dados. A sincronização offline é gerenciada por uma fila de ações que processa quando há conexão.',
        instalacao: '1. Clone o repositório\n2. Instale as dependências com npm install\n3. Configure as variáveis de ambiente\n4. Execute expo start\n5. Escaneie o QR code com o app Expo Go',
        uso: 'Após o login, o app sincroniza os dados da obra atribuída. As tarefas podem ser gerenciadas offline e sincronizam automaticamente. O registro de ponto requer permissão de localização.',
        api: 'A API REST documentada em Swagger está disponível em /api/docs. Endpoints para tarefas, equipes, registros de ponto e relatórios.'
      }
    },
    {
      status: 'HOMOLOGACAO',
      slug: 'saas-automacao',
      progressBar: 65,
      title: 'SaaS de Automação',
      shortDesc: 'Ferramenta SaaS para automação de workflows com integrações a mais de 50 serviços externos.',
      descriptionCard: 'Plataforma SaaS de automação de workflows que permite criar fluxos de trabalho visuais conectando diversos serviços, similar ao Zapier mas com foco em empresas brasileiras.',
      descriptionDetalhes: 'Plataforma SaaS de automação de workflows que permite criar fluxos de trabalho visuais conectando diversos serviços, similar ao Zapier mas com foco em empresas brasileiras.',
      tags: ['Vue.js', 'Java', 'AWS', 'Docker'],
      coverCard: 'img/homolog2.png',
      icon: 'projects/sinca/img/inca-icon2.png',
      link: 'https://automacao-demo.vercel.app',
      repo: 'https://github.com/dev/saas-automacao',
      docs: 'https://docs.automacao-demo.vercel.app',
      coverImage: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200',
      detalhes: {
        problema: 'Uma agência de marketing gerenciava 50+ contas de clientes e repetia tarefas manuais diariamente: postar no Instagram, enviar emails, atualizar planilhas. O time de 10 pessoas perdia 30+ horas semanais em tarefas repetitivas.',
        solucao: 'Construí uma plataforma SaaS com editor visual de workflows onde os usuários conectam triggers e actions em um canvas. Implementei 50+ integrações prontas, templates de fluxos e execução em filas com retry automático.',
        resultado: 'A agência automatizou 85% das tarefas repetitivas. O time foi redirecionado para atividades estratégicas, aumentando o faturamento em 60% sem contratar novas pessoas. A plataforma tem 500+ usuários ativos pagantes.'
      },
      funcionalidades: [
        'Editor visual de workflows com drag-and-drop',
        '50+ integrações com serviços populares',
        'Templates prontos para casos de uso comuns',
        'Execução em filas com retry e fallback',
        'Logs detalhados de cada execução',
        'Webhooks personalizados para integrações',
        'Planos e limites por tenant (multi-tenant)',
        'API pública para integrações customizadas'
      ],
      tecnologias: [
        { nome: 'Vue.js 3', descricao: 'Frontend com Composition API e Pinia' },
        { nome: 'Python + FastAPI', descricao: 'API de alta performance com async/await' },
        { nome: 'AWS ECS', descricao: 'Orquestração de containers Docker' },
        { nome: 'Docker', descricao: 'Containerização dos serviços' },
        { nome: 'Celery', descricao: 'Fila de tarefas distribuídas' },
        { nome: 'PostgreSQL', descricao: 'Banco relacional multi-tenant' }
      ],
      telasSistema: [
        { src: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Dashboard principal com métricas consolidadas' },
        { src: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Gráficos de funil de conversão' },
        { src: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Relatório comparativo de campanhas' },
        { src: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Configuração de alertas e metas' }
      ],
      galeriaProjeto: [
        { src: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Editor visual de workflows' },
        { src: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Biblioteca de integrações' },
        { src: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Logs de execução em tempo real' },
        { src: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Dashboard de uso e métricas' }
      ],
      documentacao: {
        arquitetura: 'O sistema é multi-tenant com isolamento por schema no PostgreSQL. O frontend Vue.js 3 comunica-se com a API FastAPI via REST. Os workflows são executados por workers Celery em containers Docker na AWS ECS. O editor visual utiliza Vue Flow para o canvas interativo.',
        instalacao: '1. Clone o repositório\n2. Configure o Docker e Docker Compose\n3. Execute docker-compose up\n4. Acesse http://localhost:8080\n5. Crie uma conta e comece a construir workflows',
        uso: 'Após criar uma conta, acesse o editor de workflows. Arraste triggers da barra lateral para o canvas, conecte com actions e configure os parâmetros. Ative o workflow e acompanhe as execuções no painel de logs.',
        api: 'A API pública permite criar e gerenciar workflows programaticamente. Autenticação via API key. Documentação completa em /api/docs com exemplos em Python, JavaScript e cURL.'
      }
    },
  ];

  getAll(): ProjetoDetalhado[] {
    return this.projetos;
  }

  getBySlug(slug: string): ProjetoDetalhado | undefined {
    return this.projetos.find(p => p.slug === slug);
  }
}
