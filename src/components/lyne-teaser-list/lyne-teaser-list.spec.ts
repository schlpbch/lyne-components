import { LyneTeaserList } from './lyne-teaser-list';
import { newSpecPage } from '@stencil/core/testing';

describe('lyne-teaser-list', () => {
  it('renders', async () => {
    const {
      root
    } = await newSpecPage({
      components: [LyneTeaserList],
      html: '<lyne-teaser-list />'
    });

    expect(root)
      .toEqualHtml(`
        <lyne-teaser-list>
          <mock:shadow-root>
            <ul
                class="teaser-list teaser-list--non-personalised"
                role="list"
            >
                <slot name="teaser-list__item"></slot>
            </ul>
          </mock:shadow-root>
        </lyne-teaser-list>
      `);
  });

});
