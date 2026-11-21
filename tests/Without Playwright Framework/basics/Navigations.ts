import { Browser, BrowserContext, chromium, Locator, Page } from "@playwright/test";


// Browser navigation refers to moving between web pages, refreshing pages, and navigating 
// through browser history.


async function navigationExample() {
  let browser : Browser = await chromium.launch({
        headless : false
    });
  let contexts : BrowserContext = await browser.newContext();
  let page : Page = await contexts.newPage();
  await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');

  await page.getByText('Forgot password?').click();
  await page.waitForTimeout(2000);

  //Navigate Back : 
  await page.goBack();
  await page.waitForTimeout(2000);

  //Navigate forward : 
  await page.goForward();
  await page.waitForTimeout(2000);

  //Refresh Page : 
  await page.reload();
  await page.waitForTimeout(2000);

}

navigationExample();
