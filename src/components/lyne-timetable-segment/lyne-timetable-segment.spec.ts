import { LyneTimetableSegment } from './lyne-timetable-segment';
import { newSpecPage } from '@stencil/core/testing';

describe('lyne-timetable-segment', () => {
  it('renders', async () => {
    const {
      root
    } = await newSpecPage({
      components: [LyneTimetableSegment],
      html: '<lyne-timetable-segment />'
    });

    expect(root)
      .toEqualHtml(`
        <lyne-timetable-segment>
          <mock:shadow-root>
            <button class="some-class"></button>
          </mock:shadow-root>
        </lyne-timetable-segment>
      `);
  });

});
