import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
    private cartItems = this.page.locator('.cart_item');
    private removeButton = this.page.locator('[data-test^="remove-"]');
    private checkoutButton = this.page.locator('[data-test="checkout"]');

    async removeItem(index: number) {
        await this.removeButton.nth(index).click();
    }

    async getItemCount() {
        return this.cartItems.count();
    }

    async checkout() {
        await this.checkoutButton.click();
    }
}
