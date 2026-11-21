
import { test, expect } from "@playwright/test";
import loginData from "../../../test-data/logindata.json";

//Data with Json File


for(const data of loginData){
test(`Verify open sauce demo login ${data.username}, ${data.password}`, async({page}) =>{
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill(data.username);
    await page.getByPlaceholder('Password').fill(data.password);
    await page.locator('#login-button').click();
    await page.waitForTimeout(3000);
    if (data.check == 'sucess') {
        const name = await page.locator("//span[text()='Products']");
        await expect(name).toBeVisible();
    }else{
            //positive assertion
            await expect(await page.locator("//h3[@data-test='error']")).toBeVisible();
        }
    });
}