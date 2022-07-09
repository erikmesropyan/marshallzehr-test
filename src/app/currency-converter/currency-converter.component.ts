import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

import {CANADIAN_CURRENCY, Currencies} from './model/currencies';
import {CurrencyService} from './service/currency.service';
import {queryBuilder} from './util/query-builder';
import {CurrencyDialog} from './currency-dialog/currency-dialog';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyConverterComponent implements OnInit, OnDestroy {

  public readonly currencies = Object.keys(Currencies);
  public readonly CANADIAN_CURRENCY = CANADIAN_CURRENCY;
  public currencyFormGroup: FormGroup = this.initForm();
  public isLoading = false;

  private destroy$ = new Subject<void>();

  constructor(private readonly formBuilder: FormBuilder,
              private readonly currencyService: CurrencyService,
              private readonly cdr: ChangeDetectorRef,
              private readonly dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initForm(): FormGroup {
    return this.formBuilder.group({
      currency: this.formBuilder.control(Currencies.USD, Validators.required),
      startDate: this.formBuilder.control(new Date()),
      fromCanadianToForeign: this.formBuilder.control(true)
    });
  }


  changeCurrencyTransformDirection(): void {
    this.currencyFormGroup.controls['fromCanadianToForeign']
      .patchValue(!this.currencyFormGroup.controls['fromCanadianToForeign'].value);
  }

  onSubmit() {
    this.isLoading = true;
    this.currencyService.getCurrency(queryBuilder(this.currencyFormGroup.value))
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        this.isLoading = false;
        this.cdr.detectChanges();
        this.dialog.open(CurrencyDialog, {
          width: '400px',
          data: response
        });
      });
  }
}
