import {
  Component,
  h,
  Prop
} from '@stencil/core';

import getDocumentLang from '../../global/helpers/get-document-lang';
import { InterfaceLyneTimetableTransportationTimeAttributes } from './lyne-timetable-transportation-time.custom.d';

import {
  i18nApproximately,
  i18nApproximatelyDelayedBy,
  i18nArrival,
  i18nDeparture
} from '../../global/i18n';

@Component({
  shadow: true,
  styleUrls: {
    default: 'styles/lyne-timetable-transportation-time.default.scss',
    shared: 'styles/lyne-timetable-transportation-time.shared.scss'
  },
  tag: 'lyne-timetable-transportation-time'
})

export class LyneTimetableTransportationTime {

  private _currentLanguage = getDocumentLang();

  /**
   * Set the desired appearance of
   * the component.
   */
  @Prop() public appearance?: InterfaceLyneTimetableTransportationTimeAttributes['appearance'] = 'first-level';

  /**
   * Stringified JSON which defines most of the
   * content of the component. Please check the
   * individual stories to get an idea of the
   * structure.
   */
  @Prop() public config!: string;

  public render(): JSX.Element {
    const config = JSON.parse(this.config);
    const delay = config.delay;

    let delayedClass = '';

    let a11yLabel = `${i18nArrival[this._currentLanguage]} ${config.time}.`;

    if (config.type === 'departure') {
      a11yLabel = `${i18nDeparture[this._currentLanguage]} ${config.time}.`;
    }

    if (delay > 0) {
      let additionalA11yLabelText = ` ${i18nApproximatelyDelayedBy.multiple[this._currentLanguage]}`;

      if (delay === 1) {
        additionalA11yLabelText = ` ${i18nApproximatelyDelayedBy.single[this._currentLanguage]}`;
      }

      delayedClass = ` time--delayed`;

      a11yLabel += additionalA11yLabelText.replace(/({mins})/, delay);
    }

    const appearanceClasses = ` time--${this.appearance} time--${config.type}${delayedClass}`;

    return (
      <p
        aria-label={a11yLabel}
        class={`time${appearanceClasses}`}
        role='text'
      >
        <span
          aria-hidden='true'
          class='time__text'
          role='presentation'
        >
          {config.time}
        </span>
        {
          delay > 0
            ? <span
                aria-hidden='true'
                class='time__delay'
                role='presentation'
            >
               {i18nApproximately.short[this._currentLanguage]} {config.delay}’
            </span>
            : ''
        }
        <span class='time__text--visually-hidden'>
          {a11yLabel}
        </span>
      </p>
    );
  }
}
