import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Starting test: ${testInfo.title}`);
});

test.afterEach(async ({ page }, testInfo) => {
    console.log(`Test Completed: ${testInfo.title}`);
});

/*
Test to handle browser tabs
- Opens multiple browser tab
- Validates tabs open and have the right titles
*/
test.describe('Multiple Tabs/Browser Tests', () => {
    test('Open Mutiple Tabs', {tag : ['@Regression']}, async({browser})=> {

        const context = await browser.newContext();
        const firstTab = await context.newPage();

        firstTab.goto(`${process.env.SAUCE_DEMO_URL}`);
        await expect(firstTab).toHaveTitle(`${process.env.SAUCE_DEMO_TAB_NAME}`);

        const secondTab = await context.newPage();
        await secondTab.goto(`${process.env.JQUERY_URL}`);
        await expect(secondTab).toHaveTitle(`${process.env.JQUERY_TAB_NAME}`);

    })

    /*
    Test to handle browsers sessions
    - Opens multiple browsers
    - Validates tabs open and have the right titles
    */
    test('Open Multiple Windows', {tag : ['@Regression']}, async({page, browser})=>{
    
        await page.goto(`${process.env.SAUCE_DEMO_URL}`);
        await expect(page).toHaveTitle(`${process.env.SAUCE_DEMO_TAB_NAME}`);

        const secondBrowser = await browser.newPage();
        await secondBrowser.goto(`${process.env.JQUERY_URL}`);
        await expect(secondBrowser).toHaveTitle(`${process.env.JQUERY_TAB_NAME}`);
    })
});

