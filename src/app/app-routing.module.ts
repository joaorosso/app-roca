import { NovoLucroComponent } from './lucro/novo-lucro/novo-lucro.component';
import { AuthGuard } from './seguranca/auth.guard';
import { NovaRocaComponent } from './rocas/nova-roca/nova-roca.component';
import { DespesasComponent } from './despesas/despesas.component';
import { LucroComponent } from './lucro/lucro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { RocasComponent } from './rocas/rocas.component';
import { NovaDespesaComponent } from './despesas/nova-despesa/nova-despesa.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: RocasComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'nova-roca',
    component: NovaRocaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'despesas/:rocaId',
    component: DespesasComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'nova-despesa/:rocaId',
    component: NovaDespesaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'lucros/:rocaId',
    component: LucroComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'novo-lucro/:rocaId',
    component: NovoLucroComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
