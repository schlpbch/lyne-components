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
 * @slot firstOptionIconSlot - Slot for the first option icon
 * @slot secondOptionIconSlot - Slot for the second option icon
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

  /** Decides whether icon should be shown or not */
  @Prop() public showIcons: boolean;

  /** Decides which option should be initially checked. */
  @Prop() public checkedToggle!: string;

  /** Label text for the radio group (visually hidden). */
  @Prop() public label? = 'Radio Group Label';

  /** Id which is sent in the click event payload */
  @Prop() public eventId?: string;

  /** The name attribute to use with the radio group elements */
  @Prop() public name?: string;

  /** The label for the first radio option */
  @Prop() public firstOptionLabel!: string;

  /** The label for the second radio option */
  @Prop() public secondOptionLabel!: string;

  /**
   * The icon name for the first radio option,
   * choose from the small icon variants from
   * the ui-icons category from here
   * https://lyne.sbb.ch/tokens/icons/
   */
  @Prop() public firstOptionIcon?: string;

  /**
   * The icon name for the second radio option,
   * choose from the small icon variants from
   * the ui-icons category from here
   * https://lyne.sbb.ch/tokens/icons/
   */
  @Prop() public secondOptionIcon?: string;

  /** The value for the first radio option */
  @Prop() public firstOptionValue!: string;

  /** The value for the second radio option */
  @Prop() public secondOptionValue!: string;

  /** Define if icons should be shown or not */
  @Prop() public icon? = false;

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
              aria-labelledby={`toggle-${this._guid}-option-1__label toggle-${this._guid}__radios_label`}
              checked={this.checkedToggle === 'first'}
              class='toggle__radio'
              disabled={this.disabled}
              id={`toggle-${this._guid}-radio-1`}
              name={this.name}
              type='radio'
              value={this.firstOptionValue}
            />
            <label
              aria-hidden='true'
              class='toggle__radio-label'
              htmlFor={`toggle-${this._guid}-radio-1`}
              id={`toggle-${this._guid}-option-1__label`}
            >
              {this.showIcons
                ? <span class='toggle__radio-label-icon'><slot name='firstOptionIconSlot'/></span>
                : ''
              }
              <span
                class='toggle__radio-label-text'
                data-label={this.firstOptionLabel}
              >
                <span>{this.firstOptionLabel}</span>
              </span>
            </label>
          </div>
          <div class='toggle__radio-wrapper'>
            <input
              aria-labelledby={`toggle-${this._guid}-option-2__label toggle-${this._guid}__radios_label`}
              checked={this.checkedToggle === 'second'}
              class='toggle__radio'
              disabled={this.disabled}
              id={`toggle-${this._guid}-radio-2`}
              name={this.name}
              type='radio'
              value={this.secondOptionValue}
            />
            <label
              aria-hidden='true'
              class='toggle__radio-label'
              htmlFor={`toggle-${this._guid}-radio-2`}
              id={`toggle-${this._guid}-option-2__label`}
            >
              {this.showIcons
                ? <span class='toggle__radio-label-icon'><slot name='secondOptionIconSlot' /></span>
                : ''
              }
              <span
                class='toggle__radio-label-text'
                data-label={this.secondOptionLabel}
              >
                <span>{this.secondOptionLabel}</span>
              </span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}
