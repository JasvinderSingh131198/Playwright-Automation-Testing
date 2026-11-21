
import { test, expect } from "@playwright/test";
import loginData from "../../../test-data/loginwithscenario.json";

//Data with Json File with test scenario



test(`Verify open sauce demo login ${loginData.validLogin}`, async({page}) =>{
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill(loginData.validLogin.username);
    await page.getByPlaceholder('Password').fill(loginData.validLogin.password);
    await page.locator('#login-button').click();
    await page.waitForTimeout(3000);
    const name = await page.locator("//span[text()='Products']");
    await expect(name).toBeVisible();
});

test(`Verify open sauce demo login ${loginData.invalidLogin.username}`, async({page}) =>{
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill(loginData.invalidLogin.username);
    await page.getByPlaceholder('Password').fill(loginData.invalidLogin.password);
    await page.locator('#login-button').click();
    await page.waitForTimeout(3000);
      await expect(await page.locator("//h3[@data-test='error']")).toBeVisible();
});
