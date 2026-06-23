import { Component } from '@angular/core';

interface Feedback {
  nome: string;
  cargo: string;
  comentario: string;
  projeto: string;
  avatar: string;
  nota: number;
}

@Component({
  standalone: false,
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.html',
  styleUrl: './feedbacks.css',
})
export class Feedbacks {
  feedbacks: Feedback[] = [
    {
      nome: 'Ana Carolina Mendes',
      cargo: 'CEO, TechStore',
      comentario: 'O trabalho foi excepcional! O e-commerce que desenvolveu superou todas as nossas expectativas. A conversão aumentou 40% no primeiro mês. Profissionalismo e qualidade impecáveis.',
      projeto: 'E-commerce Premium',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      nota: 5
    },
    {
      nome: 'Ricardo Oliveira',
      cargo: 'Diretor de Produto, DataVision',
      comentario: 'O dashboard de analytics revolucionou a forma como tomamos decisões na empresa. Interface intuitiva, dados em tempo real e um design que impressiona os stakeholders.',
      projeto: 'Dashboard Analytics',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150',
      nota: 5
    },
    {
      nome: 'Mariana Costa',
      cargo: 'Gerente de Projetos, Construtora Horizonte',
      comentario: 'O app de gestão de equipes economizou horas de trabalho manual toda semana. A sincronização offline foi um diferencial crucial para nossos times de obra.',
      projeto: 'App de Gestão',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      nota: 5
    },
    {
      nome: 'Felipe Andrade',
      cargo: 'CTO, AutomateNow',
      comentario: 'A plataforma SaaS de automação entregou exatamente o que precisávamos. A arquitetura escalável suportou nosso crescimento de 1k para 50k usuários sem problemas.',
      projeto: 'SaaS de Automação',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
      nota: 5
    },
    {
      nome: 'Juliana Ferreira',
      cargo: 'Coordenadora Acadêmica, EducaDigital',
      comentario: 'O portal de cursos online trouxe uma experiência de aprendizado moderna e engajadora para nossos alunos. As aulas em vídeo com certificação automatizada são um sucesso.',
      projeto: 'Portal de Cursos',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      nota: 5
    },
    {
      nome: 'Bruno Santos',
      cargo: 'Arquiteto de Software, FinTech Solutions',
      comentario: 'A arquitetura de microserviços implementada trouxe resiliência e facilidade de manutenção. A observabilidade completa nos ajuda a detectar problemas antes que afetem os clientes.',
      projeto: 'API de Microserviços',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      nota: 5
    }
  ];
}
