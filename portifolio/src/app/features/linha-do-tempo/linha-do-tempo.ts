import { Component } from '@angular/core';

interface TimelineItem {
  ano: string;
  titulo: string;
  descricao: string;
}

@Component({
  standalone: false,
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.html',
  styleUrl: './linha-do-tempo.css',
})
export class LinhaDoTempo {
  timelineItems: TimelineItem[] = [
    {
      ano: '2017',
      titulo: 'Primeiro contato com programação',
      descricao: 'Comecei a estudar lógica de programação e Python por conta própria, descobrindo minha paixão por criar coisas com código.'
    },
    {
      ano: '2018',
      titulo: 'Primeiro projeto pessoal',
      descricao: 'Desenvolvi meu primeiro site completo usando HTML, CSS e JavaScript. Foi quando percebi que queria isso para a vida.'
    },
    {
      ano: '2019',
      titulo: 'Primeiro emprego como dev',
      descricao: 'Entrei no mercado de trabalho como desenvolvedor júnior, aprendendo na prática sobre desenvolvimento ágil e equipes.'
    },
    {
      ano: '2021',
      titulo: 'Evolução para Full Stack',
      descricao: 'Ampliei minhas habilidades para o backend e banco de dados, tornando-me um desenvolvedor completo e versátil.'
    },
    {
      ano: '2023',
      titulo: 'Liderança técnica',
      descricao: 'Assumi o papel de Tech Lead, liderando equipes e arquitetando soluções para projetos de grande porte.'
    },
    {
      ano: '2025',
      titulo: 'Consultoria e projetos próprios',
      descricao: 'Atuando como consultor técnico e desenvolvendo produtos digitais próprios, sempre buscando inovar e aprender.'
    }
  ];
}
