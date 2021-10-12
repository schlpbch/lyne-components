import events from './lyne-toggle.events.ts';
import { h } from 'jsx-dom';
import readme from './readme.md';

// --- Component
const Template = (args) => (
  <lyne-toggle {...args}>
  </lyne-toggle>
);

const checkedValue = {
  control: {
    type: 'inline-radio'
  },
  options: [
    'first',
    'second'
  ],
  table: {
    category: 'Multiple Values Variant'
  }
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
  },
  table: {
    category: 'Multiple Values Variant'
  }
};

const labelSecond = {
  control: {
    type: 'text'
  },
  table: {
    category: 'Multiple Values Variant'
  }
};

const labelPlacement = {
  control: {
    type: 'inline-radio'
  },
  options: [
    'left',
    'right'
  ],
  table: {
    category: 'Single Value Variant'
  }
};

const valueLeft = {
  control: {
    type: 'text'
  },
  table: {
    category: 'Multiple Values Variant'
  }
};

const valueRight = {
  control: {
    type: 'text'
  },
  table: {
    category: 'Multiple Values Variant'
  }
};

const basicArgTypes = {
  'checked-value': checkedValue,
  'disabled': disabledArg,
  label,
  'label-first': labelFirst,
  'label-second': labelSecond,
  'label-placement': labelPlacement,
  'value-first': valueLeft,
  'value-second': valueRight
};

const basicArgs = {
  'checked-value': checkedValue.options[0],
  disabled: false,
  label: 'Toggle Label',
  'label-first': '',
  'label-second': '',
  'label-placement': labelPlacement.options[0],
  'value-first': '',
  'value-second': ''
};
/* eslint-enable sort-keys */

/* ************************************************* */
/* The Stories                                       */
/* ************************************************* */
export const singleValueTextLeft = Template.bind({});

singleValueTextLeft.argTypes = basicArgTypes;
singleValueTextLeft.args = JSON.parse(JSON.stringify(basicArgs));

singleValueTextLeft.documentation = {
  title: 'Text left'
};

export const singleValueTextRight = Template.bind({});

singleValueTextRight.argTypes = basicArgTypes;
singleValueTextRight.args = JSON.parse(JSON.stringify(basicArgs));
singleValueTextRight.args['label-placement'] = labelPlacement.options[1];

singleValueTextRight.documentation = {
  title: 'Text Right'
};

export const multipleValues = Template.bind({});

multipleValues.argTypes = basicArgTypes;
multipleValues.args = JSON.parse(JSON.stringify(basicArgs));
multipleValues.args['checked-value'] = checkedValue.options[0];
multipleValues.args['label-first'] = 'Ab';
multipleValues.args['value-first'] = 'ab';
multipleValues.args['label-second'] = 'An';
multipleValues.args['value-second'] = 'an';

multipleValues.documentation = {
  title: 'Two values'
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
  title: 'Form Elements/lyne-toggle'
};
