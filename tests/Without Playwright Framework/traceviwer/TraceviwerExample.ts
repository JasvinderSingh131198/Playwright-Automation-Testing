import { Browser, BrowserContext, chromium, Locator, Page } from "@playwright/test";

async function fileUploadExample() {
            let browser : Browser = await chromium.launch({
                headless : false
            });
            let contexts : BrowserContext = await browser.newContext();

            await contexts.tracing.start({
                screenshots : true,
                snapshots : true
            });
            let page : Page = await contexts.newPage();
            
            await page.goto('https://the-internet.herokuapp.com/upload');

            await page.locator('#file-upload').setInputFiles('D:/Diagram.png')

            await page.waitForTimeout(3000);

            await page.locator('#file-submit').click();

            await contexts.tracing.stop({
               path : 'D:/classes/TraceViwer/morningbatch.zip'
            })

}

fileUploadExample();