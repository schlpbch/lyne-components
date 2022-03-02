import pearlChainData from '../lyne-pearl-chain/lyne-pearl-chain.sample-data';
import transportationBarrierFreeData from '../lyne-timetable-barrier-free/lyne-timetable-barrier-free.sample-data';
import transportationCusHimData from '../lyne-timetable-cus-him/lyne-timetable-cus-him.sample-data';
import transportationOccupancyData from '../lyne-timetable-occupancy/lyne-timetable-occupancy.sample-data';
import transportationPlatformData from '../lyne-timetable-platform/lyne-timetable-platform.sample-data';
import transportationNumberData from '../lyne-timetable-transportation-number/lyne-timetable-transportation-number.sample-data';
import transportationTravelHintsData from '../lyne-timetable-travel-hints/lyne-timetable-travel-hints.sample-data';
import transportationTimeData from '../lyne-timetable-transportation-time/lyne-timetable-transportation-time.sample-data';

export default [
  {
    arrivalPlatform: transportationPlatformData[1],
    arrivalStation: 'St. Gallen, Mühlegg Talstation',
    arrivalTime: transportationTimeData[1],
    departurePlatform: transportationPlatformData[0],
    departureStation: 'La Chaux-de-Fonds',
    departureTime: transportationTimeData[0],
    occupancy: transportationOccupancyData[5],
    pearlChain: {
      legs: pearlChainData.stop0,
      openEnd: true,
      status: 'future'
    },
    transportationNumber: transportationNumberData['train'],
    travelHints: transportationTravelHintsData[0]
  },
  {
    arrivalPlatform: transportationPlatformData[1],
    arrivalStation: 'St. Gallen, Mühlegg Talstation',
    arrivalTime: transportationTimeData[1],
    departureCusHim: transportationCusHimData[3],
    departurePlatform: transportationPlatformData[0],
    departureStation: 'La Chaux-de-Fonds',
    departureTime: transportationTimeData[4],
    occupancy: transportationOccupancyData[5],
    pearlChain: {
      legs: pearlChainData.stop0Delayed,
      openEnd: true,
      status: 'future'
    },
    transportationNumber: transportationNumberData['train'],
    travelHints: transportationTravelHintsData[0]
  },
  {
    arrivalCusHim: transportationCusHimData[4],
    arrivalPlatform: transportationPlatformData[1],
    arrivalStation: 'St. Gallen, Mühlegg Talstation',
    arrivalTime: transportationTimeData[5],
    departurePlatform: transportationPlatformData[0],
    departureStation: 'La Chaux-de-Fonds',
    departureTime: transportationTimeData[0],
    occupancy: transportationOccupancyData[5],
    pearlChain: {
      legs: pearlChainData.stop0Delayed,
      openEnd: true,
      status: 'future'
    },
    transportationNumber: transportationNumberData['train'],
    travelHints: transportationTravelHintsData[0]
  },
  {
    arrivalPlatform: transportationPlatformData[1],
    arrivalStation: 'St. Gallen, Mühlegg Talstation',
    arrivalTime: transportationTimeData[1],
    departurePlatform: transportationPlatformData[0],
    departureStation: 'La Chaux-de-Fonds',
    departureTime: transportationTimeData[0],
    occupancy: transportationOccupancyData[5],
    pearlChain: {
      legs: pearlChainData.stop0,
      openEnd: false,
      status: 'future'
    },
    transportationNumber: transportationNumberData['train'],
    travelHints: transportationTravelHintsData[0]
  },
  {
    arrivalCusHim: transportationCusHimData[3],
    arrivalPlatform: transportationPlatformData[1],
    arrivalStation: 'St. Gallen, Mühlegg Talstation',
    arrivalTime: transportationTimeData[5],
    departureCusHim: transportationCusHimData[4],
    departurePlatform: transportationPlatformData[0],
    departureStation: 'La Chaux-de-Fonds',
    departureTime: transportationTimeData[4],
    occupancy: transportationOccupancyData[5],
    pearlChain: {
      legs: pearlChainData.stop0,
      openEnd: false,
      status: 'future'
    },
    transportationNumber: transportationNumberData['train'],
    travelHints: transportationTravelHintsData[0]
  },
  {
    arrivalBarrierFree: transportationBarrierFreeData[2],
    arrivalCusHim: transportationCusHimData[3],
    arrivalPlatform: transportationPlatformData[1],
    arrivalStation: 'St. Gallen, Mühlegg Talstation',
    arrivalTime: transportationTimeData[5],
    departureBarrierFree: transportationBarrierFreeData[3],
    departureCusHim: transportationCusHimData[4],
    departurePlatform: transportationPlatformData[0],
    departureStation: 'La Chaux-de-Fonds',
    departureTime: transportationTimeData[4],
    occupancy: transportationOccupancyData[5],
    pearlChain: {
      legs: pearlChainData.stop0,
      openEnd: false,
      status: 'future'
    },
    transportationNumber: transportationNumberData['train'],
    travelHints: transportationTravelHintsData[0]
  }
];
