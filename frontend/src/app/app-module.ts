import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { Home } from './features/home/home';
import { Hero } from './features/hero/hero';
import { SobreMim } from './features/sobre-mim/sobre-mim';
import { MinhasStacks } from './features/minhas-stacks/minhas-stacks';
import { Projetos } from './features/projetos/projetos';
import { ProjetoDetalhe } from './features/projeto-detalhe/projeto-detalhe';
import { StackDetalhe } from './features/stack-detalhe/stack-detalhe';
import { Creditos } from './features/creditos/creditos';
import { Feedbacks } from './features/feedbacks/feedbacks';
import { Experiencia } from './features/experiencia/experiencia';
import { Servicos } from './features/servicos/servicos';
import { LinhaDoTempo } from './features/linha-do-tempo/linha-do-tempo';
import { Contato } from './features/contato/contato';
import { Footer } from './shared/footer/footer';
import { Navbar } from './shared/navbar/navbar';

@NgModule({
  declarations: [
    AppComponent,
    Home,
    Hero,
    SobreMim,
    MinhasStacks,
    Projetos,
    ProjetoDetalhe,
    StackDetalhe,
    Creditos,
    Feedbacks,
    Experiencia,
    Servicos,
    LinhaDoTempo,
    Contato,
    Footer,
    Navbar
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
