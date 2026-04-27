// Validação - Valida se o resultado esperado da ação atende às expectativas.

import { test, expect } from '@playwright/test';

test('Exemplo de validação', async ({page}) => {
    /* Verifica o título da página */
    await expect(page).toHaveTitle('Swag Labs');
    
    /* Verifica a URL após login */
    await expect(page).toHaveURL(/inventory.html/);

    /* Verifica se um elemento está visível */
    await expect(page.locator('[data-test="inventory_container"]')).toBeVisible();

    /* Verifica o texto de um elemento (mensagem de erro) */
    await expect(page.locator('[data-test="error"]')).toHaveText(
      'Epic sadface: Username and password do not match any user in this service'
    );

    /* Verifica que um elemento contém um texto */
   await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface');

    /* Verifica que um campo está desatualizado */
    await expect(page.locator('[data-test="login-button"]')).toBeDisabled();
});