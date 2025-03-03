import {
  Component,
  Element,
  h,
  Prop
} from '@stencil/core';
import events from '../lyne-accordion-item/lyne-accordion-item.events';

/**
 * @slot unnamed - Place lyne-accordion-item elements in the slot
 */

@Component({
  shadow: true,
  styleUrls: {
    default: 'styles/lyne-accordion.default.scss',
    shared: 'styles/lyne-accordion.shared.scss'
  },
  tag: 'lyne-accordion'
})

export class LyneAccordion {

  /**
   * Set this if you want to use the accordion on a non-white background.
   */
  @Prop() public nonWhiteBackground?: boolean;

  /**
   * Set this if you want the accordion to always have open only one item.
   */
  @Prop() public onlyOneOpen? = false;

  /**
   * Use the aria-labelledby to reference to an id of a title outside of the
   * accordion. That way we can improve the context for the screenreader users.
   * When the first button in the accordion receives focus, the referenced
   * title is also spoken out by the screenreader.
   */
  @Prop() public ariaLabelledby? = '';

  @Element() private _element: HTMLElement;

  private _eventIds = [];
  private _items;

  private _setEventIds(): void {
    this._items = this._element.querySelectorAll('lyne-accordion-item');

    this._items.forEach((item, index) => {
      const eventId = item.getAttribute('event-id');
      let finalEventId;

      if (eventId) {
        finalEventId = eventId;
      } else {
        finalEventId = `accordion-item-id-${index}`;
        item.setAttribute('event-id', finalEventId);
      }

      this._eventIds.push(finalEventId);
    });
  }

  private _handleAccordionOpen(evt): void {
    const eventId = evt.detail;

    if (!eventId) {
      return;
    }

    this._items.forEach((item) => {
      const itemId = item.getAttribute('event-id');

      if (itemId !== eventId) {
        item.removeAttribute('open');
      }
    });

  }

  public componentWillLoad(): void {
    if (!this.onlyOneOpen) {
      return;
    }

    this._setEventIds();

    this._element.addEventListener(events.willOpen, this._handleAccordionOpen.bind(this));
  }

  public render(): JSX.Element {

    const nonWhite = this.nonWhiteBackground
      ? ' accordion--non-white'
      : '';

    const attrs = {
      class: `accordion${nonWhite}`
    };

    if (this.ariaLabelledby && this.ariaLabelledby !== '') {
      attrs['aria-Labelledby'] = this.ariaLabelledby;
    }

    return (
      <div {...attrs} role='list'>
        <slot />
      </div>
    );
  }
}
