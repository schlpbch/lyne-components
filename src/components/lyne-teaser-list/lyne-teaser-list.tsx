import {
  Component, h, Prop
} from '@stencil/core';

/**
 * @slot teaser-list__item - Use this to render the
 * teaser items with the links inside
 */

@Component({
  shadow: true,
  styleUrls: {
    default: 'styles/lyne-teaser-list.default.scss',
    shared: 'styles/lyne-teaser-list.shared.scss'
  },
  tag: 'lyne-teaser-list'
})

export class LyneTeaserList {

  /**
   * aria-labelledby should contain
   * the id of the title component
   * associated with the teaser list.
   */
  @Prop() public ariaLabelledBy?: string;

  /**
   * Property for lyne-panel. See lyne-panel for additional info
   */
  @Prop() public personalised: boolean;

  public render(): JSX.Element {

    let additionalAttributes = {};

    if (this.ariaLabelledBy) {
      additionalAttributes = {
        'aria-labelledby': this.ariaLabelledBy
      };
    }

    const appearanceClasses = this.personalised
      ? ' teaser-list--personalised'
      : ' teaser-list--non-personalised';

    return (
      <ul
        {...additionalAttributes}
        class={`teaser-list${appearanceClasses}`}
        role='list'
      >
        <slot name="teaser-list__item" />
      </ul>
    );
  }
}
