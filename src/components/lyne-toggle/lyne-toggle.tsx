// @ts-nocheck

import {
  Component,
  Element,
  h,
  Prop,
  State
} from '@stencil/core';
import events from './lyne-toggle.events';
import { guid } from '../../global/guid';
import { InterfaceToggleAttributes } from './lyne-toggle.custom.d';
import tickIcon from 'lyne-icons/dist/icons/tick-small.svg';

/**
 * @slot unnamed - Slot to render svg icon. You must pass an svg-element.
 */

@Component({
  shadow: true,
  styleUrls: {
    default: 'styles/lyne-toggle.default.scss',
    shared: 'styles/lyne-toggle.shared.scss'
  },
  tag: 'lyne-toggle'
})

export class LyneToggle {

  private _guid: string;

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

  /**
   * Set this property to true if you want only a visual represenation of a
   * button, but no interaction (a div instead of a button will be rendered).
   */
  @Prop() public visualButtonOnly?: boolean;

  /** Set to true to get a disabled button */
  @Prop() public disabled? = false;

  /** Set to true to to show checked state initially */
  @Prop() public checked? = false;

  /** Id which is sent in the click event payload */
  @Prop() public eventId?: string;

  /** Define if icon should be shown or not */
  @Prop() public icon? = false;

  /** If you use an icon without a label, you must provide an iconDescription */
  @Prop() public labelPlacement!: string;

  /** The name attribute to use for the button */
  @Prop() public name?: string;

  /** The value attribute to use for the button */
  @Prop() public value?: string;

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
    this._guid = guid();
    this._toggleDisabledStateClass();
  }

  public render(): JSX.Element {

    let labelPositionClass = ' toggle--label-left';

    if (this.labelPlacement !== 'left') {
      labelPositionClass = ' toggle--label-right';
    }

    return (

      <div class={`toggle${this._disabledStateClass}${labelPositionClass}`}>
        <label
          class='toggle__label'
          id={`toggle-${this._guid}__label`}
          for={`toggle-${this._guid}`}
          aria-hidden='true'
        >
          {this.label}
        </label>
        <div class='toggle__checkbox-wrapper'>
          <input
            class='toggle__checkbox'
            id={`toggle-${this._guid}`}
            type='checkbox'
            name={this.name}
            disabled={this.disabled}
            checked={this.checked}
            aria-labelledby={`toggle-${this._guid}__label`}
          />
          <span class='toggle__checkbox-styled'>
          </span>
          <span
            class='toggle__checkbox-tick'
            innerHTML={tickIcon}
          />
        </div>
      </div>
    );
  }
}
