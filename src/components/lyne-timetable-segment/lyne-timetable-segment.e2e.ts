import { newE2EPage } from '@stencil/core/testing';
import sampleData from './lyne-timetable-segment.sample-data';

const config = JSON.stringify(sampleData[0]);

describe('lyne-timetable-segment', () => {
  let element,
    page;

  it('renders', async () => {
    page = await newE2EPage();
    await page.setContent(`<lyne-timetable-segment config='${config}'></lyne-timetable-segment>`);

    element = await page.find('lyne-timetable-segment');
    expect(element)
      .toHaveClass('hydrated');
  });

});
