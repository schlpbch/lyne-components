// @ts-nocheck

import {
  Component,
  Element,
  h,
  Prop,
  State
} from '@stencil/core';
import events from './lyne-toggle.events';
import { InterfaceToggleAttributes } from './lyne-toggle.custom.d';

/**
 * @slot unnamed - Slot to render svg icon. You must pass an svg-element.
 */

@Component({
  shadow: true,
  styleUrls: {
    default: 'styles/lyne-toggle.default.scss',
    shared: 'styles/lyne-toggle.shared.scss'
  },
  tag: 'lyne-toggle-multi'
})

export class LyneToggle {

  @State() private _disabledStateClass: string;

  @Prop({
    reflect: true
  }) public disabled?: boolean;

  @Watch('disabled')
  public watchStateHandler(newValue: boolean): void {
    this._toggleDisabledStateClass();
  }

  /** Label text to show on the button */
  @Prop() public label? = 'Default button text';

  /** Variant of the button, like primary, secondary etc. */
  @Prop() public variant?: InterfaceToggleAttributes['variant'] = 'primary';

  /** Size variant, either large or small. */
  @Prop() public size?: InterfaceToggleAttributes['size'] = 'large';

  /**
   * Set this property to true if you want only a visual represenation of a
   * button, but no interaction (a div instead of a button will be rendered).
   */
  @Prop() public visualButtonOnly?: boolean;

  /** Set to true to get a disabled button */
  @Prop() public disabled? = false;

  /** Id which is sent in the click event payload */
  @Prop() public eventId?: string;

  /** Define if icon should be shown or not */
  @Prop() public icon? = false;

  /** If you use an icon without a label, you must provide an iconDescription */
  @Prop() public iconDescription?: string;

  /** The type attribute to use for the button */
  @Prop() public type?: InterfaceToggleAttributes['type'] = 'button';

  /** The name attribute to use for the button */
  @Prop() public name?: string;

  /** The value attribute to use for the button */
  @Prop() public value?: string;
  
  /** The name attribute to use for the button */
  @Prop() public labelFirst?: string;

  /** The value attribute to use for the button */
  @Prop() public labelSecond?: string;

  /** The name attribute to use for the button */
  @Prop() public valueFirst?: string;

  /** The value attribute to use for the button */
  @Prop() public valueSecond?: string;

  /**
   * If you use the button to trigger another widget which itself is covering
   * the page, you must provide an according attribute for aria-haspopup.
   */
  @Prop() public ariaHaspopup?: InterfaceToggleAttributes['popup'];

  @Element() private _element: HTMLElement;

  /* private _toggleChange = (): void => {
    let eventDetail;

    if (this.visualButtonOnly) {
      return;
    }

    if (this.eventId) {
      eventDetail = this.eventId;
    }

    const event = new CustomEvent(events.change, {
      bubbles: true,
      composed: true,
      detail: eventDetail
    });

    this._element.dispatchEvent(event);
  }; */

  private _toggleDisabledStateClass(): void {
    if (this.disabled) {
      this._disabledStateClass = ' toggle--disabled';
    } else {
      this._disabledStateClass = '';
    }
  }

  public componentWillLoad(): void {
    this._toggleDisabledStateClass();
  }

  public render(): JSX.Element {

    return (

      <div class={`toggle${this._disabledStateClass}`}>
        <div class='toggle__radios-wrapper'>
          <div class='toggle__radio-wrapper'>
            <input
              class='toggle__radio'
              type='radio'
              name='toggle__input'
              value={this.valueFirst}
            />
            <label
              class='toggle__radio-label'
              data-label={this.labelFirst}
            >
              <span>{this.labelFirst}</span>
            </label>
          </div>
          <div class='toggle__radio-wrapper'>
            <input
              class='toggle__radio'
              type='radio'
              name='toggle__input'
              value={this.valueSecond}
            />
            <label
              class='toggle__radio-label'
              data-label={this.labelSecond}
            >
              <span>{this.labelSecond}</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}
