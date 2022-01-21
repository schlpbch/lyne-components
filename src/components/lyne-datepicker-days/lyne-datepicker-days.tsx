import {
  Component,
  h,
  Prop,
  State
} from '@stencil/core';

import getDocumentLang from '../../global/helpers/get-document-lang';
import { i18nWeekdays } from '../../global/i18n';

@Component({
  shadow: true,
  styleUrls: {
    default: 'styles/lyne-datepicker-days.default.scss',
    shared: 'styles/lyne-datepicker-days.shared.scss'
  },
  tag: 'lyne-datepicker-days'
})

export class LyneDatepickerDays {

  /**
   * The id of the datepicker.
   */
  @Prop() public datepickerId!: string;

  /**
   * The current displayed month.
   * e.g. "8" for august or "11" for november
   */
  @Prop({
    reflect: true
  }) public displayedMonth!: string;

  /**
   * The current displayed year.
   * e.g. "1995" or "2023"
   */
  @Prop({
    reflect: true
  }) public displayedYear!: string;

  /**
   * The current day.
   */
  @Prop({
    reflect: true
  }) public currentDay!: string;

  /**
   * The current month.
   */
  @Prop({
    reflect: true
  }) public currentMonth!: string;

  /**
   * The current year.
   */
  @Prop({
    reflect: true
  }) public currentYear!: string;

  /**
   * If true the todays date is displayed.
   */
  @Prop() public presetTodaysDate? = false;

  /**
   * If true the past dates are disabled.
   */
  @Prop() public disablePastDates? = false;

  @State() private _selectedDay: number;

  private _currentLanguage = getDocumentLang();
  private _currentDay = Number(this.currentDay);
  private _currentMonth = Number(this.currentMonth);
  private _currentYear= Number(this.currentYear);
  private _displayedMonth: number;
  private _displayedYear: number;
  private _selectedMonth = Number(this.currentMonth);
  private _selectedYear = Number(this.currentYear);
  private _weekdays = [];

  /*
   * calculate the day of the week the first day of a month lands on
   */
  private _calcStartWeekday(month: number, year: number): number {
    const firstDateOfTheMonth: Date = new Date(year, month);

    // sunday - saturday: 0 - 6
    let startWeekday: number = firstDateOfTheMonth.getDay();

    // -1 to take into account that week starts on monday
    startWeekday--;

    if (startWeekday === -1) {
      startWeekday = 6;
    }

    return startWeekday;
  }

  /*
   * calculate the number of days in a given month and year
   */
  private _calcNumberOfDays(month: number, year: number): number {
    // by using 0 as the day it will give us the last day of the prior month
    return new Date(year, month + 1, 0)
      .getDate();
  }

  /*
   * save selected day, month and year to variables
   */
  private _handleDayClick = (evt): void => {
    this._selectedDay = Number(evt.currentTarget.getAttribute('data-day'));
    this._selectedMonth = this._displayedMonth;
    this._selectedYear = this._displayedYear;
  };

  public componentWillLoad(): void {
    // insert weekdays
    for (const weekday of i18nWeekdays[this._currentLanguage]) {
      this._weekdays.push(<th class='datepicker__days-weekday' id={`${weekday.short}-${this.datepickerId}`}>{weekday.short}</th>);
    }

    if (this.presetTodaysDate) {
      this._selectedDay = this._currentDay;
    }
  }

  public render(): JSX.Element {

    this._displayedMonth = Number(this.displayedMonth);
    this._displayedYear = Number(this.displayedYear);

    // months are index-based
    const displayedMonth = this._displayedMonth;
    const displayedYear = this._displayedYear;
    const startWeekday: number = this._calcStartWeekday(displayedMonth, displayedYear);
    const numberOfDays: number = this._calcNumberOfDays(displayedMonth, displayedYear);
    let weekday = 0;
    let day = 1;
    let rowCount = 1;
    let cells = [];
    const rows = [];
    let cellClasses: string;
    let dayClick: any;

    // insert the leading empty cells
    for (weekday = 0; weekday < startWeekday; weekday++) {
      cells.push(<td class='datepicker__days-day datepicker__days-day--empty'>&nbsp;</td>);
    }

    // insert the days of the month
    for (day = 1; day <= numberOfDays; day++) {
      cellClasses = 'datepicker__days-day';

      // mark today
      if (day === this._currentDay && displayedMonth === this._currentMonth && displayedYear === this._currentYear) {
        cellClasses += ' datepicker__days-day--today';
        dayClick = (evt): void => this._handleDayClick(evt);
      }

      // mark selected day
      if (day === this._selectedDay && displayedMonth === this._selectedMonth && displayedYear === this._selectedYear) {
        cellClasses += ' datepicker__days-day--selected';
        dayClick = (evt): void => this._handleDayClick(evt);
      }

      // mark past dates as disabled
      if (this.disablePastDates) {

        // selected month/year is in same month/year as currently displayed
        if ((displayedMonth === this._selectedMonth && displayedYear === this._selectedYear) && day < this._currentDay) {
          cellClasses += ' datepicker__days-day--disabled';

        } else if ((displayedMonth < this._selectedMonth && displayedYear <= this._selectedYear) || (displayedYear < this._selectedYear)) {
          cellClasses += ' datepicker__days-day--disabled';
        }
      }

      cells.push(<td
        id={`day${day}-${this.datepickerId}`}
        class={cellClasses}
        headers={`row${rowCount}-${this.datepickerId} ${i18nWeekdays[this._currentLanguage][weekday].short}-${this.datepickerId}`}
        role='gridcell'
        data-day={day}
        onClick={dayClick}
      >
        <span>{day}</span>
      </td>);

      // last day of the week
      if (weekday === 6 && day < numberOfDays) {
        rows.push(<tr id={`row${rowCount}-${this.datepickerId}`} role='row'>{...cells}</tr>);

        // clear array to populate the days of the next week
        cells = [];

        // set weekday to monday
        weekday = 0;

        rowCount += 1;

      } else {
        weekday++;
      }
    }

    // insert any trailing empty cells
    for (weekday; weekday < 7; weekday++) {
      cells.push(<td class='datepicker__days-day datepicker__days-day--empty'>&nbsp;</td>);
    }

    rows.push(<tr id={`row${rowCount}-${this.datepickerId}`} role='row'>{...cells}</tr>);

    return (
      <table
        class='datepicker__days'
        aria-labelledby={`month-${this.datepickerId}`}
      >
        <thead>
          <tr>
            {this._weekdays}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}
