
import { test, expect } from "@playwright/test";

//Array of Object
//An Array of Objects stores multiple sets of test data where each object represents one test scenario.

const loginData = [
    {
        username : "standard_user",
        password : "secret_sauce",
        check: "sucess"
    },
    {
        username : "standard_user",
        password : "test",
         check: "fail"
    },
    {
        username : "test",
        password : "secret_sauce",
         check: "fail"
    },
    {
        username : "test",
        password : "test",
        check: "fail"
    }
]

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