import { test } from '@playwright/test';
import { LoginPage } from '../../pages/SauceDemo/LoginPage';
import { ProductsPage } from '../../pages/SauceDemo/ProductPage';
import { CartPage } from '../../pages/SauceDemo/CartPage';
import { CheckoutPage } from '../../pages/SauceDemo/CheckoutPage';
import { ConfirmationPage } from '../../pages/SauceDemo/ConfirmationPage';

test('Complete purchase flow', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const confirmationPage = new ConfirmationPage(page);

    await loginPage.navigate('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce');

    await productsPage.addItemToCart(0);
    await productsPage.openCart();

    await cartPage.checkout();

    await checkoutPage.enterShippingInfo('John', 'Doe', '12345');
    await checkoutPage.continue();
    await checkoutPage.finish();

    await confirmationPage.expectOrderComplete();
});