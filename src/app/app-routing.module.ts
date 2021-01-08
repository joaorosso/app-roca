import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from './test/test.component';
import { AuthGuard } from './seguranca/auth.guard';

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'rocas',
    loadChildren: () =>
      import('./modules/rocas/rocas.module').then((m) => m.RocasModule),
  },
  {
    path: 'financeiro',
    loadChildren: () =>
      import('./modules/financeiro/financeiro.module').then((m) => m.FinanceiroModule),
  },
  {
    path: 'estoque',
    loadChildren: () =>
      import('./modules/estoque/estoque.module').then((m) => m.EstoqueModule),
  },
  {
    path: 'despesas',
    loadChildren: () =>
      import('./despesas/despesas.module').then((m) => m.DespesasModule),
  },
  {
    path: 'lucro',
    loadChildren: () =>
      import('./lucro/lucro.module').then((m) => m.LucroModule),
  },
  {
    path: '',
    redirectTo: '/rocas',
    pathMatch: 'full',
  },
  { path: 'nao-autorizado', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
