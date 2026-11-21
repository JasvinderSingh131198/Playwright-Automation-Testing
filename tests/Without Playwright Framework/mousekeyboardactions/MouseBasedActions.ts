import { Browser, BrowserContext, chromium, Locator, Page } from "@playwright/test";


// Playwright provides a mouse class to perform mouse-related actions such as click, 
// double-click, right-click, hover, drag and drop, and moving the mouse cursor.

async function mouseBasedActions() {
            let browser : Browser = await chromium.launch({
                headless : false
            });
            let contexts : BrowserContext = await browser.newContext();
            let page : Page = await contexts.newPage();


            //Double click action
            // await page.goto('https://qa-practice.netlify.app/double-click');
            // await page.locator('#double-click-btn').dblclick();

            //Right Click (Context Click) 
            // await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
            // await page.getByText('right click me').nth(0).click({
            //     button: 'right'
            // });

            //Mouse Hover action
            // await page.goto('https://www.flipkart.com/');
            // await page.waitForTimeout(3000);
            // await page.getByText('✕').click();
            // await page.waitForTimeout(3000);
            // await page.getByText('Login').hover();

            //Drag and drop action
            // await page.goto('https://selenium08.blogspot.com/2020/01/drag-drop.html');
            // await page.locator('#draggable').dragTo(page.locator('#droppable'));

            //mouse move action
            // await page.goto('https://jqueryui.com/slider/');
            // await page.waitForTimeout(3000);
            // const frame = page.frameLocator('.demo-frame');
            // let slider = frame.locator('#slider span')
            
            //  await page.waitForTimeout(3000);
            //  let box = await slider.boundingBox();

            //  if (box) {
            //      await page.mouse.move(
            //          box.x + box.width/2,
            //          box.y + box.height/2,
            //      );
            

            //  await page.mouse.down();
            //  await page.mouse.move(
            //          box.x + 200,
            //          box.y + box.height/2,
            //      );
            //     }

             //scroll down by mouse wheel
            //  await page.goto('https://selenium08.blogspot.com/2020/01/drag-drop.html');
            //  await page.mouse.wheel(0, 2000);
            //  await page.waitForTimeout(3000);
            //  await page.mouse.wheel(0, -1000);

             //scroll down by specific element
             await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
             await page.waitForTimeout(3000);
             const element = page.getByText('Disclaimer');
             await element.scrollIntoViewIfNeeded();

             await page.waitForTimeout(3000);
             const element2 = page.getByText('Get a new Rediffmail ID');
             await element2.scrollIntoViewIfNeeded();
}

mouseBasedActions();
