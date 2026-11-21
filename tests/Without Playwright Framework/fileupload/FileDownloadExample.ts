import { Browser, BrowserContext, chromium, Locator, Page } from "@playwright/test";

async function fileUploadExample() {
            let browser : Browser = await chromium.launch({
                headless : false
            });
            let contexts : BrowserContext = await browser.newContext();
            let page : Page = await contexts.newPage();
            await page.goto('https://demo.automationtesting.in/FileDownload.html');

            const[download] = await Promise.all([
                page.waitForEvent('download'),
                page.locator('.btn-primary').click()
            ]);

            await download.saveAs('D:/classes/playwrightmorningbatch.pdf');

}

fileUploadExample();