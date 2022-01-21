import {
  Component,
  Element,
  h,
  Prop,
  State
} from '@stencil/core';

import datepickerNavigationEvents from '../lyne-datepicker-navigation/lyne-datepicker-navigation.events';
import { guid } from '../../global/guid';

@Component({
  shadow: true,
  styleUrls: {
    default: 'styles/lyne-datepicker.default.scss',
    shared: 'styles/lyne-datepicker.shared.scss'
  },
  tag: 'lyne-datepicker'
})

export class LyneDatepicker {

  /**
   * Set to true to preset todays date.
   */
  @Prop() public presetTodaysDate? = false;

  /**
   * Set to true to disable the past dates.
   */
  @Prop() public disablePastDates? = false;

  @Element() private _element: HTMLElement;

  private _dateObj = new Date();

  @State() public displayedMonth = this._dateObj.getMonth();
  @State() public displayedYear = this._dateObj.getFullYear();

  private _currentDay = this._dateObj.getDate();
  private _currentMonth = this._dateObj.getMonth();
  private _currentYear = this._dateObj.getFullYear();
  private _id = '';

  private _handleSelectedDate = (evt): void => {
    this.displayedMonth = evt.detail.displayedMonth;
    this.displayedYear = evt.detail.displayedYear;
  };

  public componentWillLoad(): void {
    this._id = `${guid()}`;
  }

  public componentDidLoad(): void {
    this._element.addEventListener(datepickerNavigationEvents.selected, this._handleSelectedDate);
  }

  public disconnectCallback(): void {
    this._element.removeEventListener(datepickerNavigationEvents.selected, this._handleSelectedDate);
  }

  public render(): JSX.Element {
    return (
      <div
        id={this._id}
        class='datepicker'
      >
        <lyne-datepicker-navigation
          datepickerId={this._id}
          displayedMonth={(this.displayedMonth).toString()}
          displayedYear={this.displayedYear.toString()}
        ></lyne-datepicker-navigation>
        <lyne-datepicker-days
          datepickerId={this._id}
          displayedMonth={(this.displayedMonth).toString()}
          displayedYear={this.displayedYear.toString()}
          currentDay={this._currentDay.toString()}
          currentMonth={(this._currentMonth).toString()}
          currentYear={(this._currentYear).toString()}
          presetTodaysDate={(this.presetTodaysDate)}
          disablePastDates={(this.disablePastDates)}
        ></lyne-datepicker-days>
      </div>
    );
  }
}
