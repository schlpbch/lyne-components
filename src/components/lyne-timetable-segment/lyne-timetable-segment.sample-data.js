import pearlChainData from '../lyne-pearl-chain/lyne-pearl-chain.sample-data';
import transportationOccupancyData from '../lyne-timetable-occupancy/lyne-timetable-occupancy.sample-data';
import transportationPlatformData from '../lyne-timetable-platform/lyne-timetable-platform.sample-data';
import transportationNumberData from '../lyne-timetable-transportation-number/lyne-timetable-transportation-number.sample-data';
import transportationTravelHintsData from '../lyne-timetable-travel-hints/lyne-timetable-travel-hints.sample-data';
import transportationTimeData from '../lyne-timetable-transportation-time/lyne-timetable-transportation-time.sample-data';

export default [
  {
    arrivalPlatform: transportationPlatformData[1],
    arrivalTime: transportationTimeData[1],
    departurePlatform: transportationPlatformData[0],
    departureTime: transportationTimeData[0],
    occupancy: transportationOccupancyData[5],
    pearlChain: {
      legs: pearlChainData.stop0,
      status: 'future'
    },
    transportationNumber: transportationNumberData['train'],
    travelHints: transportationTravelHintsData[0]
  }
];
