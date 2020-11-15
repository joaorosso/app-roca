import { NovoLucroComponent } from './novo-lucro/novo-lucro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LucroRoutingModule } from './lucro-routing.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { LucroComponent } from './lucro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LucroComponent, NovoLucroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LucroRoutingModule,
    BsDatepickerModule.forRoot(),
  ],
})
export class LucroModule {}
