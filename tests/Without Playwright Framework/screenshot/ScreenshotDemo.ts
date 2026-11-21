

import { Browser, BrowserContext, chromium, Locator, Page } from "@playwright/test";


async function screenshotExample() {
            let browser : Browser = await chromium.launch({
                headless : false
            });
            let contexts : BrowserContext = await browser.newContext();
            let page : Page = await contexts.newPage();
            await page.goto('https://www.letskodeit.com/practice');

            //capture full page screenshot
            // await page.screenshot({
            //     path: 'D:/Diagram.png',
            //     fullPage: true
            // });

            //take a screenshot on focused page
            // const time = Date.now();
            // await page.screenshot({
            //     path: `D:/Diagram_${time}.png`,
            //     fullPage: false
            // });

            //Take screenshot of single element
            const element = await page.locator('#disabled-button');
            const time = Date.now();
            await element.screenshot({
                path: `D:/Diagram_${time}.png`
            });
        }

screenshotExample();