import { h } from 'jsx-dom';
import readme from './readme.md';
import images from '../../global/images';

const ItemTemplate = (args) => (
  <li className='teaser-list__item' slot='teaser-list__item'>
    <lyne-teaser-item
      {...args}
    >
    </lyne-teaser-item>
  </li>
);

const Template = (args) => (
  <lyne-teaser-list {...args} >
    {args.items.map((item) => (
      <ItemTemplate {...item} />
    ))}
  </lyne-teaser-list>
);

const imageLoading = {
  control: {
    type: 'inline-radio'
  },
  options: [
    'eager',
    'lazy'
  ]
};

const items = [
  {
    'href-value': 'https://www.sbb.ch',
    'image-loading': imageLoading.options[1],
    'image-src': images[0],
    'personalised': false,
    'text': 'Mit dem Velo unterwegs',
    'title-text': 'Velo'
  },
  {
    'href-value': 'https://www.sbb.ch',
    'image-loading': imageLoading.options[1],
    'image-src': images[5],
    'personalised': false,
    'text': 'Spezialangebot',
    'title-text': 'Eidgenössischen Schwingfest'
  },
  {
    'href-value': 'https://www.sbb.ch',
    'image-loading': imageLoading.options[1],
    'image-src': images[1],
    'personalised': false,
    'text': 'Skierlebnisse entdecken',
    'title-text': 'Snow`n`Rail'
  },
  {
    'href-value': 'https://www.sbb.ch',
    'image-loading': imageLoading.options[1],
    'image-src': images[2],
    'personalised': false,
    'text': 'Alles für Ihren Ausflug',
    'title-text': 'Gruppenreisen'
  },
  {
    'href-value': 'https://www.sbb.ch',
    'image-loading': imageLoading.options[1],
    'image-src': images[3],
    'personalised': false,
    'text': 'Services im Bahnhof',
    'title-text': 'Bahnhof finden'
  },
  {
    'href-value': 'https://www.sbb.ch',
    'image-loading': imageLoading.options[1],
    'image-src': images[4],
    'personalised': false,
    'text': 'Bequem in die Ferien',
    'title-text': 'Fluggepäck'
  }
];

const itemsPersonalised = [
  {
    'href-value': 'https://www.sbb.ch',
    'image-loading': imageLoading.options[1],
    'image-src': images[0],
    'personalised': true,
    'text': 'Spannende Bücher kaufen',
    'title-text': 'Lesen im Zug'
  },
  {
    'href-value': 'https://www.sbb.ch',
    'image-loading': imageLoading.options[1],
    'image-src': images[1],
    'personalised': true,
    'text': 'Entspannt reisen',
    'title-text': 'Reisetipps'
  },
  {
    'href-value': 'https://www.sbb.ch',
    'image-loading': imageLoading.options[1],
    'image-src': images[2],
    'personalised': true,
    'text': 'Rücksichtsvoll unterwegs',
    'title-text': 'SBB Green Class'
  },
  {
    'href-value': 'https://www.sbb.ch',
    'image-loading': imageLoading.options[1],
    'image-src': images[3],
    'personalised': true,
    'text': 'Alles für den täglichen Bedarf',
    'title-text': 'Coop Pronto'
  }
];

const ariaLabelledBy = {
  control: {
    type: 'text'
  }
};

const defaultArgTypes = {
  'aria-labelledby': ariaLabelledBy,
  'image-loading': imageLoading
};

const defaultArgs = {
  'aria-labelledby': '',
  'image-loading': imageLoading.options[1]
};

/* ************************************************* */
/* The Stories                                       */
/* ************************************************* */
export const nonPersonalisedTeaserList = Template.bind({});

nonPersonalisedTeaserList.argTypes = defaultArgTypes;
nonPersonalisedTeaserList.args = {
  ...defaultArgs,
  items,
  personalised: false
};

nonPersonalisedTeaserList.documentation = {
  title: 'Non Personalised Teaser List'
};

export const personalisedTeaserList = Template.bind({});

personalisedTeaserList.argTypes = defaultArgTypes;
personalisedTeaserList.args = {
  ...defaultArgs,
  items: itemsPersonalised,
  personalised: true
};

personalisedTeaserList.documentation = {
  title: 'Personalised Teaser List'
};

/* ************************************************* */
/* export default                                    */
/* ************************************************* */

export default {
  decorators: [
    (Story) => (
      <div>
        <Story/>
      </div>
    )
  ],
  parameters: {
    docs: {
      extractComponentDescription: () => readme
    }
  },
  title: 'lyne-teaser-list'
};
