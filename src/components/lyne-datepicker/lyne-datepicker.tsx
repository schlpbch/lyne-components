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

  @State() public displayedMonth = this._dateObj.getMonth();
  @State() public displayedYear = this._dateObj.getFullYear();

  private _currentDay = this._dateObj.getDate();
  private _currentMonth = this._dateObj.getMonth();
  private _currentYear = this._dateObj.getFullYear();

  private _handleSelectedDate = (evt): void => {
    this.displayedMonth = evt.detail.displayedMonth;
    this.displayedYear = evt.detail.displayedYear;
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
          displayedMonth={(this.displayedMonth + 1).toString()}
          displayedYear={this.displayedYear.toString()}
        ></lyne-datepicker-navigation>
        <lyne-datepicker-days
          displayedMonth={(this.displayedMonth + 1).toString()}
          displayedYear={this.displayedYear.toString()}
          currentDay={this._currentDay.toString()}
          currentMonth={(this._currentMonth + 1).toString()}
          currentYear={(this._currentYear).toString()}
        ></lyne-datepicker-days>
      </div>
    );
  }
}
