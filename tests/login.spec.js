import { test, expect } from '@playwright/test';

test('Login válido', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  await expect(page).toHaveURL(/inventory.html/);
});

test('Login inválido', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('[data-test="username"]', 'user_errado');
  await page.fill('[data-test="password"]', 'senha_errada');
  await page.click('[data-test="login-button"]');

  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface');
});