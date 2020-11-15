import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DespesasRoutingModule } from './despesas-routing.module';
import { DespesasComponent } from './despesas.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NovaDespesaComponent } from './nova-despesa/nova-despesa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DespesasComponent, NovaDespesaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DespesasRoutingModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class DespesasModule { }
