import {
  Component,
  Element,
  h,
  State
} from '@stencil/core';

import datepickerNavigationEvents from '../lyne-datepicker-navigation/lyne-datepicker-navigation.events';

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
  @State() public currentYear = this._dateObj.getFullYear();

  private _handleSelectedDate = (evt): void => {
    this.currentMonth = evt.detail.selectedMonth;
    this.currentYear = evt.detail.selectedYear;
  };

  public componentDidLoad(): void {
    this._element.addEventListener(datepickerNavigationEvents.selected, this._handleSelectedDate);
  }

  public disconnectCallback(): void {
    this._element.removeEventListener(datepickerNavigationEvents.selected, this._handleSelectedDate);
  }

  public render(): JSX.Element {
    return (
      <div class='datepicker'>
        <lyne-datepicker-navigation
          selectedMonth={(this.currentMonth + 1).toString()}
          selectedYear={this.currentYear.toString()}
        ></lyne-datepicker-navigation>
        <lyne-datepicker-days
          selectedMonth={(this.currentMonth + 1).toString()}
          selectedYear={this.currentYear.toString()}
        ></lyne-datepicker-days>
      </div>
    );
  }
}
