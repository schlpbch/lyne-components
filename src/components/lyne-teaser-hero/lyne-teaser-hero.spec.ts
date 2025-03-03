import images from '../../global/images';
import { LyneTeaserHero } from './lyne-teaser-hero';
import { newSpecPage } from '@stencil/core/testing';

describe('lyne-teaser-hero', () => {
  it('renders', async () => {
    const {
      root
    } = await newSpecPage({
      components: [LyneTeaserHero],
      html: `<lyne-teaser-hero button-text="Button text" image-loading="eager" image-src="${images[0]}" text="Panel text" link="https://www.sbb.ch" new-window-info-text="Link öffnet in neuem Fenster." open-in-new-window="true"></lyne-teaser-hero>`
    });

    expect(root)
      .toEqualHtml(`
      <lyne-teaser-hero button-text="Button text" image-loading="eager" image-src="${images[0]}" link="https://www.sbb.ch" new-window-info-text="Link öffnet in neuem Fenster." open-in-new-window="true" text="Panel text">
          <mock:shadow-root>
            <a class="teaser-hero" href="https://www.sbb.ch" rel="external noopener nofollow" target="_blank">
              <lyne-image class="teaser-hero__image" customfocalpoint="" hidefromscreenreader="" imagesrc="${images[0]}" loading="eager" lqip="" performancemark="teaser-hero" picturesizesconfig="{&quot;breakpoints&quot;:[{&quot;image&quot;:{&quot;height&quot;:2579,&quot;width&quot;:2579},&quot;mediaQueries&quot;:[{&quot;conditionFeature&quot;:&quot;min-width&quot;,&quot;conditionFeatureValue&quot;:{&quot;lyneDesignToken&quot;:true,&quot;value&quot;:&quot;breakpoint-ultra-min&quot;},&quot;conditionOperator&quot;:false}]},{&quot;image&quot;:{&quot;height&quot;:1439,&quot;width&quot;:1439},&quot;mediaQueries&quot;:[{&quot;conditionFeature&quot;:&quot;max-width&quot;,&quot;conditionFeatureValue&quot;:{&quot;lyneDesignToken&quot;:true,&quot;value&quot;:&quot;breakpoint-wide-max&quot;},&quot;conditionOperator&quot;:false}]},{&quot;image&quot;:{&quot;height&quot;:599,&quot;width&quot;:599},&quot;mediaQueries&quot;:[{&quot;conditionFeature&quot;:&quot;max-width&quot;,&quot;conditionFeatureValue&quot;:{&quot;lyneDesignToken&quot;:true,&quot;value&quot;:&quot;breakpoint-micro-max&quot;},&quot;conditionOperator&quot;:false}]}]}" variant="teaser-hero"></lyne-image>
              <lyne-panel buttontext="Button text" class="teaser-hero__panel" text="Panel text"></lyne-panel>
              <span class="teaser-hero__link-info-text">
                Link öffnet in neuem Fenster.
              </span>
            </a>
          </mock:shadow-root>
        </lyne-teaser-hero>
      `);
  });

});
