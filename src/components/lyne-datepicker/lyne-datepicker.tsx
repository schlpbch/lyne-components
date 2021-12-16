import {
  Component,
  Element,
  h,
  Prop
} from '@stencil/core';
import events from './lyne-datepicker.events';
import { InterfaceLyneDatepickerAttributes } from './lyne-datepicker.custom.d';

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

  @Element() private _element: HTMLElement;

  private _clickHandler = (): void => {

    const event = new CustomEvent(events.click, {
      bubbles: true,
      composed: true,
      detail: 'some event detail'
    });

    this._element.dispatchEvent(event);
  };

  public render(): JSX.Element {
    return (
      <button
        class='some-class'
        onClick={this._clickHandler}
      >
        {this.someProp}
      </button>
    );
  }
}
