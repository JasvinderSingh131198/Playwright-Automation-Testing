import { Browser, BrowserContext, chromium, Locator, Page } from "@playwright/test";



async function keyboardBasedActions() {
            let browser : Browser = await chromium.launch({
                headless : false
            });
            let contexts : BrowserContext = await browser.newContext();
            let page : Page = await contexts.newPage();
            await page.goto('https://www.letskodeit.com/practice');

             await page.locator('#autosuggest').nth(0).fill('Mayank Mishra');

            //Ctrl+A
            // await page.locator('#autosuggest').nth(0).click();
            // await page.keyboard.press('Control+A');
            // await page.waitForTimeout(3000);

            //Ctrl+C
            // await page.keyboard.press('Control+C');
            // await page.waitForTimeout(3000);

            //Ctrl+V
            // await page.locator('.inputs').nth(3).click();
            // await page.keyboard.press('Control+V');

            //Delete Text
            // await page.waitForTimeout(3000);
            // await page.keyboard.press('Control+A');
            // await page.keyboard.press('Delete');

            //delete text with backspace
            // await page.waitForTimeout(3000);
            // await page.keyboard.press('Control+A');
            // await page.keyboard.press('Backspace');

            //focus()
            await page.locator('.inputs').nth(0).focus();
            
}

keyboardBasedActions();

