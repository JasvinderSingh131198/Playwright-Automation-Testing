import { Browser, BrowserContext, chromium, Locator, Page } from "@playwright/test";


async function videoExample() {
            let browser : Browser = await chromium.launch({
                headless : false
            });
            let contexts : BrowserContext = await browser.newContext({
                recordVideo:{
                    dir: 'D:/classes',
                    size:{
                        width: 1200,
                        height: 1000
                    }
                }
            });

            let page : Page = await contexts.newPage();
            await page.goto('https://www.letskodeit.com/practice');

            await page.waitForTimeout(2000);

            //Ctrl+A
            await page.locator('#autosuggest').nth(0).click();
            await page.keyboard.press('Control+A');
            await page.waitForTimeout(2000);

            //Ctrl+C
            await page.keyboard.press('Control+C');
            await page.waitForTimeout(2000);

            //Ctrl+V
            await page.locator('.inputs').nth(3).click();
            await page.keyboard.press('Control+V');

            page.close();

}

videoExample();