import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    // Launching the SAUCE DEMO PAGE
    console.log('Launching the SAUCE DEMO PAGE');
    await page.goto(`${process.env.SAUCE_DEMO_URL}`);
});

/* Runs a user log in scenario test in order
    User can successfully log in
    User can not log in using an invalid name
    User can not log in using an invalid password
    User can log out of a session
*/
test.describe('Login Tests', () => {
    test('Test 1 - User Can Successfully Log In',{ tag : ['@SmokeTest']}, async ({page}) => {

        // Enter username
        await page.getByPlaceholder('Username').fill(`${process.env.STANDARD_USER}`);
        // Enter password
        await page.getByPlaceholder('Password').fill(`${process.env.PASSWORD}`);
        // Click login button
        await page.getByRole('button', {name: 'Login'}).click();

        // Verify successful login by checking for presence of Products title
        expect(page.locator('span.title[data-test="title"]')).toHaveText('Products');
    });

    test('Test 2 - User Cannot Log In with Invalid USER NAME', {tag : ['@SmokeTest']}, async ({page}) => {

        // Enter invalid username
        await page.getByPlaceholder('Username').fill(`${process.env.INVALID_USER}`);
        // Enter valid password
        await page.getByPlaceholder('Password').fill(`${process.env.PASSWORD}`);
        // Click login button
        await page.getByRole('button', {name: 'Login'}).click();

        // Verify correct error message is displayed
        await expect(page.locator('h3[data-test="error"]')).toBeVisible();
        await expect(page.locator('h3[data-test="error"]'))
        .toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    test('Test 3 - User Cannot Log In with Invalid PASSWORD', {tag : ['@SmokeTest']}, async ({page}) => {

        // Enter valid username
        await page.getByPlaceholder('Username').fill(`${process.env.STANDARD_USER}`);
        // Enter invalid password
        await page.getByPlaceholder('Password').fill('INVALID_PASSWORD');
        // Click login button
        await page.getByRole('button', {name: 'Login'}).click();

        // Verify correct error message is displayed
        await expect(page.locator('h3[data-test="error"]')).toBeVisible();
        await expect(page.locator('h3[data-test="error"]'))
        .toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    test('Test 4 - User Can Logout of Session', {tag : ['@SmokeTest']}, async ({page}) => {

        // Enter valid username
        await page.getByPlaceholder('Username').fill(`${process.env.STANDARD_USER}`);
        // Enter valid password
        await page.getByPlaceholder('Password').fill(`${process.env.PASSWORD}`);
        // Click login button
        await page.getByRole('button', {name: 'Login'}).click();

        // Verify user can log out of session
        await page.click('#react-burger-menu-btn');
        await page.click('#logout_sidebar_link');
    });
});


