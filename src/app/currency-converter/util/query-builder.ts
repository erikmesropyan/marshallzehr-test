import {formatDate} from '@angular/common';

import {CurrencyFormFields} from '../model/currencyForm';
import {CANADIAN_CURRENCY} from '../model/currencies';

export function queryBuilder(fields: CurrencyFormFields): QueryObject {
  let result = '';
  let code = 'FX';
  if (fields.fromCanadianToForeign) {
    code += CANADIAN_CURRENCY + fields.currency;
  } else {
    code += fields.currency + CANADIAN_CURRENCY
  }
  let date;
  if (fields.startDate) {
    date = formatDate(fields.startDate, 'yyyy-MM-dd', 'en-US');
  } else {
    date = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  }
  result += `${code}?start_date=${date}&end_date=${date}`;
  return {
    result,
    code
  }
}

export interface QueryObject {
  result: string;
  code: string;
}
