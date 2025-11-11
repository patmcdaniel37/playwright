import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Starting test: ${testInfo.title}`);
});

test.afterEach(async ({ page }, testInfo) => {
    console.log(`Test Completed: ${testInfo.title}`);
});

test.beforeEach(async ({page}) => {
    // Go to URL that has alerts
    console.log(`Opening ${process.env.THE_INTERNET_URL_HEROKUAPP}`)
    await page.goto(`${process.env.THE_INTERNET_URL_HEROKUAPP}`);
    await page.locator('text=JavaScript Alerts').click();
});

test.afterEach(async ({page}) => {
    console.log('Test Completed');
});

/*
Test to handle Web page alerts/popups/prompts
- Opens webpage
- Validates the dialog type
- Validates the dialog message
*/
test('Handling Alert popups in Playwright ', async ({ page }) => {
    //Set up the listener to 'listen' for the Alert popup
    page.once('dialog', dialog =>{
        console.log(`Dialog type is : ${dialog.type()}`);
        //validate alert type
        expect(dialog.type()).toBe('alert');
        console.log(`Alert message is : ${dialog.message()}`);
        //validate alert message
        expect (dialog.message()).toBe('I am a JS Alert');
        dialog.accept();
   })

    //Click button to trigger JS Prompt popup
    await page.locator('text=Click for JS Alert').click();
});

/*
Test to handle Web page alerts/popups/prompts
- Opens webpage
- Validates the dialog type
- Validates the dialog message
*/
test('Handling Confirm Popups in Playwright ', async ({ page }) => {
    //Set up the listener to 'listen' for the Confirm popup
    page.once('dialog', dialog =>{
        console.log(`Dialog type is : ${dialog.type()}`);
        //validate alert type
        expect(dialog.type()).toBe('confirm');
        console.log(`Popup message is : ${dialog.message()}`);
        //validate popup message
        expect (dialog.message()).toBe('I am a JS Confirm');
        dialog.accept();
    })

    //Click button to trigger JS Prompt popup
    await page.locator('text=Click for JS Confirm').click();
});

/*
Test to handle Web page alerts/popups/prompts
- Opens webpage
- Validates the dialog type
- Validates the dialog message
*/
test('Handling Prompt Popups in Playwright ', async ({ page }) => {
    //Set up the listener to 'listen' for the Prmopt popup
    page.once('dialog', async(dialog) =>{
        console.log(`Dialog type is : ${dialog.type()}`);
        //validate alert type
        expect(dialog.type()).toBe('prompt');
        console.log(`Prompt popup message is : ${dialog.message()}`);
        //validate popup message
        expect (dialog.message()).toBe('I am a JS prompt');
        //validate ablilty to enter text
        await dialog.accept('playwright');
        })

    //Click button to trigger JS Prompt popup
    await page.locator('text=Click for JS Prompt').click();
});