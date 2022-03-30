import { h } from 'jsx-dom';
import readme from './readme.md';
import sampleData from './lyne-timetable-platform.sample-data';

const Template = (args) => (
  <lyne-timetable-platform
    appearance={args.appearance}
    config={JSON.stringify(args.config)}
  >
  </lyne-timetable-platform>
);

const appearance = {
  control: {
    type: 'select'
  },
  options: [
    'first-level',
    'second-level-arrival',
    'second-level-departure'
  ]
};

const config = {
  table: {
    disable: false
  }
};

const defaultArgTypes = {
  appearance,
  config
};

const defaultArgs = {
  appearance: appearance.options[0]
};

/* ************************************************* */
/* The Stories                                       */
/* ************************************************* */
export const LyneTimetablePlatformFirstLevel = Template.bind({});

LyneTimetablePlatformFirstLevel.argTypes = defaultArgTypes;
LyneTimetablePlatformFirstLevel.args = {
  ...defaultArgs,
  config: sampleData[0]
};

LyneTimetablePlatformFirstLevel.documentation = {
  title: 'Lyne Timetable Platform - First Level'
};

export const LyneTimetableStandFirstLevel = Template.bind({});

LyneTimetableStandFirstLevel.argTypes = defaultArgTypes;
LyneTimetableStandFirstLevel.args = {
  ...defaultArgs,
  config: sampleData[2]
};

LyneTimetableStandFirstLevel.documentation = {
  title: 'Lyne Timetable Stand - First Level'
};

export const LyneTimetableArrivalPlatformSecondLevel = Template.bind({});

LyneTimetableArrivalPlatformSecondLevel.argTypes = defaultArgTypes;
LyneTimetableArrivalPlatformSecondLevel.args = {
  ...defaultArgs,
  appearance: appearance.options[1],
  config: sampleData[1]
};

LyneTimetableArrivalPlatformSecondLevel.documentation = {
  title: 'Lyne Timetable Arrival Platform - Second Level'
};

export const LyneTimetableArrivalPlatformSecondLevelChanged = Template.bind({});

LyneTimetableArrivalPlatformSecondLevelChanged.argTypes = defaultArgTypes;
LyneTimetableArrivalPlatformSecondLevelChanged.args = {
  ...defaultArgs,
  appearance: appearance.options[1],
  config: sampleData[4]
};

LyneTimetableArrivalPlatformSecondLevelChanged.documentation = {
  title: 'Lyne Timetable Arrival Platform - Second Level - Changed'
};

export const LyneTimetableDeparturePlatformSecondLevel = Template.bind({});

LyneTimetableDeparturePlatformSecondLevel.argTypes = defaultArgTypes;
LyneTimetableDeparturePlatformSecondLevel.args = {
  ...defaultArgs,
  appearance: appearance.options[2],
  config: sampleData[0]
};

LyneTimetableDeparturePlatformSecondLevel.documentation = {
  title: 'Lyne Timetable Departure Platform - Second Level'
};

export const LyneTimetableDeparturePlatformSecondLevelChanged = Template.bind({});

LyneTimetableDeparturePlatformSecondLevelChanged.argTypes = defaultArgTypes;
LyneTimetableDeparturePlatformSecondLevelChanged.args = {
  ...defaultArgs,
  appearance: appearance.options[2],
  config: sampleData[3]
};

LyneTimetableDeparturePlatformSecondLevelChanged.documentation = {
  title: 'Lyne Timetable Departure Platform - Second Level - Changed'
};

export default {
  decorators: [
    (Story) => (
      <Story/>
    )
  ],
  parameters: {
    docs: {
      extractComponentDescription: () => readme
    }
  },
  title: 'Internals/lyne-timetable-platform'
};
