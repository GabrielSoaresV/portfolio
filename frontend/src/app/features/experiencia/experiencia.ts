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
      periodo: 'Mar 2025 - Presente',
      cargo: 'Desenvolvedor',
      empresa: 'Controladoria-Geral do Distrito Federal (CGDF)',
      descricao: 'Desenvolvimento e manutenção de sistemas corporativos, implementação de novas funcionalidades, integração de APIs e participação na evolução de aplicações utilizadas pela Controladoria-Geral do Distrito Federal.'
    }
  ];

  estudos: EstudoItem[] = [
    {
      periodo: 'Jul 2024 - Dez 2026',
      titulo: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      instituicao: 'UniProcessus',
      descricao: 'Formação voltada para desenvolvimento de software, banco de dados, engenharia de software, arquitetura de sistemas e desenvolvimento web.'
    },
    {
      periodo: 'Jul 2024 - 2029',
      titulo: 'Bacharelado em Engenharia de Software',
      instituicao: 'Universidade Católica de Brasília (UCB)',
      descricao: 'Graduação com foco em arquitetura de software, engenharia de requisitos, qualidade de software, gestão de projetos e desenvolvimento de sistemas escaláveis.'
    }
  ];
}
