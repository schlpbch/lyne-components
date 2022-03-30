import { LyneTimetablePlatform } from './lyne-timetable-platform';
import { newSpecPage } from '@stencil/core/testing';
import sampleData from './lyne-timetable-platform.sample-data';

const config = JSON.stringify(sampleData[0]);

describe('lyne-timetable-platform', () => {
  it('renders', async () => {
    const {
      root
    } = await newSpecPage({
      components: [LyneTimetablePlatform],
      html: `<lyne-timetable-platform config='${config}'/>`
    });

    expect(root)
      .toEqualHtml(`
        <lyne-timetable-platform
            config="{&quot;changed&quot;:false,&quot;type&quot;:&quot;platform&quot;,&quot;value&quot;:{&quot;actual&quot;:&quot;13A/C&quot;,&quot;planned&quot;:&quot;13A/C&quot;}}"
        >
          <mock:shadow-root>
            <p
                aria-label="from platform 13A/C (change of platform)."
                class="platform platform--first-level"
                role="text"
            >
                <span
                    aria-hidden="true"
                    class="platform__text"
                    role="presentation"
                >
                    <abbr title="Platform ">
                        Pl.
                    </abbr>
                    13A/C
                </span>
                <span class="platform__text--visually-hidden">
                    from platform 13A/C (change of platform).
                </span>
            </p>
          </mock:shadow-root>
        </lyne-timetable-platform>
      `);
  });

});
