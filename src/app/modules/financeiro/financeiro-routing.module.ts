import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/seguranca/auth.guard';
import { FinanceiroComponent } from './financeiro.component';


const routes: Routes = [{
  path: '',
  component: FinanceiroComponent,
  canActivate: [AuthGuard],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceiroRoutingModule { }
