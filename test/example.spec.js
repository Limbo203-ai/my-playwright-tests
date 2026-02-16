import { test, expect } from '@playwright/test';

test.describe('Example Tests', () => {
  
  test('homepage has correct title', async ({ page }) => {
    // Navigate to your website
    await page.goto('/');
    
    // Expect the page to have a title
    await expect(page).toHaveTitle(/Example/);
  });

  test('can navigate to different pages', async ({ page }) => {
    await page.goto('/');
    
    // Click on a link (adjust selector based on your site)
    // await page.click('a[href="/about"]');
    
    // Wait for navigation
    // await page.waitForURL('**/about');
    
    // Assert something about the new page
    // await expect(page.locator('h1')).toContainText('About');
  });

  test('form submission works', async ({ page }) => {
    await page.goto('/');
    
    // Fill out a form (adjust selectors based on your site)
    // await page.fill('input[name="email"]', 'test@example.com');
    // await page.fill('input[name="password"]', 'password123');
    // await page.click('button[type="submit"]');
    
    // Assert success
    // await expect(page.locator('.success-message')).toBeVisible();
  });

  test('responsive layout works', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check mobile menu is visible
    // await expect(page.locator('.mobile-menu')).toBeVisible();
    
    // Test desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    
    // Check desktop navigation is visible
    // await expect(page.locator('.desktop-nav')).toBeVisible();
  });

  test('API returns correct data', async ({ request }) => {
    // Test API endpoint
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    
    expect(response.ok()).toBeTruthy();
    
    const data = await response.json();
    expect(data).toHaveProperty('userId');
    expect(data).toHaveProperty('id');
    expect(data).toHaveProperty('title');
  });
});
