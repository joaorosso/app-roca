import { NovoLucroComponent } from './novo-lucro/novo-lucro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LucroRoutingModule } from './lucro-routing.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { LucroComponent } from './lucro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { CURRENCY_MASK } from '../shared/config/currency-mask-config';

@NgModule({
  declarations: [LucroComponent, NovoLucroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LucroRoutingModule,
    BsDatepickerModule.forRoot(),
    CurrencyMaskModule
  ],
  providers: [{ provide: CURRENCY_MASK_CONFIG, useValue: CURRENCY_MASK }]
})
export class LucroModule {}
