import{test} from '@playwright/test';
import {login} from '../utils/login.js';
test('login for useronboard', async({page})=>{
await login(page)
  await page.getByRole('button', { name: 'User Management' }).click();
  await page.getByRole('button', { name: 'Add New User' }).click();
  await page.getByRole('button', { name: 'Add User' }).click();
  await page.locator('.css-wb75yw-control > .css-hlgwow > .css-194vhft').first().click();
  await page.getByRole('option', { name: 'Marketing Team' }).click();
  await page.locator('.css-wb75yw-control > .css-hlgwow > .css-194vhft').click();
  await page.getByRole('option', { name: 'Circle Market Planning Lead' }).click();
  await page.locator('div:nth-child(3) > div > .css-b62m3t-container > .css-wb75yw-control > .css-hlgwow > .css-194vhft').click();
  await page.locator('#react-select-8-input').fill('nc');
  await page.getByRole('option', { name: 'NCR' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('yogesht');
  await page.getByRole('textbox', { name: 'Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('6789000001');
  await page.getByRole('textbox', { name: 'Email ID' }).click();
  await page.getByRole('textbox', { name: 'Email ID' }).fill('pt450@yopmail.com');
  await page.getByRole('textbox', { name: 'OLM ID' }).click();
  await page.getByRole('textbox', { name: 'OLM ID' }).fill('HuiUK019');
  await page.getByRole('button', { name: 'Submit' }).click();

  //TSM 
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Add New User' }).click();
  await page.getByRole('button', { name: 'Add User' }).click();
  await page.locator('.css-wb75yw-control > .css-hlgwow > .css-194vhft').first().click();
  await page.getByRole('option', { name: 'Marketing Team' }).click();
  await page.locator('.css-wb75yw-control > .css-hlgwow > .css-194vhft').click();
  await page.getByRole('option', { name: 'Market Planning TSM' }).click();
  await page.locator('div:nth-child(3) > div > .css-b62m3t-container > .css-wb75yw-control > .css-hlgwow > .css-194vhft').click();
  await page.getByRole('option', { name: 'NCR' }).click();
  await page.locator('div:nth-child(4) > div > .css-b62m3t-container > .css-wb75yw-control > .css-hlgwow > .css-194vhft').click();
  await page.getByRole('option', { name: 'yogesht' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('yogitsm');
  await page.getByRole('textbox', { name: 'Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('4076431308');
  await page.getByRole('textbox', { name: 'Email ID' }).click();
  await page.getByRole('textbox', { name: 'Email ID' }).fill('tes990@yopmail.com');
  await page.getByRole('textbox', { name: 'OLM ID' }).click();
  await page.getByRole('textbox', { name: 'OLM ID' }).fill('U7U87U8');
  await page.getByRole('button', { name: 'Submit' }).click();

})