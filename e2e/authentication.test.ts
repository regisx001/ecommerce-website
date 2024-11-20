import { expect, test } from '@playwright/test';

test('Login expect Login Form', async ({ page }) => {
    await page.goto('/account/login');
    await expect(page.locator('form')).toBeVisible();
});


test('Register expect Login Form', async ({ page }) => {
    await page.goto('/account/register');
    await expect(page.locator('form')).toBeVisible();
});
