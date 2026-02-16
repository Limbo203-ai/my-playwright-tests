# Playwright Testing with GitHub Actions

A complete setup for running Playwright end-to-end tests with GitHub Actions CI/CD.

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git
- GitHub account

## 🚀 Quick Start

### 1. Clone or Initialize Repository

```bash
git clone <your-repo-url>
cd <your-repo-name>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Playwright Browsers

```bash
npx playwright install
```

### 4. Run Tests Locally

```bash
# Run all tests
npm test

# Run tests in headed mode (see browser)
npm run test:headed

# Run tests in UI mode (interactive)
npm run test:ui

# Run tests in debug mode
npm run test:debug

# Run specific browser
npm run test:chromium
npm run test:firefox
npm run test:webkit
```

## 📁 Project Structure

```
.
├── .github/
│   └── workflows/
│       └── playwright-workflow.yml  # GitHub Actions workflow
├── tests/
│   └── example.spec.js              # Example test file
├── playwright.config.js             # Playwright configuration
├── package.json                     # Project dependencies
├── .gitignore                       # Git ignore rules
└── README.md                        # This file
```

## ⚙️ GitHub Actions Setup

### Step 1: Create Workflow Directory

The workflow file should be placed at:
```
.github/workflows/playwright-workflow.yml
```

### Step 2: Push to GitHub

```bash
git add .
git commit -m "Add Playwright tests with GitHub Actions"
git push origin main
```

### Step 3: Verify Workflow

1. Go to your GitHub repository
2. Click on the "Actions" tab
3. You should see the "Playwright Tests" workflow
4. It will run automatically on push/pull requests to main branch

## 🎯 Workflow Features

The GitHub Actions workflow includes:

- ✅ Runs on Ubuntu latest
- ✅ Tests on Node.js 20
- ✅ Caches npm dependencies for faster builds
- ✅ Installs Playwright browsers with dependencies
- ✅ Runs all Playwright tests
- ✅ Uploads test reports and results as artifacts
- ✅ Keeps artifacts for 30 days
- ✅ Manual trigger option (workflow_dispatch)

## 📊 Viewing Test Results

After tests run in GitHub Actions:

1. Go to the Actions tab in your repository
2. Click on the workflow run
3. Scroll down to "Artifacts"
4. Download:
   - `playwright-report` - HTML test report
   - `test-results` - Raw test results and screenshots/videos

## 🔧 Configuration

### Change Base URL

Edit `playwright.config.js`:

```javascript
use: {
  baseURL: 'https://your-website.com',
}
```

Or set environment variable in GitHub Actions:
```yaml
- name: Run Playwright tests
  env:
    BASE_URL: 'https://your-website.com'
  run: npx playwright test
```

### Change Browsers to Test

Edit `playwright.config.js` to enable/disable browsers:

```javascript
projects: [
  { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  { name: 'webkit', use: { ...devices['Desktop Safari'] } },
]
```

### Add More Tests

Create new test files in the `tests/` directory:

```javascript
// tests/my-feature.spec.js
import { test, expect } from '@playwright/test';

test('my feature test', async ({ page }) => {
  await page.goto('/');
  // Your test code here
});
```

## 🐛 Troubleshooting

### Tests fail in CI but pass locally

- Check if BASE_URL is set correctly
- Ensure all dependencies are listed in package.json
- Check browser compatibility

### Workflow doesn't trigger

- Verify the workflow file is in `.github/workflows/`
- Check that you're pushing to the correct branch (main/master)
- Ensure the YAML syntax is correct

### Playwright browsers not installing

- Make sure `npx playwright install --with-deps` is in your workflow
- Check Ubuntu version compatibility

## 📝 Writing Tests

### Basic Test Structure

```javascript
import { test, expect } from '@playwright/test';

test('test description', async ({ page }) => {
  // Navigate to page
  await page.goto('/');
  
  // Interact with elements
  await page.click('button');
  await page.fill('input', 'text');
  
  // Assert expectations
  await expect(page).toHaveTitle('Expected Title');
  await expect(page.locator('h1')).toBeVisible();
});
```

### Common Actions

```javascript
// Navigation
await page.goto('https://example.com');

// Clicking
await page.click('button#submit');

// Typing
await page.fill('input[name="email"]', 'test@example.com');

// Waiting
await page.waitForSelector('.result');

// Taking screenshots
await page.screenshot({ path: 'screenshot.png' });
```

## 🎨 Advanced Features

### Test with Authentication

```javascript
test.use({
  storageState: 'auth.json'
});

test('authenticated test', async ({ page }) => {
  // User is already logged in
});
```

### Parallel Execution

Playwright runs tests in parallel by default. Control this in `playwright.config.js`:

```javascript
workers: process.env.CI ? 1 : 4
```

### Visual Regression Testing

```javascript
await expect(page).toHaveScreenshot('homepage.png');
```

## 📚 Resources

- [Playwright Documentation](https://playwright.dev)
- [GitHub Actions Documentation](https://docs.github.com/actions)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add your tests
4. Push and create a Pull Request

## 📄 License

ISC
