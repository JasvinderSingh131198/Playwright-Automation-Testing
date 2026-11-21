import { Browser, BrowserContext, chromium, Locator, Page } from "@playwright/test";

// async function elementVisibilityExample() {
//   let browser : Browser = await chromium.launch({
//         headless : false
//     });
//   let contexts : BrowserContext = await browser.newContext();
//   let page : Page = await contexts.newPage();
//   await page.goto('https://www.letskodeit.com/practice');

//   let textBox: Locator = await page.getByPlaceholder('Enabled/Disabled Field');
//   console.log(await textBox.isEnabled()); //true

//   await page.locator('#disabled-button').click();
//   console.log(await textBox.isEnabled()); //false
// }

// elementVisibilityExample();

 async function elementHiddenOrNot() {
        let browser : Browser = await chromium.launch({
                headless : false
            });
        let contexts : BrowserContext = await browser.newContext();
        let page : Page = await contexts.newPage();
        await page.goto('https://www.letskodeit.com/practice');

        let textBox: Locator = await page.getByPlaceholder('Hide/Show Example');
        console.log(await textBox.isVisible()); //true

        await page.locator('#hide-textbox').click();
        console.log(await textBox.isHidden()); //true

        await page.locator('#show-textbox').click();
        console.log(await textBox.isVisible()); //true
}
elementHiddenOrNot();
