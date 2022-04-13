import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  State
} from '@stencil/core';
import { InterfaceLyneTabGroupLabel } from './lyne-tab-group.custom';

/**
 * @slot unnamed - Use this to document a slot.
 */

@Component({
  shadow: true,
  styleUrls: {
    default: 'styles/lyne-tab-group.default.scss',
    shared: 'styles/lyne-tab-group.shared.scss'
  },
  tag: 'lyne-tab-group'
})

export class LyneTabGroup {

  @Element() private _element: HTMLElement;

  @Prop({
    mutable: true
  }) public selectedIndex = 0;

  @State() public labels: InterfaceLyneTabGroupLabel[];
  @State() public contents: Element[];

  @Event() public selectedTabChange: EventEmitter<void>;

  public render(): JSX.Element {
    return (
      <Host>
        <div class='tab-group'>
          <slot name='tab-bar'></slot>
        </div>

        <div class='tab-content'>
          <slot></slot>
        </div>
      </Host>
    );
  }

  public componentDidLoad(): void {
    this.labels = this._getLabels();
    this.contents = this._getContents();
    this._configure();
  }

  private _getLabels(): InterfaceLyneTabGroupLabel[] {
    return (Array.from(this._element.children)
      .filter((child) => (/^H\d$/u).test(child.tagName)) as InterfaceLyneTabGroupLabel[]);
  }

  private _getContents(): Element[] {
    return Array.from(this._element.querySelectorAll('lyne-tab-group > div'));
  }

  private _configure(): void {
    this.labels.forEach((label, i) => {
      label.tabGroupState = {
        activate: (): void => {
          if (!label.active) {
            const prevTab = this.labels.find((l) => l.active);

            if (prevTab) {
              prevTab.removeAttribute('active');
              prevTab.active = false;
              prevTab.tabIndex = -1;
              prevTab.tabGroupState.relatedContent.removeAttribute('active');
            }

            label.setAttribute('active', '');
            label.active = true;
            label.tabIndex = 1;
            label.focus();
            this.contents[i].setAttribute('active', '');
          }
        },
        index: i,
        relatedContent: this.contents[i]
      };

      label.slot = 'tab-bar';
      label.tabIndex = -1;
      label.active = false;

      label.addEventListener('click', () => {
        label.tabGroupState.activate();
      });
    });
  }

  @Listen('keydown')
  public handleKeyDown(evt: KeyboardEvent): void {
    const availableLabels = this.labels.filter((l) => !l.hasAttribute('disabled'));
    const cur = availableLabels.findIndex((l) => l.active);
    const size = availableLabels.length;
    const prev = cur === 0
      ? size - 1
      : cur - 1;
    const next = cur === size - 1
      ? 0
      : cur + 1;

    // don't trap nested handling
    if ((evt.target as HTMLElement).parentElement !== evt.currentTarget) {
      return;
    }

    if (evt.key === 'ArrowLeft' || evt.key === 'ArrowUp') {
      availableLabels[prev].tabGroupState.activate();
      evt.preventDefault();
    } else if (evt.key === 'ArrowRight' || evt.key === 'ArrowDown') {
      availableLabels[next].tabGroupState.activate();
      evt.preventDefault();
    }
  }
}
