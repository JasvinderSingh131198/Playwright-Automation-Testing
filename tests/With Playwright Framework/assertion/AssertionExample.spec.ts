import { test, expect } from "@playwright/test";

//test case 
//summery
//Prerequsite
//test data
//test stpes
//Expected Result

//Assertions
//Assertions are used to verify that the actual result matches the expected result. 
// If an assertion fails, the test is marked as Failed.


test(`Verify open edso learn website`, async({page}) =>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('test');
    await page.locator('#login-button').click();
    await page.waitForTimeout(3000);
    
    //positive assertion
    await expect(await page.locator("//h3[@data-test='error']")).toBeVisible();

    //Negative Assertion
    //await expect(await page.locator("//h3[@data-test='error']")).not.toBeVisible();

    //Assert.assertEquals(location, "", "")
    //await expect(page.locator('h1')).toHaveText('Welcome Ganesh’);
    //await expect(page.locator('#email')).toHaveAttribute('placeholder','Enter Email');
});


//Hard Assertion
test(`Verify open sauce demo application`, async({page}) =>{
    await page.goto('https://www.saucedemo.com/');

    await expect( await page.getByPlaceholder('tsmj,hkj')).toBeVisible();
    await page.getByPlaceholder('Username').fill('standard_user');

    await expect( await page.getByPlaceholder('Password')).toBeVisible();
    await page.getByPlaceholder('Password').fill('test');

    await page.locator('#login-button').click();
    await page.waitForTimeout(3000);
    //positive assertion
    await expect(await page.locator("//h3[@data-test='error']")).toBeVisible();

});


//Soft Assertion
test(`Verify open sauce demo application for soft assertions`, async({page}) =>{
    await page.goto('https://www.saucedemo.com/');

    await expect.soft( await page.getByPlaceholder('tsmj,hkj')).toBeVisible();
    await page.getByPlaceholder('Username').fill('standard_user');

    await expect.soft( await page.getByPlaceholder('hkdfhksh')).toBeVisible();
    await page.getByPlaceholder('Password').fill('test');

    await page.locator('#login-button').click();
    await page.waitForTimeout(3000);
    //positive assertion
    await expect.soft(await page.locator("//h3[@data-test='error']")).toBeVisible();

});


//100 - 80 cases pass, 10 test cases failing script issue, 10 test cases network