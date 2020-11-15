import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../seguranca/auth.guard';
import { LucroComponent } from './lucro.component';
import { NovoLucroComponent } from './novo-lucro/novo-lucro.component';

const routes: Routes = [
  {
    path: 'lucros/:rocaId',
    component: LucroComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'novo-lucro/:rocaId',
    component: NovoLucroComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LucroRoutingModule {}
