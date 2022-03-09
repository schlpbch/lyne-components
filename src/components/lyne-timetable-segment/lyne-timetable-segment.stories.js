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
export const arrivalSegment = Template.bind({});

arrivalSegment.argTypes = defaultArgTypes;
arrivalSegment.args = {
  config: sampleData.arrival
};

arrivalSegment.documentation = {
  title: 'Arrival Segment'
};

export const arrivalDelayedSegment = Template.bind({});

arrivalDelayedSegment.argTypes = defaultArgTypes;
arrivalDelayedSegment.args = {
  config: sampleData.arrivalDelayed
};

arrivalDelayedSegment.documentation = {
  title: 'Arrival Delayed Segment'
};

export const departureAndArrivalSegment = Template.bind({});

departureAndArrivalSegment.argTypes = defaultArgTypes;
departureAndArrivalSegment.args = {
  config: sampleData.departureAndArrival
};

departureAndArrivalSegment.documentation = {
  title: 'Departure & Arrival Segment'
};

export const departureAndArrivalDelayedSegment = Template.bind({});

departureAndArrivalDelayedSegment.argTypes = defaultArgTypes;
departureAndArrivalDelayedSegment.args = {
  config: sampleData.departureAndArrivalDelayed
};

departureAndArrivalDelayedSegment.documentation = {
  title: 'Departure & Arrival Delayed Segment'
};

export const departureAndArrivalDelayedSegmentBarrierFree = Template.bind({});

departureAndArrivalDelayedSegmentBarrierFree.argTypes = defaultArgTypes;
departureAndArrivalDelayedSegmentBarrierFree.args = {
  config: sampleData.departureAndArrivalDelayedBarrierFree
};

departureAndArrivalDelayedSegmentBarrierFree.documentation = {
  title: 'Departure & Arrival Delayed Segment, Barrier Free'
};

export const departureSegment = Template.bind({});

departureSegment.argTypes = defaultArgTypes;
departureSegment.args = {
  config: sampleData.departure
};

departureSegment.documentation = {
  title: 'Departure Segment'
};

export const departureDelayedSegment = Template.bind({});

departureDelayedSegment.argTypes = defaultArgTypes;
departureDelayedSegment.args = {
  config: sampleData.departureDelayed
};

departureDelayedSegment.documentation = {
  title: 'Departure Delayed Segment'
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
