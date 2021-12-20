import {
  Component,
  h,
  Prop
} from '@stencil/core';

import { InterfaceLyneDatepickerAttributes } from './lyne-datepicker.custom.d';
import chevronIconRight from 'lyne-icons/dist/icons/chevron-small-right-small.svg';
import chevronIconLeft from 'lyne-icons/dist/icons/chevron-small-left-small.svg';

/**
 * @slot unnamed - Use this to document a slot.
 */

@Component({
  shadow: true,
  styleUrls: {
    default: 'styles/lyne-datepicker.default.scss',
    shared: 'styles/lyne-datepicker.shared.scss'
  },
  tag: 'lyne-datepicker'
})

export class LyneDatepicker {

  /** Documentation for someProp */
  @Prop() public someProp?: InterfaceLyneDatepickerAttributes['someInterface'];

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
        <lyne-datepicker-days></lyne-datepicker-days>
      </div>
    );
  }
}
