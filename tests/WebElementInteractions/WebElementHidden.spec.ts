import {test, expect} from '@playwright/test';

/*
Test to validate Visible/Hidden web element
- Opens webpage
- Select element to make an element visible
- Validatation the hidden item is now visible
*/
test('Web Element Visible/Hidden', async({page}) =>{
    await page.goto(`${process.env.THE_INTERNET_URL}`);
    await page.locator('text=Dynamic Loading').click();
    await page.getByText('Example 1: Element on page that is hidden').click();
    await page.getByRole('button', {'name': 'start'}).click();
    expect(await page.locator('#finish').isVisible({timeout: 10}));
    expect(page.locator('text=Hello World!').isVisible());
})


