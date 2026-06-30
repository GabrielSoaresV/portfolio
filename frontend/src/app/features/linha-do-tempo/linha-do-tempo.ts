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
  expandido = false;

  timelineItems: TimelineItem[] = [
    {
      ano: '2021',
      titulo: 'Primeiro contato com programação',
      descricao: 'Conheci o mundo da programação por meio de um vídeo sobre Arduino do Manual do Mundo. A partir desse momento comecei a estudar lógica de programação e linguagem C.'
    },
    {
      ano: '2022',
      titulo: 'Primeiro sistema em produção',
      descricao: 'Desenvolvi um sistema interno de controle e localização de arquivos utilizado durante meu período como Jovem Aprendiz, facilitando a busca por documentos armazenados no arquivo físico da empresa.'
    },
    {
      ano: '2023',
      titulo: 'Evolução prática no desenvolvimento',
      descricao: 'Continuei aprimorando meus conhecimentos com projetos pessoais e estudos, consolidando minha base em desenvolvimento de software.'
    },
    {
      ano: '2024',
      titulo: 'Início da graduação',
      descricao: 'Iniciei as graduações em Análise e Desenvolvimento de Sistemas e Engenharia de Software, aprofundando conhecimentos em arquitetura, banco de dados, engenharia de software e desenvolvimento backend.'
    },
    {
      ano: '2025',
      titulo: 'Primeira experiência profissional',
      descricao: 'Iniciei minha atuação como Desenvolvedor na Controladoria-Geral do Distrito Federal (CGDF), participando do desenvolvimento e evolução de sistemas corporativos.'
    },
    {
      ano: '2025',
      titulo: 'Comunidade e crescimento profissional',
      descricao: 'Passei a participar ativamente da comunidade SouJava Brasília, participei da Campus Party Brasil 17, iniciei o desenvolvimento de projetos pessoais mais robustos e comecei a me preparar para certificações Java.'
    }
  ];

  toggle(): void {
    this.expandido = !this.expandido;
  }
}
