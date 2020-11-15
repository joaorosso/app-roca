import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../seguranca/auth.guard';
import { NovaRocaComponent } from './nova-roca/nova-roca.component';
import { RocasComponent } from './rocas.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: RocasComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'nova-roca',
    component: NovaRocaComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RocasRoutingModule {}
