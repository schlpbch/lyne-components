import { newE2EPage } from '@stencil/core/testing';

describe('lyne-savings-label', () => {
  let element,
    page;

  it('renders', async () => {
    page = await newE2EPage();
    await page.setContent('<lyne-savings-label></lyne-savings-label>');

    element = await page.find('lyne-savings-label');
    expect(element)
      .toHaveClass('hydrated');
  });

});
