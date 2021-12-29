import { newE2EPage } from '@stencil/core/testing';

describe('lyne-datepicker-navigation', () => {
  let element,
    page;

  it('renders', async () => {
    page = await newE2EPage();
    await page.setContent('<lyne-datepicker-navigation></lyne-datepicker-navigation>');

    element = await page.find('lyne-datepicker-navigation');
    expect(element)
      .toHaveClass('hydrated');
  });

});
