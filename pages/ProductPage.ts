import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
    private addToCartButton = this.page.locator('[data-test^="add-to-cart"]');
    private shoppingCartLink = this.page.locator('[data-test="shopping-cart-link"]');
    private productSort = this.page.locator('[data-test="product_sort_container"]');

    async addItemToCart(index: number) {
        await this.addToCartButton.nth(index).click();
    }

    async openCart() {
        await this.shoppingCartLink.click();
    }

    async sortProducts(option: string) {
        await this.productSort.selectOption(option);
    }

    async expectProductCount(count: number) {
        await expect(this.addToCartButton).toHaveCount(count);
    }
}
