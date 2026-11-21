import { Browser, BrowserContext, chromium, Locator, Page } from "@playwright/test";



async function waitExample() {
            let browser : Browser = await chromium.launch({
                headless : false
            });
            let contexts : BrowserContext = await browser.newContext();
            let page : Page = await contexts.newPage();
            // await page.goto('https://www.letskodeit.com/practice');

        //static wait (waitForTimeout)
        //we are not using static wait because our Test execution becomes slow 

        // await page.waitForTimeout(10000);
        // await page.locator('#autosuggest').nth(0).click();

        //Dyanamic Wait
        await page.goto('https://demoqa.com/dynamic-properties');
        
        //waitFor
        // await page.locator('#visibleAfter').waitFor({
        //     state : 'visible'
        // });
        // console.log(await page.locator('#visibleAfter').isVisible());

        //waitForSelector() : Wait until an element appears
        // await page.waitForSelector('#visibleAfter');
        // console.log(await page.locator('#visibleAfter').isVisible());

        //waitForLoadState() : Wait for page loading states.
        await page.waitForLoadState('load');

}

waitExample();