import { test, expect } from '@playwright/test';

const testData = [
  { username: 'standard_user', password: 'secret_sauce', expected: 'success' },
  { username: 'locked_out_user', password: 'secret_sauce', expected: 'locked' },
  { username: 'problem_user', password: 'secret_sauce', expected: 'success' },
  { username: 'performance_glitch_user', password: 'secret_sauce', expected: 'success' },
  { username: 'error_user', password: 'secret_sauce', expected: 'success' },
  { username: 'visual_user', password: 'secret_sauce', expected: 'success' },
];

//Validate the number of user accounts listed on the page
test('User Count', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const text = await page.locator('#login_credentials').innerText();
  const usernames = text
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && line !== 'Accepted usernames are:');

  expect(usernames.length).toBe(6);
  console.log('Usernames:', usernames);
});


/*
Uses data driven testing to run the same test using different credentials
*/
test.describe('Data-Driven Login Tests', () => {
  for (const data of testData) {
    test(`Login with ${data.username}`, async ({ page }) => {
      await page.goto('https://www.saucedemo.com/');
      await page.fill('#user-name', data.username);
      await page.fill('#password', data.password);
      await page.click('#login-button');

      if (data.expected === 'success') {
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
      } else if (data.expected === 'locked') {
        await expect(page.locator('[data-test="error"]')).toBeVisible();
      }
    });
  }
});