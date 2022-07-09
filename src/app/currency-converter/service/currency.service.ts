import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

import {CurrencyResponse} from '../model/currencies';
import {QueryObject} from '../util/query-builder';

@Injectable()
export class CurrencyService {

  constructor(private readonly http: HttpClient) { }

  getCurrency(queryObject: QueryObject): Observable<CurrencyResponse> {
    return this.http.get<any>(`observations/${queryObject.result}`).pipe(map(res => {
      return {
        date: res.observations[0]?.d,
        value: res.observations[0]?.[queryObject.code].v,
        description: res.seriesDetail[queryObject.code].description
      }
    }));
  }
}
