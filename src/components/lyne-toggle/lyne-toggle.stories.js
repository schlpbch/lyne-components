import events from './lyne-toggle.events.ts';
import { h } from 'jsx-dom';
import readme from './readme.md';

// --- Component
const Template = (args) => (
  <lyne-toggle {...args}>
  </lyne-toggle>
);

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

const labelLeft = {
  control: {
    type: 'text'
  },
  table: {
    category: 'Two Values Variant'
  }
};

const labelRight = {
  control: {
    type: 'text'
  },
  table: {
    category: 'Two Values Variant'
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
    category: 'Two Values Variant'
  }
};

const valueRight = {
  control: {
    type: 'text'
  },
  table: {
    category: 'Two Values Variant'
  }
};

const basicArgTypes = {
  label,
  'label-left': labelLeft,
  'label-right': labelRight,
  'label-placement': labelPlacement,
  'disabled': disabledArg,
  'value-left': valueLeft,
  'value-right': valueRight
};

const basicArgs = {
  disabled: false,
  label: 'Toggle Label',
  'label-left': '',
  'label-right': '',
  'label-placement': labelPlacement.options[0],
  'value-left': '',
  'value-right': ''
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

export const twoValues = Template.bind({});

twoValues.argTypes = basicArgTypes;
twoValues.args = JSON.parse(JSON.stringify(basicArgs));
twoValues.args['label-left'] = 'Ab';
twoValues.args['value-left'] = 'ab';
twoValues.args['label-right'] = 'An';
twoValues.args['value-right'] = 'an';

twoValues.documentation = {
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
