import {
  Component,
  Element,
  h,
  Prop
} from '@stencil/core';
import events from './lyne-savings-label.events';
import { InterfaceLyneSavingsLabelAttributes } from './lyne-savings-label.custom.d';

/**
 * @slot unnamed - Use this to document a slot.
 */

@Component({
  shadow: true,
  styleUrls: {
    default: 'styles/lyne-savings-label.default.scss',
    shared: 'styles/lyne-savings-label.shared.scss'
  },
  tag: 'lyne-savings-label'
})

export class LyneSavingsLabel {

  /** Documentation for someProp */
  @Prop() public someProp?: InterfaceLyneSavingsLabelAttributes['someInterface'];

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
