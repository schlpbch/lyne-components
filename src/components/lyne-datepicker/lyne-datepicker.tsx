import {
  Component,
  h,
  State
} from '@stencil/core';

import getDocumentLang from '../../global/helpers/get-document-lang';
import { i18nMonths } from '../../global/i18n';
import chevronIconRight from 'lyne-icons/dist/icons/chevron-small-right-small.svg';
import chevronIconLeft from 'lyne-icons/dist/icons/chevron-small-left-small.svg';

@Component({
  shadow: true,
  styleUrls: {
    default: 'styles/lyne-datepicker.default.scss',
    shared: 'styles/lyne-datepicker.shared.scss'
  },
  tag: 'lyne-datepicker'
})

export class LyneDatepicker {

  private _dateObj = new Date();
  @State() public currentMonth = this._dateObj.getMonth();

  private _currentLanguage = getDocumentLang();
  private _monthsArray = [];
  private _currentYear = this._dateObj.getFullYear();

  private _parseMonths = (): void => {
    for (const month of i18nMonths[this._currentLanguage]) {
      this._monthsArray.push(month.name);
    }
  };

  public componentWillLoad(): void {
    this._parseMonths();
  }

  public render(): JSX.Element {
    return (
      <div class='datepicker'>
        <div class='datepicker__header'>
          <lyne-button
            variant='secondary'
            size='small'
            label=''
            icon={true}
            iconDescription='Zum vorherigen Monat wechseln'
            innerHTML={chevronIconLeft}
          ></lyne-button>
          <div class='datepicker__header-month-current'>
            <span>{this._monthsArray[this.currentMonth]} {this._currentYear}</span>
          </div>
          <lyne-button
            variant='secondary'
            size='small'
            label=''
            icon={true}
            iconDescription='Zum nächsten Monat wechseln'
            innerHTML={chevronIconRight}
          ></lyne-button>
        </div>
        <lyne-datepicker-days
          selectedMonth={(this.currentMonth + 1).toString()}
          selectedYear={this._currentYear.toString()}
        ></lyne-datepicker-days>
      </div>
    );
  }
}
