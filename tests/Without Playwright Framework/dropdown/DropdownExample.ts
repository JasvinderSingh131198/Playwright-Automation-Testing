import { Browser, BrowserContext, chromium, Locator, Page } from "@playwright/test";


async function dropDownExample() {
            let browser : Browser = await chromium.launch({
                headless : false
            });
            let contexts : BrowserContext = await browser.newContext();
            let page : Page = await contexts.newPage();

            await page.goto('https://www.letskodeit.com/practice');

            //fetch all options from dropdown
            // const options = await page.locator('#carselect').allTextContents();
            // for(const c of options){
            //     console.log(c);
            // }

            //1. select by value
            // await page.locator('#carselect').selectOption('Honda');
            // await page.waitForTimeout(3000);

            //2. select by Index
            // await page.locator('#carselect').selectOption({
            //         index : 1
            //    });
            // await page.waitForTimeout(3000);

            //3. select by visible text
            // await page.locator('#carselect').selectOption({
            //         label : 'BMW'
            //    });
            // await page.waitForTimeout(3000);

            //get selected value from dropdown
            // const value = await page.locator('#carselect').inputValue();
            // console.log(value);

            //multi select dropdown
            await page.locator('#multiple-select-example').selectOption([
                'peach', 'apple'
            ]);

}

dropDownExample();