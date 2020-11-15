import { PrintComponent } from './print/print.component';
import { TestComponent } from './test/test.component';
import { AuthGuard } from './seguranca/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'print',
    component: PrintComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  { path: 'nao-autorizado', redirectTo: '/inicio' },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
  {
    path: 'rocas',
    loadChildren: () =>
      import('./rocas/rocas.module').then((m) => m.RocasModule),
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
