import { CurrencyMaskConfig } from 'ng2-currency-mask/lib/currency-mask.config';

export const CURRENCY_MASK: CurrencyMaskConfig = {
  align: 'left',
  allowNegative: true,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.'
};