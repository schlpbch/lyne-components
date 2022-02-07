import {
  Component, h, Prop
} from '@stencil/core';
import getDocumentLang from '../../global/helpers/get-document-lang';
import { InterfaceImageAttributes } from '../lyne-image/lyne-image.custom.d';
import { InterfaceTitleAttributes } from '../lyne-title/lyne-title.custom.d';
import { i18nTargetOpensInNewWindow } from '../../global/i18n';

@Component({
  shadow: true,
  styleUrls: {
    default: 'styles/lyne-teaser-item.default.scss',
    shared: 'styles/lyne-teaser-item.shared.scss'
  },
  tag: 'lyne-teaser-item'
})

export class LyneTeaserItem {

  private _nonPersonalisedPictureSizesConfig = {
    breakpoints: [
      {
        image: {
          height: '72',
          width: '96'
        },
        mediaQueries: [
          {
            conditionFeature: 'min-width',
            conditionFeatureValue: {
              lyneDesignToken: true,
              value: 'breakpoint-medium-min'
            },
            conditionOperator: false
          }
        ]
      },
      {
        image: {
          height: '60',
          width: '80'
        },
        mediaQueries: [
          {
            conditionFeature: 'min-width',
            conditionFeatureValue: {
              lyneDesignToken: true,
              value: 'breakpoint-zero-min'
            },
            conditionOperator: false
          }
        ]
      }
    ]
  };

  private _personalisedPictureSizesConfig = {
    breakpoints: [
      {
        image: {
          height: '196',
          width: '262'
        },
        mediaQueries: [
          {
            conditionFeature: 'min-width',
            conditionFeatureValue: {
              lyneDesignToken: true,
              value: 'breakpoint-wide-min'
            },
            conditionOperator: false
          }
        ]
      },
      {
        image: {
          height: '150',
          width: '200'
        },
        mediaQueries: [
          {
            conditionFeature: 'min-width',
            conditionFeatureValue: {
              lyneDesignToken: true,
              value: 'breakpoint-medium-min'
            },
            conditionOperator: false
          }
        ]
      },
      {
        image: {
          height: '180',
          width: '240'
        },
        mediaQueries: [
          {
            conditionFeature: 'min-width',
            conditionFeatureValue: {
              lyneDesignToken: true,
              value: 'breakpoint-small-min'
            },
            conditionOperator: false
          }
        ]
      },
      {
        image: {
          height: '116',
          width: '155'
        },
        mediaQueries: [
          {
            conditionFeature: 'min-width',
            conditionFeatureValue: {
              lyneDesignToken: true,
              value: 'breakpoint-zero-min'
            },
            conditionOperator: false
          }
        ]
      }
    ]
  };

  /**
   * Text property for lyne-panel. See lyne-panel for additional info
   */
  @Prop() public text!: string;

  /**
   * Headline property
   */
  @Prop() public titleText!: string;

  /**
   * Image source property for lyne-image. See lyne-image for additional info
   */
  @Prop() public imageSrc!: string;

  /**
   * Image loading property. See lyne-image for additional info
   */
  @Prop() public imageLoading?: InterfaceImageAttributes['loading'] = 'lazy';

  /** The href value you want to link to */
  @Prop() public hrefValue!: string;

  /**
   * The semantic level of the title,
   * e.g. 3 = h3
   */
  @Prop() public titleLevel?: InterfaceTitleAttributes['level'] = '5';

  /**
   * is teaser item personalised
   */
  @Prop() public personalised?: boolean;

  public render(): JSX.Element {

    const currentLanguage = getDocumentLang();

    let openInNewWindow = false;

    if (!window.location.href.includes(this.hrefValue)) {
      openInNewWindow = true;
    }

    const appearanceClass = this.personalised
      ? 'teaser-item--personalised'
      : 'teaser-item--non-personalised';

    /**
     * Add additional attributes
     * ----------------------------------------------------------------
     */
    let addtitionalLinkAttributes = {};
    let ariaLabel = `${this.titleText}. ${this.text}`;

    if (openInNewWindow) {
      addtitionalLinkAttributes = {
        rel: 'external noopener nofollow',
        target: '_blank'
      };
      ariaLabel += `. ${i18nTargetOpensInNewWindow[currentLanguage]}`;
    }

    return (
      <li class={`teaser-item ${appearanceClass}`}>
        <a
          class='teaser-item__link'
          href={this.hrefValue}
          {...addtitionalLinkAttributes}
        >
          <div class='teaser-item__container-image'>
            <lyne-image
              class='teaser-item__image'
              pictureSizesConfig={JSON.stringify(this.personalised
                ? this._personalisedPictureSizesConfig
                : this._nonPersonalisedPictureSizesConfig)}
              customFocalPoint={true}
              height='300'
              hideFromScreenreader={true}
              imageSrc={this.imageSrc}
              loading={this.imageLoading}
              lqip
              variant='teaser-item'
              width='400'
              performanceMark='teaser-item'
            />
          </div>
          <p
            class='teaser-item__aria-label'
            aria-label={ariaLabel}
            role='text'
          >
            <span class='teaser-item__text'>
              {
                this.titleText
                  ? <lyne-title
                    level={this.titleLevel}
                    text={this.titleText}
                    visual-level='5'
                  />
                  : ''
              }
              <span class='teaser-item__paragraph'>
                {this.text}
              </span>
            </span>
          </p>
        </a>
      </li>
    );
  }
}
