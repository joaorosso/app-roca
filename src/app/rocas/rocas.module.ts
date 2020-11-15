import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NovaRocaComponent } from './nova-roca/nova-roca.component';
import { RocasRoutingModule } from './rocas-routing.module';
import { RocasComponent } from './rocas.component';

@NgModule({
  declarations: [RocasComponent, NovaRocaComponent],
  exports: [RocasComponent, NovaRocaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RocasRoutingModule,
    BsDatepickerModule.forRoot(),
  ],
})
export class RocasModule {}
