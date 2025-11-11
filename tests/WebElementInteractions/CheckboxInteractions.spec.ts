import { test, expect } from "playwright/test";

test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Starting test: ${testInfo.title}`);
});

test.afterEach(async ({ page }, testInfo) => {
    console.log(`Test Completed: ${testInfo.title}`);
});

/*
Test to handle Checkbox Interaction
- Opens webpage
- Clicks on checkbox
- Validates state change
*/
test('Single Checkbox Interactions', async({page}) => {
    //Open JQuery web page
    await page.goto(`${process.env.JQUERY_URL}`);
    
    //Click on Checkboxradio link on the side widget
    await page.locator('text=Checkboxradio').last().click();

    //Click on 1 checkbox
    const demoFrame = await page.frameLocator('.demo-frame');
    await demoFrame.locator('label[for="checkbox-1"]').click();

    //Validate checkbox-1 is checked
    expect(await demoFrame.locator('label[for="checkbox-1"]').isChecked()).toBe(true);
});

/*
Test to handle multiple Checkbox Interaction
- Opens webpage
- Clicks on different checkboxes
- Validates state changes
*/
test('Multiple Checkbox Interactions', async({page}) => {
    //Open JQuery web page
    await page.goto(`${process.env.JQUERY_URL}`);
    
    //Click on Checkboxradio link on the side widget
    await page.locator('text=Checkboxradio').last().click();

    //Click on 2 checkboxes
    const demoFrame = page.frameLocator('.demo-frame');
    await demoFrame.locator('label[for="checkbox-1"]').click();
    await demoFrame.locator('label[for="checkbox-4"]').click();

    //Validate both checkboxes are checked
    expect(await demoFrame.locator('label[for="checkbox-1"]').isChecked()).toBe(true);
    expect(await demoFrame.locator('label[for="checkbox-4"]').isChecked()).toBe(true);
});

/*
Test to handle Radiobutton Interaction
- Opens webpage
- Clicks on specific radio buttons
- Validates state change
*/
test('Radio Button Interactions', async({page}) => {
    //Open JQuery web page
    await page.goto(`${process.env.JQUERY_URL}`);
    
    //Click on Checkboxradio link on the side widget
    await page.locator('text=Checkboxradio').last().click();

    //Click on a radio button
    const demoFrame = page.frameLocator('.demo-frame');
    await demoFrame.locator('label[for="radio-1"]').click();

    //Validate radio-1 is checked
    expect(await demoFrame.locator('label[for="radio-1"]').isChecked()).toBeTruthy();

    //Validate user can select a differnt radio buttons
    //Click on a radio button
    await demoFrame.locator('label[for="radio-3"]').click();

    //Validate radio-3 is checked
    expect(await demoFrame.locator('label[for="radio-3"]').isChecked()).toBeTruthy();
    //Validate radio-1 is no longer checked
    expect(await demoFrame.locator('label[for="radio-1"]').isChecked()).toBeFalsy();
});
