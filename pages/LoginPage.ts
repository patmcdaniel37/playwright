import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private usernameInput = this.page.getByPlaceholder('Username');
  private passwordInput = this.page.getByPlaceholder('Password');
  private loginButton = this.page.getByRole('button', { name: 'Login' });
  private errorMessage = this.page.locator('#login_button_container .error-message-container');

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectError(message: string) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText(message);
  }
}
