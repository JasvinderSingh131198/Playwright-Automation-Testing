import { test, expect } from "@playwright/test";
import { ExcelReader } from "./ExcelReader";

//Data with an Excel sheet

const loginData =  ExcelReader.readExcel('./test-data/LoginData.xlsx', "loginData")


test(`Verify open sauce demo login ${loginData.validLogin}`, async({page}) =>{
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill(loginData[0].username);
    await page.getByPlaceholder('Password').fill(loginData[0].password);
    await page.locator('#login-button').click();
    await page.waitForTimeout(3000);
    const name = await page.locator("//span[text()='Products']");
    await expect(name).toBeVisible();
});