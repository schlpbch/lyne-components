import events from './lyne-toggle-multi.events.ts';
import { h } from 'jsx-dom';
import readme from './readme.md';

// --- Component
const Template = (args) => (
  <lyne-toggle-multi {...args}>
  </lyne-toggle-multi>
);

const checkedValue = {
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

const labelFirst = {
  control: {
    type: 'text'
  }
};

const labelSecond = {
  control: {
    type: 'text'
  }
};

const valueLeft = {
  control: {
    type: 'text'
  }
};

const valueRight = {
  control: {
    type: 'text'
  }
};

const basicArgTypes = {
  'checked-toggle': checkedValue,
  'disabled': disabledArg,
  label,
  'label-first': labelFirst,
  'label-second': labelSecond,
  'value-first': valueLeft,
  'value-second': valueRight
};

const basicArgs = {
  'checked-toggle': checkedValue.options[0],
  disabled: false,
  label: 'Toggle Label',
  'label-first': '',
  'label-second': '',
  'value-first': '',
  'value-second': ''
};
/* eslint-enable sort-keys */

/* ************************************************* */
/* The Stories                                       */
/* ************************************************* */
export const FirstValueChecked = Template.bind({});

FirstValueChecked.argTypes = basicArgTypes;
FirstValueChecked.args = JSON.parse(JSON.stringify(basicArgs));
FirstValueChecked.args['checked-toggle'] = checkedValue.options[0];
FirstValueChecked.args['label-first'] = 'Ab';
FirstValueChecked.args['value-first'] = 'ab';
FirstValueChecked.args['label-second'] = 'An';
FirstValueChecked.args['value-second'] = 'an';

FirstValueChecked.documentation = {
  title: 'First Value Checked'
};

export const FirstValueCheckedDisabled = Template.bind({});

FirstValueCheckedDisabled.argTypes = basicArgTypes;
FirstValueCheckedDisabled.args = JSON.parse(JSON.stringify(basicArgs));
FirstValueCheckedDisabled.args['disabled'] = true;
FirstValueCheckedDisabled.args['checked-toggle'] = checkedValue.options[0];
FirstValueCheckedDisabled.args['label-first'] = 'Ab';
FirstValueCheckedDisabled.args['value-first'] = 'ab';
FirstValueCheckedDisabled.args['label-second'] = 'An';
FirstValueCheckedDisabled.args['value-second'] = 'an';

FirstValueCheckedDisabled.documentation = {
  title: 'First Value Checked & Disabled'
};

export const SecondValueChecked = Template.bind({});

SecondValueChecked.argTypes = basicArgTypes;
SecondValueChecked.args = JSON.parse(JSON.stringify(basicArgs));
SecondValueChecked.args['checked-toggle'] = checkedValue.options[1];
SecondValueChecked.args['label-first'] = 'Ab';
SecondValueChecked.args['value-first'] = 'ab';
SecondValueChecked.args['label-second'] = 'An';
SecondValueChecked.args['value-second'] = 'an';

SecondValueChecked.documentation = {
  title: 'Second Value Checked'
};

export const SecondValueCheckedDisabled = Template.bind({});

SecondValueCheckedDisabled.argTypes = basicArgTypes;
SecondValueCheckedDisabled.args = JSON.parse(JSON.stringify(basicArgs));
SecondValueCheckedDisabled.args['disabled'] = true;
SecondValueCheckedDisabled.args['checked-toggle'] = checkedValue.options[1];
SecondValueCheckedDisabled.args['label-first'] = 'Ab';
SecondValueCheckedDisabled.args['value-first'] = 'ab';
SecondValueCheckedDisabled.args['label-second'] = 'An';
SecondValueCheckedDisabled.args['value-second'] = 'an';

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
