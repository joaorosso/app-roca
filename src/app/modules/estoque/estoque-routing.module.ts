import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/seguranca/auth.guard';
import { EstoqueComponent } from './estoque.component';


const routes: Routes = [{
  path: '',
  component: EstoqueComponent,
  canActivate: [AuthGuard],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoqueRoutingModule { }
