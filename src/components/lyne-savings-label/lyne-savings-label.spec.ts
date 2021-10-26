import { LyneSavingsLabel } from './lyne-savings-label';
import { newSpecPage } from '@stencil/core/testing';

describe('lyne-savings-label', () => {
  it('renders', async () => {
    const {
      root
    } = await newSpecPage({
      components: [LyneSavingsLabel],
      html: '<lyne-savings-label />'
    });

    expect(root)
      .toEqualHtml(`
        <lyne-savings-label>
          <mock:shadow-root>
            <button class="some-class"></button>
          </mock:shadow-root>
        </lyne-savings-label>
      `);
  });

});
