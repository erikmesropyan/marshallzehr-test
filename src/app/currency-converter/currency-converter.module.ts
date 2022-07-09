import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import {CurrencyConverterComponent} from './currency-converter.component';
import {CurrencyConverterRoutingModule} from "./currency-converter-routing.module";
import {MaterialModule} from '../shared/material/material.module';
import {CurrencyService} from './service/currency.service';
import { CurrencyDialog } from './currency-dialog/currency-dialog';


@NgModule({
  declarations: [
    CurrencyConverterComponent,
    CurrencyDialog
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CurrencyConverterRoutingModule,
    MaterialModule
  ],
  providers: [
    CurrencyService
  ]
})
export class CurrencyConverterModule {
}
