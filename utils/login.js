// utils/login.js
export async function login(page) {
  await page.goto('https://fiverseuat.airtel.com/devweb/');

  await page.getByRole('textbox', { name: 'Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('4209211999');
  await page.getByRole('button', { name: 'Login' }).click();

  const dialogLoginButton = page.locator('div[role="dialog"] button', { hasText: 'Login' });

  try {
    await dialogLoginButton.waitFor({ state: 'visible', timeout: 5000 });
    console.log('Login dialog appeared. Clicking button...');
    await dialogLoginButton.click();
  } catch (error) {
    console.log('Login dialog did not appear. Proceeding without clicking it.');
  }

  await page.getByRole('button', { name: 'Verify & Proceed' }).click();
}
