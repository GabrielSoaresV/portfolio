import { Injectable } from '@angular/core';

export interface ProjetoDetalhado {
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
      slug: 'sinca',
      progressBar: 71,
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
      slug: 'dashboard-analytics',
      progressBar: 85,
      title: 'Dashboard Analytics',
      shortDesc: 'Painel de analytics em tempo real com gráficos interativos, relatórios personalizados e exportação de dados.',
      descriptionCard: 'Dashboard de analytics em tempo real para uma empresa de marketing digital que precisava consolidar métricas de múltiplas fontes em um único painel visual e interativo.',
      descriptionDetalhes: 'Dashboard de analytics em tempo real para uma empresa de marketing digital que precisava consolidar métricas de múltiplas fontes em um único painel visual e interativo.',
      tags: ['React', 'TypeScript', 'D3.js', 'Firebase'],
      coverCard: 'img/homolog2.png',
      icon: 'projects/sinca/img/inca-icon2.png',
      link: 'https://analytics-demo.vercel.app',
      repo: 'https://github.com/dev/dashboard-analytics',
      docs: 'https://docs.analytics-demo.vercel.app',
      coverImage: 'https://chatgpt.com/backend-api/estuary/content?id=file_0000000031e8720e9c52edb7cb8cfa2c&ts=495215&p=fs&cid=1&sig=b1d080faefbc1714d4221593c25642b04b82134e16075f4065192a5d85ac36f5&v=0?auto=compress&cs=tinysrgb&w=1200',
      detalhes: {
        problema: 'A equipe de marketing gastava 15+ horas semanais compilando relatórios manuais de Google Analytics, Facebook Ads e Google Ads. Os dados estavam desatualizados e as decisões eram tomadas com informações de 1-2 semanas atrás.',
        solucao: 'Criei um dashboard unificado que consome APIs de múltiplas fontes em tempo real, com visualizações interativas usando D3.js e React. Implementei filtros dinâmicos, comparação de períodos e alertas automáticos para anomalias.',
        resultado: 'O time de marketing reduziu o tempo de geração de relatórios de 15h para 30 minutos semanais. Decisões passaram a ser tomadas com dados de até 5 minutos atrás, aumentando o ROI das campanhas em 25%.'
      },
      funcionalidades: [
        'Dashboard em tempo real com atualização automática a cada 30s',
        'Gráficos interativos com zoom, pan e tooltip detalhado',
        'Relatórios personalizáveis com drag-and-drop',
        'Comparação de períodos com análise de tendências',
        'Alertas automáticos para anomalias e metas',
        'Exportação de relatórios em PDF, CSV e Excel',
        'Compartilhamento de dashboards via link público',
        'Integração com Google Analytics, Facebook Ads e Google Ads'
      ],
      tecnologias: [
        { nome: 'React 18', descricao: 'Frontend com hooks e context API' },
        { nome: 'TypeScript', descricao: 'Tipagem estática para segurança do código' },
        { nome: 'D3.js', descricao: 'Visualizações de dados customizadas' },
        { nome: 'Firebase', descricao: 'Backend-as-a-Service para autenticação e realtime' },
        { nome: 'Tailwind CSS', descricao: 'Estilização utilitária responsiva' },
        { nome: 'Recharts', descricao: 'Gráficos declarativos para React' }
      ],
      telasSistema: [
        { src: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Dashboard principal com métricas consolidadas' },
        { src: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Gráficos de funil de conversão' },
        { src: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Relatório comparativo de campanhas' },
        { src: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Configuração de alertas e metas' }
      ],
      galeriaProjeto: [
        { src: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Dashboard principal com métricas consolidadas' },
        { src: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Gráficos de funil de conversão' },
        { src: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Relatório comparativo de campanhas' },
        { src: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Configuração de alertas e metas' }
      ],
      documentacao: {
        arquitetura: 'O frontend é um SPA React com TypeScript, utilizando Context API para estado global. Os gráficos são renderizados com D3.js para casos customizados e Recharts para gráficos padrão. O Firebase fornece autenticação, Firestore para dados em tempo real e Cloud Functions para processamento de dados.',
        instalacao: '1. Clone o repositório\n2. Execute npm install\n3. Configure o Firebase no .env\n4. Execute npm run dev\n5. Acesse http://localhost:3000',
        uso: 'Faça login com uma conta Google. O dashboard carrega automaticamente as métricas das contas conectadas. Use os filtros no topo para ajustar o período e as fontes de dados. Arraste os widgets para reorganizar o layout.',
        api: 'As APIs de terceiros são consumidas via Cloud Functions do Firebase. Os dados são processados e armazenados no Firestore para consulta rápida pelo frontend.'
      }
    },
    {
      slug: 'app-gestao',
      progressBar: 70,
      title: 'App de Gestão',
      shortDesc: 'Aplicativo mobile para gestão de equipes e tarefas com notificações push e sincronização offline.',
      descriptionCard: 'Aplicativo mobile para gestão de equipes e tarefas com notificações push e sincronização offline.',
      descriptionDetalhes: 'Aplicativo mobile completo para gestão de equipes de campo em uma construtora, com foco em sincronização offline e geolocalização para acompanhamento de atividades.',
      tags: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
      coverCard: 'img/homolog2.png',
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
      slug: 'saas-automacao',
      progressBar: 65,
      title: 'SaaS de Automação',
      shortDesc: 'Ferramenta SaaS para automação de workflows com integrações a mais de 50 serviços externos.',
      descriptionCard: 'Plataforma SaaS de automação de workflows que permite criar fluxos de trabalho visuais conectando diversos serviços, similar ao Zapier mas com foco em empresas brasileiras.',
      descriptionDetalhes: 'Plataforma SaaS de automação de workflows que permite criar fluxos de trabalho visuais conectando diversos serviços, similar ao Zapier mas com foco em empresas brasileiras.',
      tags: ['Vue.js', 'Python', 'AWS', 'Docker'],
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
    {
      slug: 'portal-cursos',
      progressBar: 90,
      title: 'Portal de Cursos',
      shortDesc: 'Plataforma de ensino online com aulas em vídeo, quizzes, certificados e fórum de discussão.',
      descriptionCard: 'Plataforma completa de ensino a distância desenvolvida para uma instituição de educação tecnológica, com suporte a aulas ao vivo, certificação automática e comunidade de alunos.',
      descriptionDetalhes: 'Plataforma completa de ensino a distância desenvolvida para uma instituição de educação tecnológica, com suporte a aulas ao vivo, certificação automática e comunidade de alunos.',
      tags: ['Angular', 'Spring Boot', 'MySQL', 'WebRTC'],
      coverCard: 'img/homolog2.png',
      icon: 'projects/sinca/img/inca-icon2.png',
      link: 'https://cursos-demo.vercel.app',
      repo: 'https://github.com/dev/portal-cursos',
      docs: 'https://docs.cursos-demo.vercel.app',
      coverImage: 'https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=1200',
      detalhes: {
        problema: 'Uma escola de tecnologia precisava migrar 100% para o ensino remoto durante a pandemia. A plataforma anterior não suportava aulas ao vivo, tinha problemas de performance com 500+ alunos simultâneos e não gerenciava certificados.',
        solucao: 'Desenvolvi uma plataforma robusta com Angular para o frontend, Spring Boot para a API e WebRTC para aulas ao vivo. Implementei streaming adaptativo, quiz interativo e geração automática de certificados com validação blockchain.',
        resultado: 'A plataforma suporta 2000+ alunos simultâneos em aulas ao vivo. A taxa de conclusão de cursos aumentou de 30% para 75%. Mais de 50 mil certificados foram emitidos com 100% de validação online.'
      },
      funcionalidades: [
        'Aulas em vídeo com player customizado e anotações',
        'Aulas ao vivo com WebRTC e chat integrado',
        'Quizzes interativos com feedback imediato',
        'Certificados automáticos com validação blockchain',
        'Fórum de discussão por curso e módulo',
        'Progresso do aluno com gamificação',
        'Painel do instrutor com analytics de turma',
        'App mobile para assistir aulas offline'
      ],
      tecnologias: [
        { nome: 'Angular 17', descricao: 'Frontend com SSR e lazy loading' },
        { nome: 'Spring Boot', descricao: 'API Java com JPA e segurança OAuth2' },
        { nome: 'MySQL', descricao: 'Banco relacional com replicação' },
        { nome: 'WebRTC', descricao: 'Streaming de aulas ao vivo' },
        { nome: 'AWS CloudFront', descricao: 'CDN para entrega de vídeos' },
        { nome: 'Ethereum', descricao: 'Validação de certificados na blockchain' }
      ],
      telasSistema: [
        { src: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Dashboard principal com métricas consolidadas' },
        { src: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Gráficos de funil de conversão' },
        { src: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Relatório comparativo de campanhas' },
        { src: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Configuração de alertas e metas' }
      ],
      galeriaProjeto: [
        { src: 'https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Player de vídeo com anotações' },
        { src: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Aula ao vivo com múltiplos participantes' },
        { src: 'https://images.pexels.com/photos/301921/pexels-photo-301921.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Quiz interativo durante a aula' },
        { src: 'https://images.pexels.com/photos/301922/pexels-photo-301922.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Certificado com QR code de validação' }
      ],
      documentacao: {
        arquitetura: 'O frontend Angular utiliza SSR para SEO e lazy loading para code splitting. A API Spring Boot implementa OAuth2 com JWT, JPA para persistência e WebSocket para aulas ao vivo. O streaming de vídeo utiliza AWS CloudFront com HLS. Certificados são armazenados na blockchain Ethereum para imutabilidade.',
        instalacao: '1. Clone o repositório\n2. Configure o Java 17 e Maven\n3. Instale as dependências do Angular\n4. Configure o banco MySQL\n5. Execute mvn spring-boot:run para a API\n6. Execute ng serve para o frontend',
        uso: 'Instrutores criam cursos no painel admin. Alunos se matriculam e acompanham o progresso. Aulas ao vivo são agendadas e notificam os alunos. Certificados são gerados automaticamente ao completar 100% do curso.',
        api: 'A API REST está documentada com OpenAPI. Endpoints para cursos, módulos, aulas, alunos, matrículas e certificados. Autenticação OAuth2 com roles de aluno, instrutor e admin.'
      }
    },
    {
      slug: 'api-microservicos',
      progressBar: 80,
      title: 'API de Microserviços',
      shortDesc: 'Arquitetura de microserviços escalável com gateway, service discovery e observabilidade completa.',
      descriptionCard: 'Arquitetura de microserviços completa desenvolvida para uma fintech que precisava de alta disponibilidade, escalabilidade automática e observabilidade total de seus serviços financeiros.',
      descriptionDetalhes: 'Arquitetura de microserviços completa desenvolvida para uma fintech que precisava de alta disponibilidade, escalabilidade automática e observabilidade total de seus serviços financeiros.',
      tags: ['Go', 'gRPC', 'Kubernetes', 'Prometheus'],
      coverCard: 'img/homolog2.png',
      icon: 'projects/sinca/img/inca-icon2.png',
      link: 'https://microservicos-demo.vercel.app',
      repo: 'https://github.com/dev/api-microservicos',
      docs: 'https://docs.microservicos-demo.vercel.app',
      coverImage: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200',
      detalhes: {
        problema: 'Uma fintech com 1 milhão de usuários enfrentava indisponibilidades frequentes. A arquitetura monolítica não escalava sob picos de transações e falhas em um módulo derrubavam todo o sistema. O time de 30 devs tinha deploys conflitantes.',
        solucao: 'Projetei e implementei uma arquitetura de microserviços em Go com gRPC para comunicação interna, API Gateway para roteamento, Kubernetes para orquestração e Prometheus/Grafana para observabilidade completa.',
        resultado: 'Disponibilidade subiu de 95% para 99.99%. Deploys passaram de 1 por semana para 20 por dia. O tempo médio de detecção de falhas caiu de 30 minutos para 30 segundos. A arquitetura suporta 10M+ usuários.'
      },
      funcionalidades: [
        'API Gateway com rate limiting e autenticação',
        'Service discovery com Consul',
        'Comunicação inter-serviços via gRPC',
        'Circuit breaker e retry automático',
        'Tracing distribuído com Jaeger',
        'Métricas em tempo real com Prometheus',
        'Alertas automáticos via PagerDuty',
        'Deploys automáticos com GitOps (ArgoCD)'
      ],
      tecnologias: [
        { nome: 'Go', descricao: 'Linguagem nativa dos microserviços' },
        { nome: 'gRPC + Protobuf', descricao: 'Comunicação eficiente entre serviços' },
        { nome: 'Kubernetes', descricao: 'Orquestração de containers' },
        { nome: 'Prometheus', descricao: 'Coleta e alerta de métricas' },
        { nome: 'Grafana', descricao: 'Dashboards de observabilidade' },
        { nome: 'Istio', descricao: 'Service mesh para segurança e tracing' }
      ],
      telasSistema: [
        { src: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Dashboard principal com métricas consolidadas' },
        { src: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Gráficos de funil de conversão' },
        { src: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Relatório comparativo de campanhas' },
        { src: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Configuração de alertas e metas' }
      ],
      galeriaProjeto: [
        { src: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Arquitetura de microserviços' },
        { src: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Dashboard Grafana de métricas' },
        { src: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Tracing distribuído no Jaeger' },
        { src: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800', legenda: 'Kubernetes cluster topology' }
      ],
      documentacao: {
        arquitetura: 'A arquitetura consiste em 12 microserviços escritos em Go, comunicando-se via gRPC. Um API Gateway em Nginx roteia requisições externas. O service mesh Istio gerencia segurança mTLS, circuit breaking e tracing. Kubernetes orquestra os containers em um cluster multi-zone na AWS.',
        instalacao: '1. Clone o repositório\n2. Instale Docker, kubectl e Helm\n3. Configure o cluster Kubernetes\n4. Execute make deploy para deploy com Helm\n5. Acesse o Grafana em http://grafana.local',
        uso: 'Cada microserviço tem seu próprio Dockerfile e Helm chart. O Makefile automatiza builds, tests e deploys. O API Gateway expõe a API pública enquanto serviços internos se comunicam via gRPC.',
        api: 'A API pública é REST/JSON via Gateway. Serviços internos usam gRPC. Documentação da API pública em /api/docs. Cada serviço tem seu próprio README com detalhes de endpoints internos.'
      }
    }
  ];

  getAll(): ProjetoDetalhado[] {
    return this.projetos;
  }

  getBySlug(slug: string): ProjetoDetalhado | undefined {
    return this.projetos.find(p => p.slug === slug);
  }
}
