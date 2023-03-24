import { test, expect } from '@playwright/test';

test.describe('Login testing', () => {
  test('Login testing', async ({ page }) => {
    await page.goto('/login');
    const email = page.getByPlaceholder('Email');
    await email.fill('example@gmail.com');
    const password = page.getByPlaceholder('Password');
    await password.fill('123456');

    await expect(email).toHaveValue('example@gmail.com');
    await expect(password).toHaveValue('123456');
  });
});
