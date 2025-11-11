import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Starting test: ${testInfo.title}`);
});

test.afterEach(async ({ page }, testInfo) => {
    console.log(`Test Completed: ${testInfo.title}`);
});

/*
Tests when the authentication is done using a browser popup and not an element on the page
*/
test('Test 1 - User Can Successfully Log In', {tag : ['@Critical']}, async ({browser}) => {
    //sets the expectations for the new popup page
    const context = await browser.newContext({
        httpCredentials: {
        username: 'admin',
        password: 'admin'
        }
    });

    //launches the page and uses the information in 'context' to interact with the popup
    const page = await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/digest_auth');
    await expect(page.locator('h3:has-text("Digest Auth")')).toBeVisible();
    await expect(page.locator('p:has-text("Congratulations! You must have the proper credentials.")')).toBeVisible();
});

