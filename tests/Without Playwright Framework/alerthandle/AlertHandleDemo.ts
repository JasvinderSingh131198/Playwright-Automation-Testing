import { Browser, BrowserContext, chromium, Locator, Page } from "@playwright/test";


async function alertHandleExample() {
            let browser : Browser = await chromium.launch({
                headless : false
            });
            let contexts : BrowserContext = await browser.newContext();
            let page : Page = await contexts.newPage();
            await page.goto('https://www.letskodeit.com/practice');

            //In Playwright, JavaScript alerts are handled using the Dialog API.
            //A Dialog is a Playwright object that represents JavaScript browser popups. 
            // It allows us to read the popup message and perform actions like clicking OK, Cancel, or entering text into a prompt.

            page.on('dialog', async dialog =>{
                console.log(await dialog.type());
                console.log(await dialog.message());
                await dialog.accept();
            });

            await page.locator('#confirmbtn').click();
        }

        alertHandleExample();