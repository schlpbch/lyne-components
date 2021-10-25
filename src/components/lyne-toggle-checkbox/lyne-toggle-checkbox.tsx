import {
  Component,
  h,
  Prop,
  State,
  Watch
} from '@stencil/core';
// import events from './lyne-toggle-checkbox.events';
import { guid } from '../../global/guid';
import tickIcon from 'lyne-icons/dist/icons/tick-small.svg';

/**
 * @slot unnamed - Slot to render svg icon. You must pass an svg-element.
 */

@Component({
  shadow: true,
  styleUrls: {
    default: 'styles/lyne-toggle-checkbox.default.scss',
    shared: 'styles/lyne-toggle-checkbox.shared.scss'
  },
  tag: 'lyne-toggle-checkbox'
})

export class LyneToggle {

  private _guid: string;

  @State() private _disabledStateClass: string;

  @Prop({
    reflect: true
  }) public disabled?: boolean;

  @Watch('disabled')
  public watchStateHandler(): void {
    this._toggleDisabledStateClass();
  }

  /** Label text for the toggle checkbox */
  @Prop() public label? = 'Default button text';

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
          aria-hidden='true'
          class='toggle__label'
          id={`toggle-${this._guid}__label`}
          htmlFor={`toggle-${this._guid}`}
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
