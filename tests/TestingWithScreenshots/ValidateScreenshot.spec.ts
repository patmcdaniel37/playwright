import{test, expect} from '@playwright/test';

test('Test 1 Visual Comparison Tests in Playwright', {tag : ['@SmokeTest']}, async({page}) =>{
    console.log('Starting Test to validate screenshots - whole page')
    await page.goto('https://www.github.com/login');
    await expect(page).toHaveScreenshot('github-login-page.png');
    await page.fill('input[name="login"]', 'myUsername');
    await expect(page).toHaveScreenshot('github-login-filled.png');
});

test('Test 2 Element Visual Comparison Tests in Playwright', {tag : ['@SmokeTest']}, async({page}) =>{ 
    console.log('Starting Test to validate screenshots - partial page')
    await page.setViewportSize({ width: 1280, height: 720 })
    await page.goto('https://www.github.com/login');
    await expect(page).toHaveScreenshot('github-login-page.png');
    const element = page.locator('[class="authentication-body authentication-body--with-form new-session"]');
    await expect(element).toHaveScreenshot('github-login-form.png',
        {maxDiffPixels: 500, threshold: 0.1});
    await page.fill('input[name="login"]', 'myUsername');
    await expect(element).toHaveScreenshot('github-login-form.png');
});
