import { LyneDatepicker } from './lyne-datepicker';
import { newSpecPage } from '@stencil/core/testing';

describe('lyne-datepicker', () => {
  it('renders', async () => {
    const {
      root
    } = await newSpecPage({
      components: [LyneDatepicker],
      html: '<lyne-datepicker />'
    });

    expect(root)
      .toEqualHtml(`
        <lyne-datepicker>
          <mock:shadow-root>
            <button class="some-class"></button>
          </mock:shadow-root>
        </lyne-datepicker>
      `);
  });

});
