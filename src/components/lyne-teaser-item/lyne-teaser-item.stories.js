import { h } from 'jsx-dom';
import images from '../../global/images';
import readme from './readme.md';

// --- Controls
const imageLoading = {
  control: {
    type: 'inline-radio'
  },
  options: [
    'eager',
    'lazy'
  ],
  table: {
    category: 'Performance'
  }
};

// --- Component

const Template = (args) => (
  <lyne-teaser-item class='lyne-teaser-item' {...args} />
);

const defaultTeaserArgTypes = {
  'image-loading': imageLoading
};

const defaultTeaserArgs = {
  'image-loading': imageLoading.options[1],
  'image-src': images[0],
  'link': 'https://www.sbb.ch',
  'text': 'Spannende Bücher kaufen',
  'title-text': 'Lesen im Zug'
};

/* ************************************************* */
/* The Stories                                       */
/* ************************************************* */

export const TeaserPersonalisedTrue = Template.bind({});
export const TeaserPersonalisedFalse = Template.bind({});

TeaserPersonalisedFalse.argTypes = defaultTeaserArgTypes;
TeaserPersonalisedFalse.args = {
  ...defaultTeaserArgs,
  personalised: false
};

TeaserPersonalisedTrue.argTypes = defaultTeaserArgTypes;
TeaserPersonalisedTrue.args = {
  ...defaultTeaserArgs,
  personalised: true
};

/* ************************************************* */
/* export default                                    */
/* ************************************************* */

export default {
  parameters: {
    docs: {
      extractComponentDescription: () => readme
    }
  },
  title: 'lyne-teaser-item'
};
