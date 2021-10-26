import events from './lyne-toggle-radio.events.ts';
import { h } from 'jsx-dom';
import lyneIcons from 'lyne-icons/dist/icons.json';
import readme from './readme.md';

// --- Helper methods
const getMarkupForSvg = (svgName) => {
  if (!svgName) {
    return '';
  }

  const icon = lyneIcons.icons[svgName];
  const frag = document.createRange()
    .createContextualFragment(icon);

  return frag.firstChild;
};

// --- Component
const Template = (args) => (
  <lyne-toggle-radio {...args}>
    <span slot='firstOptionIconSlot'>{getMarkupForSvg(args.firstOptionIcon)}</span>
    <span slot='secondOptionIconSlot'>{getMarkupForSvg(args.secondOptionIcon)}</span>
  </lyne-toggle-radio>
);

const checkedToggle = {
  control: {
    type: 'inline-radio'
  },
  options: [
    'first',
    'second'
  ],
  table: {
    category: 'State'
  }
};

const disabledArg = {
  control: {
    type: 'boolean'
  },
  table: {
    category: 'State'
  }
};

const label = {
  control: {
    type: 'text'
  },
  table: {
    category: 'Radio Group Label'
  }
};

const name = {
  control: {
    type: 'text'
  }
};

const firstOptionLabel = {
  control: {
    type: 'text'
  },
  table: {
    category: 'Radio Group Options'
  }
};

const secondOptionLabel = {
  control: {
    type: 'text'
  },
  table: {
    category: 'Radio Group Options'
  }
};

const firstOptionIcon = {
  control: {
    type: 'text'
  },
  table: {
    category: 'Radio Group Options'
  }
};

const secondOptionIcon = {
  control: {
    type: 'text'
  },
  table: {
    category: 'Radio Group Options'
  }
};

const firstOptionValue = {
  control: {
    type: 'text'
  },
  table: {
    category: 'Radio Group Options'
  }
};

const secondOptionValue = {
  control: {
    type: 'text'
  },
  table: {
    category: 'Radio Group Options'
  }
};

const showIcons = {
  control: {
    type: 'inline-radio'
  },
  options: [
    'true',
    'false'
  ],
  table: {
    category: 'Radio Group Options'
  }
};

/* eslint-disable sort-keys */

const basicArgTypes = {
  'checked-toggle': checkedToggle,
  'disabled': disabledArg,
  label,
  name,
  'first-option-label': firstOptionLabel,
  firstOptionIcon,
  'first-option-value': firstOptionValue,
  'second-option-label': secondOptionLabel,
  secondOptionIcon,
  'second-option-value': secondOptionValue,
  'show-icons': showIcons
};

const basicArgs = {
  'checked-toggle': checkedToggle.options[0],
  'disabled': false,
  'label': 'Zwischen Ankunfts- und Abfahrtszeit wechseln',
  'name': 'demo',
  'first-option-label': '',
  firstOptionIcon: '',
  'first-option-value': '',
  'second-option-label': '',
  secondOptionIcon: '',
  'second-option-value': '',
  'show-icons': showIcons.options[1]
};

/* eslint-enable sort-keys */

/* ************************************************* */
/* The Stories                                       */
/* ************************************************* */
export const FirstValueChecked = Template.bind({});

FirstValueChecked.argTypes = basicArgTypes;
FirstValueChecked.args = {
  ...basicArgs,
  'checked-toggle': checkedToggle.options[0],
  'first-option-label': 'Abfahrt',
  'first-option-value': 'ab',
  'second-option-label': 'Ankunft',
  'second-option-value': 'an'
};

FirstValueChecked.documentation = {
  title: 'First Value Checked'
};

export const FirstValueCheckedDisabled = Template.bind({});

FirstValueCheckedDisabled.argTypes = basicArgTypes;
FirstValueCheckedDisabled.args = {
  ...basicArgs,
  'checked-toggle': checkedToggle.options[0],
  'disabled': true,
  'first-option-label': 'Abfahrt',
  'first-option-value': 'ab',
  'second-option-label': 'Ankunft',
  'second-option-value': 'an'
};

FirstValueCheckedDisabled.documentation = {
  title: 'First Value Checked & Disabled'
};

export const SecondValueChecked = Template.bind({});

SecondValueChecked.argTypes = basicArgTypes;
SecondValueChecked.args = {
  ...basicArgs,
  'checked-toggle': checkedToggle.options[1],
  'first-option-label': '2. Kl.',
  'first-option-value': '2',
  'second-option-label': '1. Kl.',
  'second-option-value': '1'
};

SecondValueChecked.documentation = {
  title: 'Second Value Checked'
};

export const SecondValueCheckedDisabled = Template.bind({});

SecondValueCheckedDisabled.argTypes = basicArgTypes;
SecondValueCheckedDisabled.args = {
  ...basicArgs,
  'checked-toggle': checkedToggle.options[1],
  'disabled': true,
  'first-option-label': '2. Kl.',
  'first-option-value': '2',
  'second-option-label': '1. Kl.',
  'second-option-value': '1'
};

SecondValueCheckedDisabled.documentation = {
  title: 'Second Value Checked & Disabled'
};

export const IconsAndText = Template.bind({});

IconsAndText.argTypes = basicArgTypes;
IconsAndText.args = {
  ...basicArgs,
  'checked-toggle': checkedToggle.options[0],
  'first-option-label': 'Abfahrt',
  firstOptionIcon: 'arrow-long-right-small',
  'first-option-value': 'ab',
  'second-option-label': 'Ankunft',
  secondOptionIcon: 'arrows-right-left-small',
  'second-option-value': 'an',
  'show-icons': showIcons.options[0]
};

IconsAndText.documentation = {
  title: 'Icons & Text'
};

export const IconsAndTextDisabled = Template.bind({});

IconsAndTextDisabled.argTypes = basicArgTypes;
IconsAndTextDisabled.args = {
  ...basicArgs,
  'checked-toggle': checkedToggle.options[0],
  'disabled': true,
  'first-option-label': 'Abfahrt',
  firstOptionIcon: 'arrow-long-right-small',
  'first-option-value': 'ab',
  'second-option-label': 'Ankunft',
  secondOptionIcon: 'arrows-right-left-small',
  'second-option-value': 'an',
  'show-icons': showIcons.options[0]
};

IconsAndTextDisabled.documentation = {
  title: 'Icons & Text Disabled'
};

export default {
  decorators: [
    (Story) => (
      <div style='padding: 2rem'>
        <Story/>
      </div>
    )
  ],
  parameters: {
    actions: {
      handles: [events.change]
    },
    docs: {
      extractComponentDescription: () => readme
    }
  },
  title: 'Form Elements/lyne-toggle-radio'
};
