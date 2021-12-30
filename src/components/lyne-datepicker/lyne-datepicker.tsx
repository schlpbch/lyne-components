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
  private _currentDay = this._dateObj.getDate();
  private _currentMonth = this._dateObj.getMonth();

  @State() public selectedMonth = this._dateObj.getMonth();
  @State() public selectedYear = this._dateObj.getFullYear();

  private _handleSelectedDate = (evt): void => {
    this.selectedMonth = evt.detail.selectedMonth;
    this.selectedYear = evt.detail.selectedYear;
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
          selectedMonth={(this.selectedMonth + 1).toString()}
          selectedYear={this.selectedYear.toString()}
        ></lyne-datepicker-navigation>
        <lyne-datepicker-days
          selectedMonth={(this.selectedMonth + 1).toString()}
          selectedYear={this.selectedYear.toString()}
          currentDay={this._currentDay.toString()}
          currentMonth={(this._currentMonth + 1).toString()}
        ></lyne-datepicker-days>
      </div>
    );
  }
}
