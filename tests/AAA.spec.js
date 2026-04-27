/* 
   Padrão AAA - Prepara o estado, executar a ação e validar o resultado.
   ●  Arrange: configura o estado inicial (navegar, fazer login, preparar dados).
   ●  Act: executa a ação sendo testada.
   ●  Assert: verifica se o resultado é o esperado. 
*/
import { test, expect } from '@playwright/test';

test('Deve exibir o título correto da página', async ({ page }) => {
  /* ARRANGE */
  await page.goto('https://www.saucedemo.com/');

  /* ACT */
  const titulo = await page.title();

  /* ASSERT */
  await expect(page).toHaveTitle('Swag Labs');
});