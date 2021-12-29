import {
  Component,
  Element,
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

  @Element() private _element: HTMLElement;

  private _dateObj = new Date();
  @State() public currentMonth = this._dateObj.getMonth();

  private _currentLanguage = getDocumentLang();
  private _monthsArray = [];
  private _currentYear = this._dateObj.getFullYear();
  private _prevButtonEventId = 'prevButtonClick';
  private _nextButtonEventId = 'nextButtonClick';

  /*
   * parse months from the i18n file
   */
  private _parseMonths = (): void => {
    for (const month of i18nMonths[this._currentLanguage]) {
      this._monthsArray.push(month.name);
    }
  };

  private _handlePrevNextButtonClick = (evt): void => {

    if (evt.detail === this._prevButtonEventId) {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this._currentYear -= 1;
      } else {
        this.currentMonth -= 1;
      }
    }

    if (evt.detail === this._nextButtonEventId) {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this._currentYear += 1;
      } else {
        this.currentMonth += 1;
      }
    }
  };

  public componentWillLoad(): void {
    this._parseMonths();
  }

  public componentDidLoad(): void {
    this._element.addEventListener('lyne-button_click', this._handlePrevNextButtonClick);
  }

  public disconnectCallback(): void {
    this._element.removeEventListener('lyne-button_click', this._handlePrevNextButtonClick);
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
            eventId={this._prevButtonEventId}
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
            eventId={this._nextButtonEventId}
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
