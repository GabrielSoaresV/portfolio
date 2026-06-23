import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { Hero } from './features/hero/hero';
import { SobreMim } from './features/sobre-mim/sobre-mim';
import { MinhasStacks } from './features/minhas-stacks/minhas-stacks';
import { Projetos } from './features/projetos/projetos';
import { Feedbacks } from './features/feedbacks/feedbacks';
import { Experiencia } from './features/experiencia/experiencia';
import { Servicos } from './features/servicos/servicos';
import { LinhaDoTempo } from './features/linha-do-tempo/linha-do-tempo';
import { Contato } from './features/contato/contato';
import { Footer } from './shared/footer/footer';

@NgModule({
  declarations: [
    AppComponent,
    Hero,
    SobreMim,
    MinhasStacks,
    Projetos,
    Feedbacks,
    Experiencia,
    Servicos,
    LinhaDoTempo,
    Contato,
    Footer
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
