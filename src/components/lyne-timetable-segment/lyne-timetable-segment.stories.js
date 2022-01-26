import events from './lyne-timetable-segment.events.ts';
import { h } from 'jsx-dom';
import readme from './readme.md';
import sampleData from './lyne-timetable-segment.sample-data';

const Template = (args) => (
  <lyne-timetable-segment
    config={JSON.stringify(args.config)}
  >
  </lyne-timetable-segment>
);

const config = {
  table: {
    disable: false
  }
};

const defaultArgTypes = {
  config
};

/* ************************************************* */
/* The Stories                                       */
/* ************************************************* */
export const LyneTimetableSegment = Template.bind({});

LyneTimetableSegment.argTypes = defaultArgTypes;
LyneTimetableSegment.args = {
  config: sampleData[0]
};

LyneTimetableSegment.documentation = {
  title: 'Segment'
};

export default {
  decorators: [
    (Story) => (
      <div style='background: #f6f6f6; padding: 1rem;'>
        <Story/>
      </div>
    )
  ],
  parameters: {
    actions: {
      handles: [events.click]
    },
    docs: {
      extractComponentDescription: () => readme
    }
  },
  title: 'Internals/lyne-timetable-segment'
};
