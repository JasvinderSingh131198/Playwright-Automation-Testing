import { test, expect } from "@playwright/test";


test(`Verify Get Student mock API`, async ({ page }) => {

    //Mock GET API
    await page.route('https://f952ff8b-0772-4d6e-a353-f2e4f75fbedc.mock.pstmn.io/api/students', async route => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify([
                {
                    "id": 1,
                    "name": "Ganesh Jadhav",
                    "role": "Admin",
                    "status": "Active"
                },
                {
                    "id": 2,
                    "name": "Rahul Patil",
                    "role": "Tester",
                    "status": "Active"
                }
            ])
        });
    });

    //Open application page URL
    await page.goto('https://f952ff8b-0772-4d6e-a353-f2e4f75fbedc.mock.pstmn.io/api/students');

    await expect(page.getByText('Ganesh Jadhav')).toBeVisible();
    await expect(page.getByText('Rahul Patil')).toBeVisible();

    await page.waitForTimeout(3000);
});


test(`Verify Create new Student mock API`, async ({ page }) => {

    //Mock GET API
    await page.route('https://f952ff8b-0772-4d6e-a353-f2e4f75fbedc.mock.pstmn.io/api/createstudent', async route => {
        // if (route.request().method() === 'POST') {
        await route.fulfill({
            status: 201,
            contentType: 'application/json',
            body: JSON.stringify({
                    "id": 3,
                    "name": "Mayur Kame",
                    "role": "Admin",
                    "status": "Active"
                })
        });
        // }else {
        //     await route.continue();
        //}
    });

    //Open application page URL
    await page.goto('https://f952ff8b-0772-4d6e-a353-f2e4f75fbedc.mock.pstmn.io/api/createstudent');

    await expect(page.getByText('Mayur Kame')).toBeVisible();

    await page.waitForTimeout(3000);
});