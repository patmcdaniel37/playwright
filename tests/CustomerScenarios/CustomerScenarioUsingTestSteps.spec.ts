import {test, expect} from '@playwright/test';
import { before } from 'node:test';

/*
Customer scenaio:
Customer logs in
Selects an item
Puts it in the cart
Enters shipping info
Completes the order
*/
test('Customer Workflow', async ({page}) => {
    await test.step('Open URL', async()=> {
        //Launch https://www.saucedemo.com/
        await page.goto(`${process.env.SAUCE_DEMO_URL}`);

    });
    await test.step('Login using Credentials', async()=>{
        // Enter username
        await page.getByPlaceholder('Username').fill(`${process.env.STANDARD_USER}`);
        // Enter password
        await page.getByPlaceholder('Password').fill(`${process.env.PASSWORD}`);
        // Click login button
        await page.getByRole('button', {name: 'Login'}).click();
    });

    await test.step('Add item to cart', async()=>{
    //Put item in cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    });

    /*
    Checkout out process:
        Review cart and checkout
            Click Shopping cart icon
            Click Checkout button
        Enter Shipping info and complete order
            Enter shipping info
            Click Continue button
            Click Finish button
    */  
    await test.step('Review and checkout out shopping cart', async()=>{
        await page.locator('[data-test="shopping-cart-link"]').click(); 
        await page.locator('[data-test="checkout"]').click();
    });

    await test.step('Enter shipping info and complete order', async()=>{
        await page.locator('[data-test="firstName"]').fill(`${process.env.USER_FIRST_NAME}`);
        await page.locator('[data-test="lastName"]').fill(`${process.env.USER_LAST_NAME}`);
        await page.locator('[data-test="postalCode"]').fill(`${process.env.ZIP_CODE}`);
        await page.locator('[data-test="continue"]').click();
        await page.locator('[data-test="finish"]').click();
    });

    //Logout
    await test.step('Logout of site', async()=> {
        await page.click('#react-burger-menu-btn');
        await page.click('#logout_sidebar_link');    
    })
});
