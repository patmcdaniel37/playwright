import { expect, Page } from '@playwright/test';
import { BasePage } from '../BasePage';

export class ConfirmationPage extends BasePage {
    private completeHeader = this.page.locator('.complete-header');

    async expectOrderComplete() {
        await expect(this.completeHeader).toBeVisible();
        await expect(this.completeHeader).toHaveText('Thank you for your order!');
    }
}
