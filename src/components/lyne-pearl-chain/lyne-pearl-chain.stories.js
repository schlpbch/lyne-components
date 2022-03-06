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
export const NoStopsVertical = Template.bind({});
export const NoStopsVerticalArrival = Template.bind({});
export const NoStopsVerticalDeparture = Template.bind({});
export const NoStopsVerticalDepartureAndArrival = Template.bind({});
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

NoStopsVertical.documentation = {
  title: 'No stop, vertical'
};

NoStopsVerticalArrival.documentation = {
  title: 'No stop, vertical, arrival'
};

NoStopsVerticalDeparture.documentation = {
  title: 'No stop, vertical, departure'
};

NoStopsVerticalDepartureAndArrival.documentation = {
  title: 'No stop, vertical, departure'
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

const orientation = {
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

const appearance = {
  control: {
    type: 'select'
  },
  options: [
    'arrival',
    'departure',
    'departure-and-arrival',
    'inter-segment',
    'level-1'
  ]
};

NoStops.argTypes = {
  cancelPart: {
    control: {
      type: 'inline-check'
    },
    options: [1]
  },
  legs,
  orientation,
  status
};

NoStops.args = {
  legs: sampleData.stop0,
  orientation: 'horizontal',
  status: 'future'
};

NoStopsVertical.argTypes = {
  appearance,
  cancelPart: {
    control: {
      type: 'inline-check'
    },
    options: [1]
  },
  legs,
  orientation,
  status
};

NoStopsVertical.args = {
  appearance: appearance.options[3],
  legs: sampleData.stop0,
  orientation: 'vertical',
  status: 'future'
};

NoStopsVerticalArrival.argTypes = {
  appearance,
  cancelPart: {
    control: {
      type: 'inline-check'
    },
    options: [1]
  },
  legs,
  orientation,
  status
};

NoStopsVerticalArrival.args = {
  appearance: appearance.options[0],
  legs: sampleData.stop0,
  orientation: 'vertical',
  status: 'future'
};

NoStopsVerticalDeparture.argTypes = {
  appearance,
  cancelPart: {
    control: {
      type: 'inline-check'
    },
    options: [1]
  },
  legs,
  orientation,
  status
};

NoStopsVerticalDeparture.args = {
  appearance: appearance.options[1],
  legs: sampleData.stop0,
  orientation: 'vertical',
  status: 'future'
};

NoStopsVerticalDepartureAndArrival.argTypes = {
  appearance,
  cancelPart: {
    control: {
      type: 'inline-check'
    },
    options: [1]
  },
  legs,
  orientation,
  status
};

NoStopsVerticalDepartureAndArrival.args = {
  appearance: appearance.options[2],
  legs: sampleData.stop0,
  orientation: 'vertical',
  status: 'future'
};

Stop1.argTypes = {
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
  orientation,
  status
};

Stop1.args = {
  legs: sampleData.stop1,
  orientation: 'horizontal',
  status: 'past'
};

Stops2.argTypes = {
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
  orientation,
  status
};

Stops2.args = {
  legs: sampleData.stop2,
  orientation: 'horizontal',
  status: '50'
};

Stops2SkippedStations.argTypes = {
  legs,
  orientation,
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
  status
};

Stops2SkippedStations.args = {
  legs: sampleData.stop2Skipped,
  orientation: 'horizontal',
  skipPart: '2 | 3',
  status: '50'
};

Stops3.argTypes = {
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
  orientation,
  status
};

Stops3.args = {
  legs: sampleData.stop3,
  orientation: 'horizontal',
  status: 'future'
};

Stops3SkippedStations.argTypes = {
  legs,
  orientation,
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
  status
};

Stops3SkippedStations.args = {
  legs: sampleData.stop3Skipped,
  orientation: 'horizontal',
  skipPart: '2 | 3 | 4',
  status: 'future'
};

Stops4.argTypes = {
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
  orientation,
  status
};

Stops4.args = {
  legs: sampleData.stop4,
  orientation: 'horizontal',
  status: 'past'
};

Stops9.argTypes = {
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
  orientation,
  status
};

Stops9.args = {
  legs: sampleData.stop9,
  orientation: 'horizontal',
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

