import { test } from '@playwright/test';
import { login } from '../utils/login';
test('main polygon creation', async ({ page }) => {
  await login (page);
  await page.getByRole('button', { name: 'Order Management' }).click();
  await page.getByRole('button', { name: 'Create Order' }).click();
  await page.getByRole('textbox', { name: 'Enter Locality Name' }).fill('Fiverse1 polygon');
  await page.getByRole('dialog').getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Start Main Polygon' }).click();
  await page.waitForTimeout(2000);
const mapInfo = await page.evaluate(() => {
    return {
      mapInstance: window.mapInstance ? Object.keys(window.mapInstance) : null,
      L: window.L ? Object.keys(window.L) : null,
      google: window.google ? Object.keys(window.google) : null,
      mapbox: window.mapboxgl ? Object.keys(window.mapboxgl) : null
    };
  });
 // console.log('Map Debug Info:', mapInfo);
  await page.evaluate(() => {
    const zoomIn = document.querySelector('.leaflet-control-zoom-in') || 
                   document.querySelector('.map-zoom-in') ||
                   document.querySelector('[aria-label="Zoom in"]');
    if (zoomIn) {
      for (let i = 0; i < 10; i++) {
        zoomIn.click();
        new Promise(resolve => setTimeout(resolve, 300));
      }
    } else {
      console.error('No zoom controls found');
    }
  });
 const polygonPixels = [
    { x: 600, y: 400 },
    { x: 730, y: 410 },
    { x: 720, y: 530 }, 
    { x: 590, y: 520 },
    { x: 600, y: 400 }  
  ];
for (const point of polygonPixels) {
  await page.mouse.click(point.x, point.y);
  await page.waitForTimeout(300);
}
const last = polygonPixels[polygonPixels.length - 1];
await page.mouse.dblclick(last.x, last.y);
await page.getByRole('textbox', { name: 'Projected Household Count' }).click();
await page.getByRole('textbox', { name: 'Projected Household Count' }).fill('13');
await page.getByRole('textbox', { name: 'Projected Home Pass Count' }).click();
await page.getByRole('textbox', { name: 'Projected Home Pass Count' }).fill('22');
await page.getByRole('textbox', { name: 'Mobility User Count' }).click();
await page.getByRole('textbox', { name: 'Mobility User Count' }).fill('23');
await page.getByRole('textbox', { name: 'B2B User Count' }).click();
await page.getByRole('textbox', { name: 'B2B User Count' }).fill('23');
await page.getByRole('textbox', { name: 'Vo-wifi User Count' }).click();
await page.getByRole('textbox', { name: 'Vo-wifi User Count' }).fill('21');
await page.getByRole('textbox', { name: 'Leads Count' }).click();
await page.getByRole('textbox', { name: 'Leads Count' }).fill('22');
await page.locator('.css-194vhft').click();
await page.getByRole('option', { name: 'ACT' }).click();
await page.getByRole('textbox', { name: 'Competition Home Pass Count' }).click();
await page.getByRole('textbox', { name: 'Competition Home Pass Count' }).fill('2');
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(1000);
//await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
//await page.waitForTimeout(500);
await page.keyboard.press('PageDown');
await page.getByRole('button',{name: 'Submit'}).click();
await page.waitForTimeout(1000);
await page.getByRole('button', { name: 'Save as Draft' }).click();
});