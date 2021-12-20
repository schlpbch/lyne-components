import { LyneDatepickerDays } from './lyne-datepicker-days';
import { newSpecPage } from '@stencil/core/testing';

describe('lyne-datepicker-days', () => {
  it('renders', async () => {
    const {
      root
    } = await newSpecPage({
      components: [LyneDatepickerDays],
      html: '<lyne-datepicker-days />'
    });

    expect(root)
      .toEqualHtml(`
        <lyne-datepicker-days>
          <mock:shadow-root>
            <button class="some-class"></button>
          </mock:shadow-root>
        </lyne-datepicker-days>
      `);
  });

});
