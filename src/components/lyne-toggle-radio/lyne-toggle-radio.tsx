import {
  Component,
  h,
  Prop,
  State,
  Watch
} from '@stencil/core';
// import events from './lyne-toggle-radio.events';
import { guid } from '../../global/guid';

/**
 * @slot unnamed - Slot to render svg icon. You must pass an svg-element.
 */

@Component({
  shadow: true,
  styleUrls: {
    default: 'styles/lyne-toggle-radio.default.scss',
    shared: 'styles/lyne-toggle-radio.shared.scss'
  },
  tag: 'lyne-toggle-radio'
})

export class LyneToggleMulti {

  private _guid: string;

  @State() private _disabledStateClass: string;

  @Prop({
    reflect: true
  }) public disabled?: boolean;

  @Watch('disabled')
  public watchStateHandler(): void {
    this._toggleDisabledStateClass();
  }

  @Prop() public checkedToggle?: string;

  /** Label text for the radio group (visually hidden). */
  @Prop() public label? = 'Radio Group Label';

  /** Id which is sent in the click event payload */
  @Prop() public eventId?: string;

  /** The name attribute to use with the radio group elements */
  @Prop() public name?: string;

  /** The label for the first radio option */
  @Prop() public firstOptionLabel?: string;

  /** The label for the second radio option */
  @Prop() public secondOptionLabel?: string;

  /** The value for the first radio option */
  @Prop() public firstOptionValue?: string;

  /** The value for the second radio option */
  @Prop() public secondOptionValue?: string;

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

    return (

      <div class={`toggle${this._disabledStateClass}`}>
        <p
          class='toggle__radios_label'
          id={`toggle-${this._guid}__radios_label`}
        >
          {this.label}
        </p>
        <div class='toggle__radios-wrapper'>
          <div class='toggle__radio-wrapper'>
            <input
              checked={this.checkedToggle === 'first'}
              class='toggle__radio'
              disabled={this.disabled}
              name={this.name}
              type='radio'
              value={this.firstOptionValue}
              aria-labelledby={`toggle-${this._guid}-option-1__label toggle-${this._guid}__radios_label`}
            />
            <label
              id={`toggle-${this._guid}-option-1__label`}
              class='toggle__radio-label'
              data-label={this.firstOptionLabel}
              aria-hidden='true'
            >
              <span>{this.firstOptionLabel}</span>
            </label>
          </div>
          <div class='toggle__radio-wrapper'>
            <input
              checked={this.checkedToggle === 'second'}
              class='toggle__radio'
              disabled={this.disabled}
              name={this.name}
              type='radio'
              value={this.secondOptionValue}
              aria-labelledby={`toggle-${this._guid}-option-2-label toggle-${this._guid}__radios_label`}
            />
            <label
              id={`toggle-${this._guid}-option-2__label`}
              class='toggle__radio-label'
              data-label={this.secondOptionLabel}
              aria-hidden='true'
            >
              <span>{this.secondOptionLabel}</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}
