import {
  Component,
  h,
  Prop
} from '@stencil/core';
import { InterfacePearlChainAttributes } from './lyne-pearl-chain.custom.d';
import legsData from './lyne-pearl-chain.helper';

@Component({
  shadow: true,
  styleUrls: {
    default: 'styles/lyne-pearl-chain.default.scss',
    shared: 'styles/lyne-pearl-chain.shared.scss'
  },
  tag: 'lyne-pearl-chain'
})

export class LynePearlChain {

  /**
   * Set the desired orientation of
   * the pearl chain.
   */
  @Prop() public orientation?: InterfacePearlChainAttributes['orientation'] = 'horizontal';

  /**
   * Set the desired appearance of
   * the component.
   */
  @Prop() public appearance?: InterfacePearlChainAttributes['appearance'] = 'level-1';

  /**
   * Define, if the pearl-chain represents a connection in the past,
   * in the future or if it is a currently running connection.
   * If it is currently running, provide a number between 0 and 100,
   * which will represent the current location on the pearl-chain.
   */
  @Prop() public status?: InterfacePearlChainAttributes['status'];

  /**
   * Stringified JSON to define the legs of the pearl-chain.
   * Format:
   * `{"legs": [{"cancellation": true, "duration": 25}, ...]}`
   * `duration`: number between 0 and 100. Duration of the leg is relative
   * to the total travel time. Example: departure 16:30, change at 16:40,
   * arrival at 17:00. So the change should have a duration of 33.33%.
   * `cancellation`: if set, the leg will be marked as canceled.
   */

  @Prop() public legs!: string;

  /**
   * If set to true, we will not show a closing
   * dot at the end of the line
   */
  @Prop() public openEnd?: boolean;

  /**
   * Per default, the current location has a pulsating animation. You can
   * disable the animation with this property.
   */
  @Prop() public disableAnimation?: boolean;

  public render(): JSX.Element {
    const legs = legsData(this.legs);

    const statusClass = this.status === 'past'
      ? ' pearl-chain--past'
      : '';

    const appearanceClass = ` pearl-chain--${this.appearance}`;

    const orientationClass = ` pearl-chain--${this.orientation}`;

    let departureCancelClass = '';
    let arrivalCancelClass = '';
    let openEndClass = '';

    if (legs.length > 0) {
      departureCancelClass = legs[0].cancellation
        ? ' pearl-chain--departure-cancellation'
        : '';

      if (legs.length > 1) {
        arrivalCancelClass = legs[legs.length - 1].cancellation
          ? ' pearl-chain--arrival-cancellation'
          : '';
      }

      if (legs.length === 1) {
        arrivalCancelClass = legs[0].cancellation
          ? ' pearl-chain--arrival-cancellation'
          : '';
      }
    }

    if (this.openEnd) {
      openEndClass = ' pearl-chain--open-end';
    }

    const classes = `pearl-chain${statusClass}${departureCancelClass}${arrivalCancelClass}${openEndClass}${appearanceClass}${orientationClass}`;
    const statusIsRunning = this.status && this.status !== 'past' && this.status !== 'future';

    if (statusIsRunning) {
      if (this.status > 100) {
        this.status = 100;
      } else if (this.status < 0) {
        this.status = 0;
      }
    }

    const statusStyle = statusIsRunning
      ? {
        '--status-position': `${this.status}`
      }
      : {};

    const animationClass = this.disableAnimation
      ? ' pearl-chain__status--no-animation'
      : '';

    return (
      <div class={classes}>
        {/* render legs */}
        {legs.map((leg) => {
          const legStyle = {
            'flex-basis': `${leg.duration}%`
          };

          const legCancelClass = leg.cancellation
            ? ' pearl-chain__leg--cancellation'
            : '';

          const legSkippedClass = leg.skipped
            ? ' pearl-chain__leg--skipped'
            : '';

          return (
            <div
              class={`pearl-chain__leg${legCancelClass}${legSkippedClass}`}
              style={legStyle}
            >
              {
                leg.skipped
                  ? (
                    <div class='pearl-chain__leg-dash'></div>
                  )
                  : ''
              }
            </div>
          );
        })}

        {/* render current location point */}
        {statusIsRunning
          ? (
            <span
              style={statusStyle}
              class={`pearl-chain__status${animationClass}`}
            ></span>
          )
          : ''
        }
      </div>
    );
  }
}
