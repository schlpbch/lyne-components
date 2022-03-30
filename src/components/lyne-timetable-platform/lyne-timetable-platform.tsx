import {
  Component,
  h,
  Prop
} from '@stencil/core';

import getDocumentLang from '../../global/helpers/get-document-lang';
import {
  i18nPlatform,
  i18nPlatformArrivingOn,
  i18nPlatformChange,
  i18nPlatformLeavingFrom,
  i18nStand
} from '../../global/i18n';
import { InterfaceLyneTimetablePlatformAttributes } from './lyne-timetable-platform.custom.d';

@Component({
  shadow: true,
  styleUrls: {
    default: 'styles/lyne-timetable-platform.default.scss',
    shared: 'styles/lyne-timetable-platform.shared.scss'
  },
  tag: 'lyne-timetable-platform'
})

export class LyneTimetablePlatform {

  private _currentLanguage = getDocumentLang();

  /**
   * Set the desired appearance of
   * the component.
   */
  @Prop() public appearance?: InterfaceLyneTimetablePlatformAttributes['appearance'] = 'first-level';

  /**
   * Stringified JSON which defines most of the
   * content of the component. Please check the
   * individual stories to get an idea of the
   * structure.
   */
  @Prop() public config!: string;

  public render(): JSX.Element {

    const config = JSON.parse(this.config);

    let text;
    let a11yLabel = '';
    let abbrTitle;
    let platformNumber = config.value.planned;

    if (config.type === 'platform') {
      text = `${i18nPlatform.short[this._currentLanguage]} `;
      abbrTitle = `${i18nPlatform.long[this._currentLanguage]} `;
    } else {
      text = `${i18nStand.short[this._currentLanguage]} `;
      abbrTitle = `${i18nStand.long[this._currentLanguage]} `;
    }

    let appearanceClasses = ` platform--${this.appearance}`;

    if (config.changed) {
      appearanceClasses += ` platform--${this.appearance}--changed`;
      platformNumber = `${config.value.actual}`;
    }

    if (this.appearance === 'second-level-arrival') {
      a11yLabel += `${i18nPlatformArrivingOn[this._currentLanguage]} ${platformNumber} (${i18nPlatformChange[this._currentLanguage]}).`;
    } else {
      a11yLabel += `${i18nPlatformLeavingFrom[this._currentLanguage]} ${platformNumber} (${i18nPlatformChange[this._currentLanguage]}).`;
    }

    return (
      <p
        aria-label={a11yLabel}
        class={`platform${appearanceClasses}`}
        role='text'
      >
        <span
          aria-hidden='true'
          class='platform__text'
          role='presentation'
        >
          <abbr title={abbrTitle}>{text}</abbr>
          {platformNumber}
        </span>
        <span class='platform__text--visually-hidden'>
          {a11yLabel}
        </span>
      </p>
    );
  }
}
