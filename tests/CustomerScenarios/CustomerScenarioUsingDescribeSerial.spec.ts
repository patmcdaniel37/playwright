import { test, expect, Page } from '@playwright/test';

let page: Page;
test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Starting test: ${testInfo.title}`);
});

test.afterEach(async ({ page }, testInfo) => {
    console.log(`Test Completed: ${testInfo.title}`);
});

test.describe.serial('Customer Flow', () => {
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        console.log('Starting Customer Flow test');
    });

    test.afterAll(async () => {
        await page.close();
    });

    console.log('Logging In');
    test('Customer SignIn', async () => {
        await page.goto(`${process.env.SAUCE_DEMO_URL}`);
        await page.getByPlaceholder('Username').fill(`${process.env.STANDARD_USER}`);
        await page.getByPlaceholder('Password').fill(`${process.env.PASSWORD}`);
        await page.getByRole('button', { name: 'Login' }).click();
    });

    console.log('Adding item to cart');
    test('Add Item to Cart', async () => {
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    })

    console.log('Reviewing cart');
    test('Review and checkout out shopping cart', async()=>{
        await page.locator('[data-test="shopping-cart-link"]').click();
        await page.locator('[data-test="checkout"]').click();
    });

    console.log('Enter shipping info and completing order');
    test('Enter shipping info and complete order', async () => {
        await page.locator('[data-test="firstName"]').fill(`${process.env.USER_FIRST_NAME}`);
        await page.locator('[data-test="lastName"]').fill(`${process.env.USER_LAST_NAME}`);
        await page.locator('[data-test="postalCode"]').fill(`${process.env.ZIP_CODE}`);
        await page.locator('[data-test="continue"]').click();
        await page.locator('[data-test="finish"]').click();
    });

    //Logout
    console.log('Logging out')
    test('Logout of site', async () => {
        await page.click('#react-burger-menu-btn');
        await page.click('#logout_sidebar_link');
    });
});
