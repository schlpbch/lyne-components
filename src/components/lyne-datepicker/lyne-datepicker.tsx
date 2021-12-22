import {
  Component,
  h
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
            <span>December 2021</span>
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
          selectedMonth='12'
          selectedYear='2021'
        ></lyne-datepicker-days>
      </div>
    );
  }
}
