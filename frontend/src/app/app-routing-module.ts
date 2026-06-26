import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ProjetoDetalhe } from './features/projeto-detalhe/projeto-detalhe';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'projetos/:slug', component: ProjetoDetalhe }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
