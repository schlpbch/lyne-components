import events from './lyne-toggle-multi.events.ts';
import { h } from 'jsx-dom';
import readme from './readme.md';

// --- Component
const Template = (args) => (
  <lyne-toggle-multi {...args}>
  </lyne-toggle-multi>
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
  disabled: false,
  label: 'Zwischen Ankunfts- und Abfahrtszeit wechseln',
  name: 'demo',
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
FirstValueChecked.args = JSON.parse(JSON.stringify(basicArgs));
FirstValueChecked.args['checked-toggle'] = checkedToggle.options[0];
FirstValueChecked.args['first-option-label'] = 'Abfahrt';
FirstValueChecked.args['first-option-value'] = 'ab';
FirstValueChecked.args['second-option-label'] = 'Ankunft';
FirstValueChecked.args['second-option-value'] = 'an';

FirstValueChecked.documentation = {
  title: 'First Value Checked'
};

export const FirstValueCheckedDisabled = Template.bind({});

FirstValueCheckedDisabled.argTypes = basicArgTypes;
FirstValueCheckedDisabled.args = JSON.parse(JSON.stringify(basicArgs));
FirstValueCheckedDisabled.args['disabled'] = true;
FirstValueCheckedDisabled.args['checked-toggle'] = checkedToggle.options[0];
FirstValueCheckedDisabled.args['first-option-label'] = 'Abfahrt';
FirstValueCheckedDisabled.args['first-option-value'] = 'ab';
FirstValueCheckedDisabled.args['second-option-label'] = 'Ankunft';
FirstValueCheckedDisabled.args['second-option-value'] = 'an';

FirstValueCheckedDisabled.documentation = {
  title: 'First Value Checked & Disabled'
};

export const SecondValueChecked = Template.bind({});

SecondValueChecked.argTypes = basicArgTypes;
SecondValueChecked.args = JSON.parse(JSON.stringify(basicArgs));
SecondValueChecked.args['checked-toggle'] = checkedToggle.options[1];
SecondValueChecked.args['first-option-label'] = 'Ab';
SecondValueChecked.args['first-option-value'] = 'ab';
SecondValueChecked.args['second-option-label'] = 'An';
SecondValueChecked.args['second-option-value'] = 'an';

SecondValueChecked.documentation = {
  title: 'Second Value Checked'
};

export const SecondValueCheckedDisabled = Template.bind({});

SecondValueCheckedDisabled.argTypes = basicArgTypes;
SecondValueCheckedDisabled.args = JSON.parse(JSON.stringify(basicArgs));
SecondValueCheckedDisabled.args['disabled'] = true;
SecondValueCheckedDisabled.args['checked-toggle'] = checkedToggle.options[1];
SecondValueCheckedDisabled.args['first-option-label'] = 'Ab';
SecondValueCheckedDisabled.args['first-option-value'] = 'ab';
SecondValueCheckedDisabled.args['second-option-label'] = 'An';
SecondValueCheckedDisabled.args['second-option-value'] = 'an';

SecondValueCheckedDisabled.documentation = {
  title: 'Second Value Checked & Disabled'
};

export default {
  decorators: [
    (Story, context) => (
      <div style={`padding: 2rem`}>
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
  title: 'Form Elements/lyne-toggle-multi'
};
