import  { Browser, BrowserContext, chromium, Page } from '@playwright/test';

//1. Browser
//A Browser is the top-level object that represents a running browser instance such as Chrome, Edge, Firefox, or Safari.
//It is the first object you create before creating contexts and pages.

//2. BrowserContext
//A BrowserContext is an isolated browser session inside a Browser.

//3. Page
//In Playwright TypeScript, Page represents a single browser tab or web page where your automation actions are performed.
//Page is an object of the Page class provided by Playwright


async function myFirstPlaywrightScript() {
  //Launch a new browser instance
  //This represent a running browser instance. 
  let browser: Browser = await chromium.launch({headless: false}); 

  //To open incognito mode
  let contexts: BrowserContext = await browser.newContext();

  //Page is an object of the Page class provided by Playwright
  let page : Page = await contexts.newPage();

  //Open application
  await page.goto('https://playwright.dev/');

  //For close the browser
  //await browser.close();
}

myFirstPlaywrightScript();