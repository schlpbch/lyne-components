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

  @State() private _clickedDay: number;

  private _clickedMonth: number;
  private _clickedYear: number;
  private _currentLanguage = getDocumentLang();
  private _weekdays = [];
  private _currentDay = Number(this.currentDay);
  private _currentMonth = Number(this.currentMonth) - 1;

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
   * calculate the number of days in a given month and year
   */
  private _selectDay = (evt): void => {
    this._clickedDay = Number(evt.currentTarget.getAttribute('data-day'));
    this._clickedMonth = Number(this.selectedMonth) - 1;
    this._clickedYear = Number(this.selectedYear);
  };

  public componentWillLoad(): void {
    // insert weekdays
    for (const weekday of i18nWeekdays[this._currentLanguage]) {
      this._weekdays.push(<th id={weekday.long}>{weekday.short}</th>);
    }
  }

  public render(): JSX.Element {
    // months are index-based
    const month = Number(this.selectedMonth) - 1;
    const year = Number(this.selectedYear);
    const startWeekday: number = this._calcStartWeekday(month, year);
    const numberOfDays: number = this._calcNumberOfDays(month, year);
    let weekday = 0;
    let day = 1;
    let cells = [];
    const rows = [];
    let cellClasses: string;

    // insert the leading empty cells
    for (weekday = 0; weekday < startWeekday; weekday++) {
      cells.push(<td class='datepicker__day--empty'>&nbsp;</td>);
    }

    // insert the days of the month
    for (day = 1; day <= numberOfDays; day++) {
      cellClasses = '';

      if (day === this._currentDay && month === this._currentMonth) {
        cellClasses += 'datepicker__day--today';
      }

      if (day === this._clickedDay && month === this._clickedMonth && year === this._clickedYear) {
        cellClasses += ' datepicker__day--selected';
      }

      cells.push(<td
        class={cellClasses}
        role='gridcell'
        data-day={day}
        onClick={(evt): void => this._selectDay(evt)}
      >
        <span>{day}</span>
      </td>);

      // last day of the week
      if (weekday === 6 && day < numberOfDays) {
        rows.push(<tr role='row'>{...cells}</tr>);

        // clear array to populate the days of the next week
        cells = [];

        // set weekday to monday
        weekday = 0;

      } else {
        weekday++;
      }
    }

    // insert any trailing empty cells
    for (weekday; weekday < 7; weekday++) {
      cells.push(<td class='datepicker__day--empty'>&nbsp;</td>);
    }

    rows.push(<tr role='row'>{...cells}</tr>);

    return (
      <table>
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
