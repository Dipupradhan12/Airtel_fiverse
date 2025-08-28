import { test } from "@playwright/test";
import { login } from "../utils/login";

test('Assign user dynamically for 5 rows', async ({ page }) => {
  await login(page);

  await page.getByRole('button', { name: 'Order Management' }).click();
  await page.getByText('Assigned').click();

  for (let i = 0; i < 5; i++) {
    try {
      // Click first column of the first row (excluding header)
      await page.getByRole('row').nth(1).getByRole('cell').first().click();

      await page.getByRole('button', { name: 'Assign BPE' }).click();
      
      // Wait for the element with a longer timeout
      await page.getByRole('row', { name: 'Dipu dev bpe 8080808081' }).locator('label').waitFor({ state: 'visible', timeout: 15000 });
      await page.getByRole('row', { name: 'Dipu dev bpe 8080808081' }).locator('label').click();
      
      await page.getByRole('button', { name: 'Submit' }).click();
      await page.waitForTimeout(5000);

      // Go back to Order Management
      await page.getByRole('button', { name: 'Order Management' }).click();
      
    } catch (error) {
      console.log(`Error in iteration ${i + 1}:`, error.message);
      // Refresh page and continue with next iteration
       await page.waitForTimeout(5000);
       await page.getByText('Assigned').click();
       await page.waitForTimeout(5000);
    }
  }
});