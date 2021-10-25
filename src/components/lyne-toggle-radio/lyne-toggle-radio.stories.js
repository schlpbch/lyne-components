import events from './lyne-toggle-radio.events.ts';
import { h } from 'jsx-dom';
import readme from './readme.md';

// --- Component
const Template = (args) => (
  <lyne-toggle-radio {...args}>
  </lyne-toggle-radio>
);

const checkedToggle = {
  control: {
    type: 'inline-radio'
  },
  options: [
    'first',
    'second'
  ]
};

const disabledArg = {
  control: {
    type: 'boolean'
  }
};

const label = {
  control: {
    type: 'text'
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
    category: 'Toggle Content'
  }
};

const secondOptionLabel = {
  control: {
    type: 'text'
  },
  table: {
    category: 'Toggle Content'
  }
};

const valueLeft = {
  control: {
    type: 'text'
  },
  table: {
    category: 'Toggle Content'
  }
};

const valueRight = {
  control: {
    type: 'text'
  },
  table: {
    category: 'Toggle Content'
  }
};

/* eslint-disable sort-keys */

const basicArgTypes = {
  'checked-toggle': checkedToggle,
  'disabled': disabledArg,
  label,
  name,
  'first-option-label': firstOptionLabel,
  'first-option-value': valueLeft,
  'second-option-label': secondOptionLabel,
  'second-option-value': valueRight
};

const basicArgs = {
  'checked-toggle': checkedToggle.options[0],
  'disabled': false,
  'label': 'Zwischen Ankunfts- und Abfahrtszeit wechseln',
  'first-option-label': '',
  'first-option-value': '',
  'second-option-label': '',
  'second-option-value': ''
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
  'first-option-label': 'Ab',
  'first-option-value': 'ab',
  'second-option-label': 'An',
  'second-option-value': 'an'
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
  'first-option-label': 'Ab',
  'first-option-value': 'ab',
  'second-option-label': 'An',
  'second-option-value': 'an'
};

SecondValueCheckedDisabled.documentation = {
  title: 'Second Value Checked & Disabled'
};

export default {
  decorators: [
    (Story) => (
      <div style='padding: 2rem'>
        <Story/>
      </div>
    )
  ],
  documentation: {
    disableArgs: ['iconslot']
  },
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
