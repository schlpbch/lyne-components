import {
  Component,
  Element,
  h,
  Prop
} from '@stencil/core';

import events from './lyne-datepicker-navigation.events';
import buttonEvents from '../lyne-button/lyne-button.events';
import getDocumentLang from '../../global/helpers/get-document-lang';
import { i18nMonths } from '../../global/i18n';
import chevronIconRight from 'lyne-icons/dist/icons/chevron-small-right-small.svg';
import chevronIconLeft from 'lyne-icons/dist/icons/chevron-small-left-small.svg';

@Component({
  shadow: true,
  styleUrls: {
    default: 'styles/lyne-datepicker-navigation.default.scss',
    shared: 'styles/lyne-datepicker-navigation.shared.scss'
  },
  tag: 'lyne-datepicker-navigation'
})

export class LyneDatepickerNavigation {

  /**
   * The selected month to be displayed.
   * e.g. "8" for august or "11" for november
   */
  @Prop({
    reflect: true
  }) public selectedMonth!: string;

  /**
   * The selected year to be displayed.
   * e.g. "1995" or "2023"
   */
  @Prop({
    reflect: true
  }) public selectedYear!: string;

  @Element() private _element: HTMLElement;

  private _currentLanguage = getDocumentLang();
  private _selectedMonth = Number(this.selectedMonth) - 1;
  private _selectedYear = Number(this.selectedYear);
  private _monthsArray = [];
  private _prevButtonEventId = 'prevButtonClick';
  private _nextButtonEventId = 'nextButtonClick';

  /*
   * add and subtract month and year on click
   */
  private _handlePrevNextButtonClick = (evt): void => {

    if (evt.detail === this._prevButtonEventId) {
      if (this._selectedMonth === 0) {
        this._selectedMonth = 11;
        this._selectedYear -= 1;
      } else {
        this._selectedMonth -= 1;
      }
    }

    if (evt.detail === this._nextButtonEventId) {
      if (this._selectedMonth === 11) {
        this._selectedMonth = 0;
        this._selectedYear += 1;
      } else {
        this._selectedMonth += 1;
      }
    }

    this._propagateSelection(this._selectedMonth, this._selectedYear);
  };

  /*
   * propagate event with the current selected month and year
   */
  private _propagateSelection = (selectedMonth: number, selectedYear: number): void => {
    const event = new CustomEvent(events.selected, {
      bubbles: false,
      composed: true,
      detail: {
        selectedMonth,
        selectedYear
      }
    });

    // lyne-datepicker listens to this event
    this._element.dispatchEvent(event);
  };

  /*
   * parse months from the i18n file
   */
  private _parseMonths = (): void => {
    for (const month of i18nMonths[this._currentLanguage]) {
      this._monthsArray.push(month.name);
    }
  };

  public componentWillLoad(): void {
    this._parseMonths();
  }

  public componentDidLoad(): void {
    this._element.addEventListener(buttonEvents.click, this._handlePrevNextButtonClick);
  }

  public disconnectCallback(): void {
    this._element.removeEventListener(buttonEvents.click, this._handlePrevNextButtonClick);
  }

  public render(): JSX.Element {
    return (
      <div class='datepicker__navigation'>
        <lyne-button
          variant='secondary'
          size='small'
          label=''
          icon={true}
          iconDescription='Zum vorherigen Monat wechseln'
          innerHTML={chevronIconLeft}
          eventId={this._prevButtonEventId}
        ></lyne-button>
        <div class='datepicker__navigation-month-current'>
          <span>{this._monthsArray[this._selectedMonth]} {this._selectedYear}</span>
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
    );
  }
}
