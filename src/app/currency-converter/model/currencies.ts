export enum Currencies {
  USD = 'USD', EUR = 'EUR', JPY = 'JPY', GBP = 'GBR', AUD = 'AUD',
  CHF = 'CHF', CNY = 'CNY', HKD = 'HKD', MXN = 'MXN', INR = 'INR'
}

export const CANADIAN_CURRENCY = 'CAD'

export interface CurrencyResponse {
  description?: string;
  value?: number;
  date?: Date;
}
