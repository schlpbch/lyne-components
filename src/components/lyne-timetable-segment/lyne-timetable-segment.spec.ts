jest.mock('../../global/guid');

import { LyneTimetableSegment } from './lyne-timetable-segment';
import { newSpecPage } from '@stencil/core/testing';
import sampleData from './lyne-timetable-segment.sample-data';

const config = JSON.stringify(sampleData[0]);

describe('lyne-timetable-segment', () => {
  it('renders', async () => {
    const {
      root
    } = await newSpecPage({
      components: [LyneTimetableSegment],
      html: `<lyne-timetable-segment config='${config}'/>`
    });

    expect(root)
      .toEqualHtml(`
        <lyne-timetable-segment
            config="{&quot;arrivalPlatform&quot;:{&quot;type&quot;:&quot;platform&quot;,&quot;value&quot;:&quot;5&quot;},&quot;arrivalStation&quot;:&quot;St. Gallen, Mühlegg Talstation&quot;,&quot;arrivalTime&quot;:{&quot;delay&quot;:0,&quot;time&quot;:&quot;15:34&quot;,&quot;type&quot;:&quot;arrival&quot;},&quot;departurePlatform&quot;:{&quot;type&quot;:&quot;platform&quot;,&quot;value&quot;:&quot;13A/C&quot;},&quot;departureStation&quot;:&quot;La Chaux-de-Fonds&quot;,&quot;departureTime&quot;:{&quot;delay&quot;:0,&quot;time&quot;:&quot;15:14&quot;,&quot;type&quot;:&quot;departure&quot;},&quot;occupancy&quot;:{&quot;occupancyItems&quot;:[{&quot;class&quot;:&quot;1&quot;,&quot;icon&quot;:&quot;utilization-low&quot;,&quot;occupancy&quot;:&quot;low&quot;},{&quot;class&quot;:&quot;2&quot;,&quot;icon&quot;:&quot;utilization-high&quot;,&quot;occupancy&quot;:&quot;high&quot;}]},&quot;pearlChain&quot;:{&quot;legs&quot;:{&quot;legs&quot;:[{&quot;cancellation&quot;:false,&quot;duration&quot;:100,&quot;skipped&quot;:false}]},&quot;openEnd&quot;:true,&quot;status&quot;:&quot;future&quot;},&quot;transportationNumber&quot;:{&quot;direction&quot;:&quot;Direction Romanshorn&quot;,&quot;marketingName&quot;:&quot;&quot;,&quot;meansOfTransport&quot;:{&quot;picto&quot;:&quot;transportation-zug-right&quot;,&quot;text&quot;:&quot;Train&quot;},&quot;product&quot;:{&quot;icon&quot;:&quot;ic-8&quot;,&quot;text&quot;:&quot;IC 8&quot;}},&quot;travelHints&quot;:{&quot;travelHintsItems&quot;:[{&quot;icon&quot;:&quot;sa-sb&quot;,&quot;text&quot;:&quot;Description what sa-sb means...&quot;},{&quot;icon&quot;:&quot;sa-rr&quot;,&quot;text&quot;:&quot;Description what sa-rr means...&quot;},{&quot;icon&quot;:&quot;sa-zm&quot;,&quot;text&quot;:&quot;Description what sa-zm means...&quot;}]}}"
        >
        <mock:shadow-root>
          <section
            aria-label="Train IC 8 Direction Romanshorn . Departure: La Chaux-de-Fonds 15:14 from platform 13A/C. Arrival: St. Gallen, Mühlegg Talstation 15:34 Arrival on platform 5. First Class. Low to medium occupancy expected. Second Class. Very high occupancy expected. Description what sa-sb means... Description what sa-rr means... Description what sa-zm means... "
            class="segment"
            role="text"
          >
            <div aria-hidden="true" class="cols" role="presentation">
              <div class="col col--times">
                <lyne-timetable-transportation-time appearance="second-level" config="{&quot;delay&quot;:0,&quot;time&quot;:&quot;15:14&quot;,&quot;type&quot;:&quot;departure&quot;}"></lyne-timetable-transportation-time>
                <div class="segment__cus-him-information"></div>
                <lyne-timetable-transportation-time appearance="second-level" config="{&quot;delay&quot;:0,&quot;time&quot;:&quot;15:34&quot;,&quot;type&quot;:&quot;arrival&quot;}"></lyne-timetable-transportation-time>
              </div>
              <div class="col col--pearlchain">
                <lyne-pearl-chain appearance="vertical" legs="{&quot;legs&quot;:[{&quot;cancellation&quot;:false,&quot;duration&quot;:100,&quot;skipped&quot;:false}]}" open-end="" status="future"></lyne-pearl-chain>
              </div>
              <div class="col col--details">
                <div class="segment__transportation-details">
                  <p class="departing-from">
                    La Chaux-de-Fonds
                  </p>
                  <div class="inner">
                    <lyne-timetable-transportation-number appearance="second-level" config="{&quot;direction&quot;:&quot;Direction Romanshorn&quot;,&quot;marketingName&quot;:&quot;&quot;,&quot;meansOfTransport&quot;:{&quot;picto&quot;:&quot;transportation-zug-right&quot;,&quot;text&quot;:&quot;Train&quot;},&quot;product&quot;:{&quot;icon&quot;:&quot;ic-8&quot;,&quot;text&quot;:&quot;IC 8&quot;}}"></lyne-timetable-transportation-number>
                    <lyne-timetable-travel-hints appearance="second-level-list" config="{&quot;travelHintsItems&quot;:[{&quot;icon&quot;:&quot;sa-sb&quot;,&quot;text&quot;:&quot;Description what sa-sb means...&quot;},{&quot;icon&quot;:&quot;sa-rr&quot;,&quot;text&quot;:&quot;Description what sa-rr means...&quot;},{&quot;icon&quot;:&quot;sa-zm&quot;,&quot;text&quot;:&quot;Description what sa-zm means...&quot;}]}"></lyne-timetable-travel-hints>
                    <lyne-timetable-occupancy config="{&quot;occupancyItems&quot;:[{&quot;class&quot;:&quot;1&quot;,&quot;icon&quot;:&quot;utilization-low&quot;,&quot;occupancy&quot;:&quot;low&quot;},{&quot;class&quot;:&quot;2&quot;,&quot;icon&quot;:&quot;utilization-high&quot;,&quot;occupancy&quot;:&quot;high&quot;}]}"></lyne-timetable-occupancy>
                  </div>
                  <p class="arriving-at">
                    St. Gallen, Mühlegg Talstation
                  </p>
                </div>
              </div>
              <div class="col col--platforms">
                <lyne-timetable-platform appearance="second-level-departure" config="{&quot;type&quot;:&quot;platform&quot;,&quot;value&quot;:&quot;13A/C&quot;}"></lyne-timetable-platform>
                <lyne-timetable-platform appearance="second-level-arrival" config="{&quot;type&quot;:&quot;platform&quot;,&quot;value&quot;:&quot;5&quot;}"></lyne-timetable-platform>
              </div>
            </div>
          </section>
        </mock:shadow-root>
        </lyne-timetable-segment>
      `);
  });

});
