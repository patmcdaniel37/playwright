# Playwright Test Automation Portfolio

A Playwright test automation project demonstrating various testing techniques, patterns, and practices for web application testing.

## 📋 Overview

This project showcases my ability to utilize Playwright test automation through a diverse collection of test scenarios covering API testing, web element interactions, authentication flows, visual regression testing, and end-to-end user journeys. The tests are organized by functionality and demonstrate practical, real-world testing scenarios.

## 🚀 Features & Test Scenarios

### API Testing
- **GET Requests**: Testing API endpoints and response validation
- **POST Requests**: Testing data submission and creation
- **Authentication Headers**: Testing API calls with authorization tokens
- **Response Validation**: Status code and JSON body validation

### Web Element Interactions
- **Alerts & Popups**: Handling JavaScript alerts, confirms, and prompts
- **Checkbox Interactions**: Testing checkbox selection and validation
- **Drag and Drop**: Implementing drag-and-drop functionality tests
- **Dropdown Menus**: Testing dropdown selections and interactions
- **File Upload/Download**: Testing file upload and download functionality
- **Hidden Elements**: Working with hidden and visible elements
- **Browser Tab Interactions**: Managing multiple browser tabs and windows

### Authentication & Sign-In
- **Login Flows**: Positive and negative login test scenarios
- **Data-Driven Testing (DDT)**: Testing multiple user accounts with different credentials
- **Popup Authentication**: Handling authentication popups
- **Session Management**: Testing login, logout, and session handling

### Visual Regression Testing
- **Screenshot Comparisons**: Full page and element-level screenshot validation
- **Visual Diff Testing**: Comparing visual changes with thresholds and pixel tolerance
- **Viewport Testing**: Testing across different viewport sizes

### Customer Scenarios & E2E Testing
- **End-to-End User Journeys**: Complete customer flows from login to checkout
- **Page Object Model (POM)**: Implementing POM pattern with BasePage and organized page-specific classes by application (e.g., SauceDemo/)
- **Serial Test Execution**: Running dependent tests in sequence using `test.describe.serial`
- **Test Steps**: Organizing complex scenarios into reusable test steps
- **Shopping Cart Workflows**: Testing add-to-cart, checkout, and order completion

## 🛠️ Technologies & Tools

- **Playwright**: Modern end-to-end testing framework
- **TypeScript**: Type-safe test development
- **Node.js**: Runtime environment
- **dotenv**: Environment variable management
- **CSV Parser**: Data-driven testing with CSV files
- **Playwright Extra**: Enhanced Playwright capabilities
- **Stealth Plugin**: Advanced browser automation features

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd playwright
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

4. **Create environment file**
   Create a `.env` file in the root directory with the following variables:
   ```env
   SAUCE_DEMO_URL=https://www.saucedemo.com/
   STANDARD_USER=standard_user
   PASSWORD=secret_sauce
   INVALID_USER=invalid_user
   USER_FIRST_NAME=John
   USER_LAST_NAME=Doe
   ZIP_CODE=12345
   JQUERY_URL=https://jqueryui.com/
   ```

## 🧪 Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in a specific directory
```bash
npx playwright test tests/API\ Test
npx playwright test tests/WebElementInteractions
npx playwright test tests/WebPageSignIn
```

### Run tests with specific tags
```bash
npx playwright test --grep @SmokeTest
```

### Run tests in headed mode (with browser UI)
```bash
npx playwright test --headed
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

### Generate test report
```bash
npx playwright show-report
```

## 📁 Project Structure

```
playwright/
├── pages/                            # Page Object Model classes
│   ├── BasePage.ts                   # Base page class with common methods
│   └── SauceDemo/                    # SauceDemo application page objects
│       ├── LoginPage.ts              # Login page object
│       ├── ProductPage.ts            # Products page object
│       ├── CartPage.ts               # Shopping cart page object
│       ├── CheckoutPage.ts           # Checkout page object
│       └── ConfirmationPage.ts       # Order confirmation page object
├── tests/
│   ├── API Test/
│   │   └── APITest.spec.ts          # API testing scenarios
│   ├── CustomerScenarios/
│   │   ├── CustomerScenarioUsingPOM.spec.ts
│   │   ├── CustomerScenarioUsingDescribeSerial.spec.ts
│   │   └── CustomerScenarioUsingTestSteps.spec.ts
│   ├── TestingWithScreenshots/
│   │   └── ValidateScreenshot.spec.ts
│   ├── WebElementInteractions/
│   │   ├── AlertsPopups.spec.ts
│   │   ├── CheckboxInteractions.spec.ts
│   │   ├── DragAndDrop.spec.ts
│   │   ├── DropdownMenu.spec.ts
│   │   ├── FileUploadDownload.spec.ts
│   │   └── WebElementHidden.spec.ts
│   └── WebPageSignIn/
│       ├── Authentication/
│       │   ├── Authentication.spec.ts
│       │   ├── AuthenticationUsingDDT.spec.ts
│       │   └── AuthenticationUsingPopup.spec.ts
│       └── BrowserTabInteractions/
│           └── BrowserTabInteractions.spec.ts
├── playwright.config.ts             # Playwright configuration
├── package.json                     # Project dependencies
└── README.md                        # Project documentation
```

## 🎯 Key Testing Skills Covered

- ✅ **Page Object Model** patterns
- ✅ **Data-Driven Testing** with arrays and CSV files
- ✅ **Test Organization** using describe blocks and serial execution
- ✅ **Environment Configuration** with dotenv
- ✅ **Visual Regression Testing** with screenshot comparison
- ✅ **API Testing** with request context
- ✅ **Cross-browser Testing** configuration
- ✅ **Test Reporting** with HTML, JSON, and JUnit reporters
- ✅ **Test Tagging** for test categorization and filtering
- ✅ **Element Locators** (CSS, XPath, role-based, text-based)
- ✅ **Async/Await** patterns for test execution
- ✅ **Fixtures** and test isolation
- ✅ **Screenshot and Video** capture on test failure
- ✅ **Trace Viewer** for debugging failed tests

## 📊 Test Reports

The project generates multiple test report formats:
- **HTML Report**: Interactive HTML report with test results
- **JSON Report**: Machine-readable JSON test results
- **JUnit XML**: CI/CD integration compatible XML report

Reports are generated in the `playwright-report/` directory after test execution.

## 🔧 Configuration

The Playwright configuration (`playwright.config.ts`) includes:
- Test timeout settings (30 seconds)
- Retry logic (1 retry locally, 2 on CI)
- Multiple reporters (HTML, JSON, JUnit)
- Screenshot and video capture settings
- Trace collection for debugging
- Custom test ID attributes
- Browser configuration (Chrome)

## 📝 Notes

- Tests use environment variables for sensitive data and URLs
- Tests are configured to run in headed mode by default (can be changed in config)
- Screenshots and videos are captured for debugging purposes
- Tests are organized by functionality for easy maintenance

## 🤝 Contributing

This is a learning/refresher project for Playwright test automation. Feel free to use it as a reference or learning resource.

## 📄 License

ISC

---

**Author**: Pat McDaniel  
**Purpose**: Refreshing usage of Playwright test automation since it's been a minute since I've used it

