import { test } from "@playwright/test";
import { login } from "../utils/login";

test('Assign user dynamically for 5 rows', async ({ page }) => {
  await login(page);

  await page.getByRole('button', { name: 'Order Management' }).click();
  await page.getByText('Assigned').click();

  for (let i = 0; i < 30; i++) {
    // Click first column of the first row (excluding header)
    await page.getByRole('row').nth(1).getByRole('cell').first().click();

    // Assign BPE
    await page.getByRole('button', { name: 'Assign BPE' }).click();
    await page.waitForTimeout(5000);
    
    // Wait for the specific row to be visible before clicking
    await page.getByRole('row', { name: 'Dipu dev bpe 8080808081' }).locator('label').waitFor({ state: 'visible', timeout: 10000 });
    await page.getByRole('row', { name: 'Dipu dev bpe 8080808081' }).locator('label').click();
    
    await page.getByRole('button', { name: 'Submit' }).click();

    // Wait for 5 seconds
    await page.waitForTimeout(5000);

    // Go back to Order Management
    await page.getByRole('button', { name: 'Order Management' }).click();
  }
});