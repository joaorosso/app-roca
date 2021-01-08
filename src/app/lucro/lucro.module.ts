import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { LucroRoutingModule } from './lucro-routing.module';
import { LucroComponent } from './lucro.component';
import { CURRENCY_MASK } from '../shared/config/currency-mask-config';
import { NovoLucroComponent } from './novo-lucro/novo-lucro.component';

@NgModule({
  declarations: [LucroComponent, NovoLucroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LucroRoutingModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    CurrencyMaskModule,
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CURRENCY_MASK },
    {
      provide: BsDropdownConfig,
      useValue: { isAnimated: true, autoClose: true },
    },
  ],
})
export class LucroModule {}
