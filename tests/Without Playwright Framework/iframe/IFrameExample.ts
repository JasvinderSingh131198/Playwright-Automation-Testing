import { Browser, BrowserContext, chromium, Locator, Page } from "@playwright/test";



async function iframeDemoExample() {
            let browser : Browser = await chromium.launch({
                headless : false
            });
            let contexts : BrowserContext = await browser.newContext();
            let page : Page = await contexts.newPage();
            await page.goto('https://jqueryui.com/datepicker/');

            await page.waitForTimeout(2000);

            //Get all available frames
            //const f = page.frames();
            //console.log(f.length);

            //select frame by locator
            //1. frameLocator()
            //const frame = page.frameLocator('.demo-frame');
            //await frame.locator('.hasDatepicker').click();

            //2. name

            //3. locate frame by URL
            // const frame = page.frame({
            //     url: 'https://jqueryui.com/resources/demos/datepicker/default.html'
            // });
            // await frame?.locator('.hasDatepicker').click();



}

iframeDemoExample();