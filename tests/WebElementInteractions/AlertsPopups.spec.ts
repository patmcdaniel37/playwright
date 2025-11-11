import { test, expect } from '@playwright/test';

/*
Test to handle Web page alerts/popups/prompts
- Opens webpage
- Validates the dialog type
- Validates the dialog message
*/
test('Handling Alert popups in Playwright ', async ({ page }) => {
    // Go to URL that has alerts
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', dialog =>{
        console.log(`Dialog type is : ${dialog.type()}`);
        //validate alert type
        expect(dialog.type()).toBe('alert');
        console.log(`Alert message is : ${dialog.message()}`);
        //validate alert message
        expect (dialog.message()).toBe('Sample alert');
        dialog.accept();
   })
    await page.getByText('See an example alert', {exact : true}).click();
});

/*
Test to handle Web page alerts/popups/prompts
- Opens webpage
- Validates the dialog type
- Validates the dialog message
*/
test('Handling Confirm Popups in Playwright ', async ({ page }) => {
    // Go to URL that has alerts
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', dialog =>{
        console.log(`Dialog type is : ${dialog.type()}`);
        //validate alert type
        expect(dialog.type()).toBe('confirm');
        console.log(`Popup message is : ${dialog.message()}`);
        //validate popup message
        expect (dialog.message()).toBe('Are you sure?');
        dialog.accept();
    })
    await page.getByText('See a sample confirm', {exact : true}).click();
});

/*
Test to handle Web page alerts/popups/prompts
- Opens webpage
- Validates the dialog type
- Validates the dialog message
*/
test('Handling Prompt Popups in Playwright ', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', async(dialog) =>{
        console.log(`Dialog type is : ${dialog.type()}`);
        //validate alert type
        expect(dialog.type()).toBe('prompt');
        console.log(`Prompt popup message is : ${dialog.message()}`);
        //validate popup message
        expect (dialog.message()).toBe('What is your tool of choice?');
        //validate ablilty to enter text
        await dialog.accept('playwright');
        })
    await page.getByText('See a sample prompt', {exact : true}).click();
});