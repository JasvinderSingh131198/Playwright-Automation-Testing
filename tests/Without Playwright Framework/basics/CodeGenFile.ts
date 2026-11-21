import { Browser, BrowserContext, chromium, Locator, Page } from "@playwright/test";

//Codegen in playwright
// CodeGen is a Playwright feature that automatically records your actions in a browser and 
// generates Playwright code (TypeScript, JavaScript, Java, Python, or C#).

async function CodeGenExample() {
  let browser : Browser = await chromium.launch({
        headless : false
    });
  let contexts : BrowserContext = await browser.newContext();
  let page : Page = await contexts.newPage();
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
}

CodeGenExample();