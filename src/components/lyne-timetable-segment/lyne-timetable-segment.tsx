import {
  Component,
  h,
  Prop
} from '@stencil/core';

@Component({
  shadow: true,
  styleUrls: {
    default: 'styles/lyne-timetable-segment.default.scss',
    shared: 'styles/lyne-timetable-segment.shared.scss'
  },
  tag: 'lyne-timetable-segment'
})

export class LyneTimetableSegment {
  /**
   * Stringified JSON which defines most of the
   * content of the component. Please check the
   * individual stories to get an idea of the
   * structure.
   */
  @Prop() public config!: string;

  public render(): JSX.Element {

    const config = JSON.parse(this.config);

    return (
      <p
        aria-label='Train xyz leaving from ...'
        class='segment'
        role='text'
      >
        <div
          aria-hidden='true'
          role='presentation'
        >
          <div class='segment__departure'>
            <lyne-timetable-transportation-time
              appearance='second-level'
              config={JSON.stringify(config.departureTime)}
            >
            </lyne-timetable-transportation-time>
            Zürich HB
            <lyne-timetable-platform
              appearance='second-level-departure'
              config={JSON.stringify(config.departurePlatform)}
            >
            </lyne-timetable-platform>
          </div>
          <div class='segment__transportation-details'>
            <lyne-timetable-transportation-number
              appearance='second-level'
              config={JSON.stringify(config.transportationNumber)}
            >
            </lyne-timetable-transportation-number>
            <lyne-timetable-travel-hints
              appearance='second-level-list'
              config={JSON.stringify(config.travelHints)}
            >
            </lyne-timetable-travel-hints>
          </div>
          <lyne-timetable-occupancy
            config={JSON.stringify(config.occupancy)}
          >
          </lyne-timetable-occupancy>
          <div class='segment__arrival'>
            <lyne-timetable-transportation-time
              appearance='second-level'
              config={JSON.stringify(config.arrivalTime)}
            >
            </lyne-timetable-transportation-time>
            Altstetten
            <lyne-timetable-platform
              appearance='second-level-arrival'
              config={JSON.stringify(config.arrivalPlatform)}
            >
            </lyne-timetable-platform>
          </div>
        </div>
      </p>
    );
  }
}
