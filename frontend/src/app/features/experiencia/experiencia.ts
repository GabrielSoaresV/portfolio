import { Component } from '@angular/core';

interface ExperienciaItem {
  periodo: string;
  cargo: string;
  empresa: string;
  descricao: string;
}

interface EstudoItem {
  periodo: string;
  titulo: string;
  instituicao: string;
  descricao: string;
}

@Component({
  standalone: false,
  selector: 'app-experiencia',
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.css',
})
export class Experiencia {
  experiencias: ExperienciaItem[] = [
    {
      periodo: '2023 - Presente',
      cargo: 'Tech Lead / Desenvolvedor Full Stack',
      empresa: 'Tech Solutions SA',
      descricao: 'Liderança técnica de equipe de 8 desenvolvedores. Arquitetura de sistemas, code reviews e definição de padrões de código.'
    },
    {
      periodo: '2021 - 2023',
      cargo: 'Desenvolvedor Full Stack Sênior',
      empresa: 'Inova Digital',
      descricao: 'Desenvolvimento de aplicações web e mobile para clientes enterprise. Implementação de CI/CD e otimização de performance.'
    },
    {
      periodo: '2019 - 2021',
      cargo: 'Desenvolvedor Front-end Pleno',
      empresa: 'Agência Criativa Web',
      descricao: 'Criação de interfaces responsivas e animações complexas. Integração com APIs REST e otimização de SEO.'
    },
    {
      periodo: '2018 - 2019',
      cargo: 'Desenvolvedor Júnior',
      empresa: 'StartUp Tech',
      descricao: 'Primeira experiência profissional. Desenvolvimento de features, correção de bugs e aprendizado de boas práticas.'
    }
  ];

  estudos: EstudoItem[] = [
    {
      periodo: '2022 - 2023',
      titulo: 'MBA em Arquitetura de Software',
      instituicao: 'Universidade Tech',
      descricao: 'Especialização em design de sistemas distribuídos, microsserviços, padrões de projeto e cloud computing.'
    },
    {
      periodo: '2017 - 2021',
      titulo: 'Bacharelado em Ciência da Computação',
      instituicao: 'Universidade Federal',
      descricao: 'Formação completa com foco em algoritmos, estruturas de dados, banco de dados e engenharia de software.'
    },
    {
      periodo: '2023',
      titulo: 'Certificação AWS Solutions Architect',
      instituicao: 'Amazon Web Services',
      descricao: 'Certificação profissional em arquitetura de soluções na nuvem AWS, cobrindo serviços de computação, storage e networking.'
    }
  ];
}
