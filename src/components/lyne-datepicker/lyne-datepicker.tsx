import {
  Component,
  h,
  Prop
} from '@stencil/core';

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

  /**
   * Stringified Array to define the months.
   * Format:
   * `["Januar", "Februar", "März", ...]`
   */
  @Prop() public months = '["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]';

  public render(): JSX.Element {
    const monthsArray = JSON.parse(this.months);
    const dateObj = new Date();
    const currentMonthIndex = dateObj.getMonth();
    const currentMonth = dateObj.getMonth() + 1;
    const currentMonthName = monthsArray[currentMonthIndex];
    const currentYear = dateObj.getFullYear();

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
            <span>{currentMonthName} {currentYear}</span>
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
          days='[
            "Montag",
            "Dienstag",
            "Mittwoch",
            "Donnerstag",
            "Freitag",
            "Samstag",
            "Sonntag"
          ]'
          daysShort='[
            "Mo",
            "Di",
            "Mi",
            "Do",
            "Fr",
            "Sa",
            "So"
          ]'
          selectedMonth={currentMonth.toString()}
          selectedYear={currentYear.toString()}
        ></lyne-datepicker-days>
      </div>
    );
  }
}
