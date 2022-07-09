import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import {CurrencyResponse} from '../model/currencies';

@Component({
  selector: 'app-currency-dialog',
  templateUrl: './currency-dialog.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyDialog {

  constructor(@Inject(MAT_DIALOG_DATA) public data: CurrencyResponse) { }

}
