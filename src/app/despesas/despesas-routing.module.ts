import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../seguranca/auth.guard';

import { DespesasComponent } from './despesas.component';
import { NovaDespesaComponent } from './nova-despesa/nova-despesa.component';

const routes: Routes = [
  {
    path: 'despesas/:rocaId',
    component: DespesasComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'nova-despesa/:rocaId',
    component: NovaDespesaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'nova-despesa/:rocaId/:despesaId',
    component: NovaDespesaComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DespesasRoutingModule {}
