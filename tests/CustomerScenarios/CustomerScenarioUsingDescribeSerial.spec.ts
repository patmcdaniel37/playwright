import {test, expect} from '@playwright/test';

/*
Customer scenaio:
Customer logs in
Selects an item
Puts it in the cart
Enters shipping info
Completes the order
*/
test.describe.serial('Customer Flow', () => {
    test('Customer SignIn', async ({page}) => {
        //Launch https://www.saucedemo.com/
        await page.goto(`${process.env.SAUCE_DEMO_URL}`);
        // Enter username
        await page.getByPlaceholder('Username').fill(`${process.env.STANDARD_USER}`);
        // Enter password
        await page.getByPlaceholder('Password').fill(`${process.env.PASSWORD}`);
        // Click login button
        await page.getByRole('button', {name: 'Login'}).click();
    });

    //Put item in cart and review cart
    test('Add Item to Cart', async ({page}) => {
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click(); 
        await page.locator('[data-test="checkout"]').click();
    });

    //Complete the order
    test('Enter shipping info and complete order', async ({page}) => {
        await page.locator('[data-test="firstName"]').fill(`${process.env.USER_FIRST_NAME}`);
        await page.locator('[data-test="lastName"]').fill(`${process.env.USER_LAST_NAME}`);
        await page.locator('[data-test="postalCode"]').fill(`${process.env.ZIP_CODE}`);
        await page.locator('[data-test="continue"]').click();
        await page.locator('[data-test="finish"]').click();
    });

    //Logout
    test('Logout of site', async({page})=> {
        await page.click('#react-burger-menu-btn');
        await page.click('#logout_sidebar_link');    
    });
});