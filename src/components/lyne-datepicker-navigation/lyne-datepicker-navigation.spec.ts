import { LyneDatepickerNavigation } from './lyne-datepicker-navigation';
import { newSpecPage } from '@stencil/core/testing';

describe('lyne-datepicker-navigation', () => {
  it('renders', async () => {
    const {
      root
    } = await newSpecPage({
      components: [LyneDatepickerNavigation],
      html: '<lyne-datepicker-navigation />'
    });

    expect(root)
      .toEqualHtml(`
        <lyne-datepicker-navigation>
          <mock:shadow-root>
            <button class="some-class"></button>
          </mock:shadow-root>
        </lyne-datepicker-navigation>
      `);
  });

});
