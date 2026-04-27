// Ação - Simula a ação do usuário, como clicar em um botão ou preencher um formulário.

import { test } from '@playwright/test';

test('Exemplo de ação', async ({ page }) => {
    /* Navegar para uma página */
    await page.goto('https://www.saucedemo.com/');

    /* Preencher um campo de texto */
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');

    /* Clicar em um botão */
    await page.click('[data-test="login-button"]');

    /* Obter o título da página */  
    const titulo = await page.title(); /* Obter o título da página, ou seja, retorna "Swag Labs" */

    /* Pressionar uma tecla */
    await page.keyboard.press('Enter');
});