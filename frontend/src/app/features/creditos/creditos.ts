import { Component } from '@angular/core';

interface CreditoIcone {
  nome: string;
  arquivo: string;
  autor: string;
  plataforma: string;
  origem: string;
  licenca: string;
}

@Component({
  standalone: false,
  selector: 'app-creditos',
  templateUrl: './creditos.html',
  styleUrl: './creditos.css'
})
export class Creditos {
  readonly creditos: CreditoIcone[] = [
    {
      nome: 'Backend',
      arquivo: 'icon/backend.png',
      autor: 'Freepik',
      plataforma: 'Flaticon',
      origem: 'https://www.flaticon.com/br/icone-gratis/codigo_1014414?term=codigo&page=1&position=6&origin=search&related_id=1014414',
      licenca: 'license/license-icon-backend.pdf'
    },
    {
      nome: 'Frontend',
      arquivo: 'icon/frontend.png',
      autor: 'smalllikeart',
      plataforma: 'Flaticon',
      origem: 'https://www.flaticon.com/br/icone-gratis/responsivo_896530?related_id=896405&origin=search',
      licenca: 'license/license-icon-frontend.pdf'
    },
    {
      nome: 'DevOps',
      arquivo: 'icon/devops.png',
      autor: 'Freepik',
      plataforma: 'Flaticon',
      origem: 'https://www.flaticon.com/br/icone-gratis/devops_5084070',
      licenca: 'license/license-icon-devops.pdf'
    },
    {
      nome: 'Mensageria',
      arquivo: 'icon/mensageria.png',
      autor: 'Maxim Basinski Premium',
      plataforma: 'Flaticon',
      origem: 'https://www.flaticon.com/free-icon/cube_297505?term=microservices&page=1&position=3&origin=search&related_id=297505',
      licenca: 'license/license-icon-mensageria.pdf'
    },
    {
      nome: 'Database',
      arquivo: 'icon/database.png',
      autor: 'Uniconlabs',
      plataforma: 'Flaticon',
      origem: 'https://www.flaticon.com/br/icone-gratis/arquivo-de-banco-de-dados_4233336',
      licenca: 'license/license-icon-database.pdf'
    },
    {
      nome: 'IA e Machine Learning',
      arquivo: 'icon/ia.png',
      autor: 'FACH',
      plataforma: 'Flaticon',
      origem: 'https://www.flaticon.com/br/icone-gratis/aplicativo-de-ia_12164955',
      licenca: 'license/license-icon-ia.pdf'
    },
    {
      nome: 'Ferramentas',
      arquivo: 'icon/ferramenta.png',
      autor: 'Ayub Irawan',
      plataforma: 'Flaticon',
      origem: 'https://www.flaticon.com/br/icone-gratis/ferramenta-de-reparacao_2760290?term=ferramentas&related_id=2760290',
      licenca: 'license/license-icon-ferramenta.pdf'
    }
  ];
}
