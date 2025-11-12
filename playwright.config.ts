import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',

  /* Maximum time one test can run for. */
  timeout: 1 * 30 * 1000, //30 seconds

  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
  ['html'],
  // ['list'],
  // ['dot'],
  ['json', { outputFile: 'playwright-report/json-test-results.json' }], 
  ['junit', { outputFile: 'playwright-report/junit-test-results.xml' }],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless: true,
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on', //'on-first-retry',
    screenshot: 'on', //'only-on-failure',  //:Collect screenshot only on test failure
    testIdAttribute: 'data-tab-item',  //:Custom Test ID Attribute
    video: 'on', //'retain-on-failure',
  },

  projects: [
    // Linux: Chrome and Firefox
    {
      name: 'Chrome on Linux',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
    {
      name: 'Firefox on Linux',
      use: { ...devices['Desktop Firefox'] },
    },

    // Mac: Chrome and Safari
    {
      name: 'Chrome on Mac',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
    {
      name: 'Safari on Mac',
      use: { ...devices['Desktop Safari'] },
    },

    // Windows: Chrome and Edge
    {
      name: 'Chrome on Windows',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
    {
      name: 'Edge on Windows',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
