import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';

import { DespesasRoutingModule } from './despesas-routing.module';
import { DespesasComponent } from './despesas.component';
import { NovaDespesaComponent } from './nova-despesa/nova-despesa.component';
import { CURRENCY_MASK } from '../shared/config/currency-mask-config';

@NgModule({
  declarations: [DespesasComponent, NovaDespesaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DespesasRoutingModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    CurrencyMaskModule,
    NgSelectModule
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CURRENCY_MASK },
    {
      provide: BsDropdownConfig,
      useValue: { isAnimated: true, autoClose: true },
    },
  ],
})
export class DespesasModule {}
