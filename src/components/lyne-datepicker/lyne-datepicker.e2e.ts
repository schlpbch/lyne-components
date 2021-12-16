import { newE2EPage } from '@stencil/core/testing';

describe('lyne-datepicker', () => {
  let element,
    page;

  it('renders', async () => {
    page = await newE2EPage();
    await page.setContent('<lyne-datepicker></lyne-datepicker>');

    element = await page.find('lyne-datepicker');
    expect(element)
      .toHaveClass('hydrated');
  });

});
