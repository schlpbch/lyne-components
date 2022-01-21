import { newE2EPage } from '@stencil/core/testing';

describe('lyne-timetable-segment', () => {
  let element,
    page;

  it('renders', async () => {
    page = await newE2EPage();
    await page.setContent('<lyne-timetable-segment></lyne-timetable-segment>');

    element = await page.find('lyne-timetable-segment');
    expect(element)
      .toHaveClass('hydrated');
  });

});
