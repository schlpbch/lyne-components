import { LyneTeaserItem } from './lyne-teaser-item';
import { newSpecPage } from '@stencil/core/testing';

describe('lyne-teaser-item', () => {
  it('renders', async () => {
    const {
      root
    } = await newSpecPage({
      components: [LyneTeaserItem],
      html: '<lyne-teaser-item image-loading="lazy" image-src="https://cdn.img.sbb.ch/content/dam/internet/lyne/Billetkontrolle.jpg" href-value="https://www.sbb.ch" text="Discover now the novelties of the classic clock with a timeless design. Available in our SBB Shop" title-text="The SBB station clock by Mondaine" personalised />'
    });

    expect(root)
      .toEqualHtml(`
        <lyne-teaser-item href-value="https://www.sbb.ch" image-loading="lazy" image-src="https://cdn.img.sbb.ch/content/dam/internet/lyne/Billetkontrolle.jpg" personalised="" text="Discover now the novelties of the classic clock with a timeless design. Available in our SBB Shop" title-text="The SBB station clock by Mondaine">
          <mock:shadow-root>
            <li class="teaser-item teaser-item--personalised">
              <a class="teaser-item__link" href="https://www.sbb.ch" rel="external noopener nofollow" target="_blank">
                <div class="teaser-item__container-image">
                  <lyne-image class="teaser-item__image" customfocalpoint="" height="300" hidefromscreenreader="" imagesrc="https://cdn.img.sbb.ch/content/dam/internet/lyne/Billetkontrolle.jpg" loading="lazy" lqip="" performancemark="teaser-item" picturesizesconfig="{&quot;breakpoints&quot;:[{&quot;image&quot;:{&quot;height&quot;:&quot;196&quot;,&quot;width&quot;:&quot;262&quot;},&quot;mediaQueries&quot;:[{&quot;conditionFeature&quot;:&quot;min-width&quot;,&quot;conditionFeatureValue&quot;:{&quot;lyneDesignToken&quot;:true,&quot;value&quot;:&quot;breakpoint-wide-min&quot;},&quot;conditionOperator&quot;:false}]},{&quot;image&quot;:{&quot;height&quot;:&quot;150&quot;,&quot;width&quot;:&quot;200&quot;},&quot;mediaQueries&quot;:[{&quot;conditionFeature&quot;:&quot;min-width&quot;,&quot;conditionFeatureValue&quot;:{&quot;lyneDesignToken&quot;:true,&quot;value&quot;:&quot;breakpoint-medium-min&quot;},&quot;conditionOperator&quot;:false}]},{&quot;image&quot;:{&quot;height&quot;:&quot;180&quot;,&quot;width&quot;:&quot;240&quot;},&quot;mediaQueries&quot;:[{&quot;conditionFeature&quot;:&quot;min-width&quot;,&quot;conditionFeatureValue&quot;:{&quot;lyneDesignToken&quot;:true,&quot;value&quot;:&quot;breakpoint-small-min&quot;},&quot;conditionOperator&quot;:false}]},{&quot;image&quot;:{&quot;height&quot;:&quot;116&quot;,&quot;width&quot;:&quot;155&quot;},&quot;mediaQueries&quot;:[{&quot;conditionFeature&quot;:&quot;min-width&quot;,&quot;conditionFeatureValue&quot;:{&quot;lyneDesignToken&quot;:true,&quot;value&quot;:&quot;breakpoint-zero-min&quot;},&quot;conditionOperator&quot;:false}]}]}" variant="teaser-item" width="400"></lyne-image>
                </div>
                <p aria-label="The SBB station clock by Mondaine. Discover now the novelties of the classic clock with a timeless design. Available in our SBB Shop. Link target opens in new window." class="teaser-item__aria-label" role="text">
                  <span class="teaser-item__text">
                    <lyne-title level="5" text="The SBB station clock by Mondaine" visual-level="5"></lyne-title>
                    <span class="teaser-item__paragraph">
                      Discover now the novelties of the classic clock with a timeless design. Available in our SBB Shop
                    </span>
                  </span>
                </p>
              </a>
            </li>
          </mock:shadow-root>
        </lyne-teaser-item>
      `);
  });

});
