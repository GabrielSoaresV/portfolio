import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ProjetoDetalhe } from './features/projeto-detalhe/projeto-detalhe';
import { StackDetalhe } from './features/stack-detalhe/stack-detalhe';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'projetos/:slug', component: ProjetoDetalhe },
  { path: 'stacks/:categoria', component: StackDetalhe },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
