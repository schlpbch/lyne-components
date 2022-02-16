import { h } from 'jsx-dom';
import isChromatic from 'chromatic/isChromatic';
import readme from './readme.md';
import sampleData from './lyne-pearl-chain.sample-data';

const Template = ({
  legs,
  cancelPart,
  skipPart,
  ...args
}) => {

  const newLegsData = JSON.parse(JSON.stringify(legs));

  newLegsData.legs.forEach((leg, index) => {
    if (cancelPart) {
      leg.cancellation = cancelPart.indexOf(index + 1) !== -1;
    } else if (skipPart) {
      leg.skipped = skipPart.indexOf(index + 1) !== -1;
    } else {
      leg.cancellation = false;
    }
  });

  return (
    <lyne-pearl-chain
      legs={JSON.stringify(newLegsData)}
      disable-animation={isChromatic}
      {...args}
    />
  );
};

export const NoStops = Template.bind({});
export const NoStopsOpenEnd = Template.bind({});
export const Stop1 = Template.bind({});
export const Stops2 = Template.bind({});
export const Stops2SkippedStations = Template.bind({});
export const Stops3 = Template.bind({});
export const Stops3SkippedStations = Template.bind({});
export const Stops4 = Template.bind({});
export const Stops9 = Template.bind({});

NoStops.documentation = {
  title: 'No stops'
};

NoStopsOpenEnd.documentation = {
  title: 'No stop, open end'
};

Stop1.documentation = {
  title: 'One Stop'
};

Stops2.documentation = {
  title: '2 Stops'
};

Stops2SkippedStations.documentation = {
  title: '2 Stops skipped stations'
};

Stops3.documentation = {
  title: '3 Stops'
};

Stops3SkippedStations.documentation = {
  title: '3 Stops skipped stations'
};

Stops4.documentation = {
  title: '4 Stops'
};

Stops9.documentation = {
  title: '9 Stops'
};

const appearance = {
  control: {
    type: 'select'
  },
  options: [
    'horizontal',
    'vertical'
  ]
};

const status = {
  control: {
    type: 'inline-radio'
  },
  options: [
    'past',
    '0',
    '25',
    '33',
    '50',
    '66',
    '75',
    '100',
    'future'
  ]
};

const legs = {
  table: {
    disable: true
  }
};

const openEnd = {
  control: {
    type: 'boolean'
  }
};

NoStops.argTypes = {
  appearance,
  cancelPart: {
    control: {
      type: 'inline-check'
    },
    options: [1]
  },
  legs,
  openEnd,
  status
};

NoStops.args = {
  appearance: 'horizontal',
  legs: sampleData.stop0,
  status: 'future'
};

NoStopsOpenEnd.argTypes = {
  appearance,
  cancelPart: {
    control: {
      type: 'inline-check'
    },
    options: [1]
  },
  legs,
  openEnd,
  status
};

NoStopsOpenEnd.args = {
  appearance: 'vertical',
  legs: sampleData.stop0,
  openEnd: true,
  status: 'future'
};

Stop1.argTypes = {
  appearance,
  cancelPart: {
    control: {
      type: 'inline-check'
    },
    options: [
      1,
      2
    ]
  },
  legs,
  openEnd,
  status
};

Stop1.args = {
  appearance: 'horizontal',
  legs: sampleData.stop1,
  status: 'past'
};

Stops2.argTypes = {
  appearance,
  cancelPart: {
    control: {
      type: 'inline-check'
    },
    options: [
      1,
      2,
      3
    ]
  },
  legs,
  openEnd,
  status
};

Stops2.args = {
  appearance: 'horizontal',
  legs: sampleData.stop2,
  status: '50'
};

Stops2SkippedStations.argTypes = {
  appearance,
  skipPart: {
    control: {
      type: 'inline-check'
    },
    options: [
      1,
      2,
      3
    ]
  },
  legs,
  openEnd,
  status
};

Stops2SkippedStations.args = {
  appearance: 'horizontal',
  legs: sampleData.stop2Skipped,
  status: '50',
  skipPart: '2 | 3'
};

Stops3.argTypes = {
  appearance,
  cancelPart: {
    control: {
      type: 'inline-check'
    },
    options: [
      1,
      2,
      3,
      4
    ]
  },
  legs,
  openEnd,
  status
};

Stops3.args = {
  appearance: 'horizontal',
  legs: sampleData.stop3,
  status: 'future'
};

Stops3SkippedStations.argTypes = {
  appearance,
  skipPart: {
    control: {
      type: 'inline-check'
    },
    options: [
      1,
      2,
      3,
      4
    ]
  },
  legs,
  openEnd,
  status
};

Stops3SkippedStations.args = {
  appearance: 'horizontal',
  legs: sampleData.stop3Skipped,
  status: 'future',
  skipPart: '2 | 3 | 4'
};

Stops4.argTypes = {
  appearance,
  cancelPart: {
    control: {
      type: 'inline-check'
    },
    options: [
      1,
      2,
      3,
      4,
      5
    ]
  },
  legs,
  openEnd,
  status
};

Stops4.args = {
  appearance: 'horizontal',
  legs: sampleData.stop4,
  status: 'past'
};

Stops9.argTypes = {
  appearance,
  cancelPart: {
    control: {
      type: 'inline-check'
    },
    options: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ]
  },
  legs,
  openEnd,
  status
};

Stops9.args = {
  appearance: 'horizontal',
  legs: sampleData.stop9,
  openEnd,
  status: '66'
};

export default {
  decorators: [
    (Story) => (
      <div style={'max-width: 20rem; height: 20rem;'}>
        <Story/>
      </div>
    )
  ],
  parameters: {
    docs: {
      extractComponentDescription: () => readme
    }
  },
  title: 'lyne-pearl-chain'
};

