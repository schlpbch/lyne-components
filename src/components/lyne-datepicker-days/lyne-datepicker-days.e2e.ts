import { newE2EPage } from '@stencil/core/testing';

describe('lyne-datepicker-days', () => {
  let element,
    page;

  it('renders', async () => {
    page = await newE2EPage();
    await page.setContent('<lyne-datepicker-days></lyne-datepicker-days>');

    element = await page.find('lyne-datepicker-days');
    expect(element)
      .toHaveClass('hydrated');
  });

});
