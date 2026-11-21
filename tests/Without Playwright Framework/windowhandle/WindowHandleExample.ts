
// In Playwright, a new browser window/tab is called a Page.
// Unlike Selenium (which uses Window Handles), 
// Playwright handles new windows using BrowserContext and Page Events.

import { Browser, BrowserContext, chromium, Locator, Page } from "@playwright/test";


async function windowHandleDemo() {
            let browser : Browser = await chromium.launch({
                headless : false
            });
            let contexts : BrowserContext = await browser.newContext();
            let page : Page = await contexts.newPage();
            await page.goto('https://www.letskodeit.com/practice');

        //     //Handle Window
        //     const [child] = await Promise.all([
        //     contexts.waitForEvent('page'),
        //     page.locator('#openwindow').click()
        // ]);

            //Handle Tabs
            const [child] = await Promise.all([
            contexts.waitForEvent('page'),
            page.locator('#opentab').click()
        ]);


        //apply wait for new window
        await child.waitForLoadState();

        //perform action on child window
        await child.getByText('INTERVIEW').click();

        //Get Title of Child Window
        console.log(await child.title());

        //close the child window
        child.close();

        //switch back to parent window
        await page.bringToFront();

        await page.waitForLoadState();

        await page.locator('.inputs').first().fill('Snehal');

        await page.close();
}

windowHandleDemo();
