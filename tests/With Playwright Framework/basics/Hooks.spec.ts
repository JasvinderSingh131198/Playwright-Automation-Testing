import { test } from "@playwright/test";

test.afterAll(async ()=> {
    console.log("After All");
})

test.afterEach(async ({ page }, testInfo) => {
    console.log(testInfo.title);
    console.log(testInfo.status);
    console.log(testInfo.duration);
});



test(`Verify Google Website`, async({page})=>{
    console.log("Verify Google Application");
})

test(`Verify Amazon Website`, async({page})=>{
    console.log("Verify Amazon Application");
})


test.beforeEach(async ()=> {
    console.log("Before Each");
})

test.beforeAll(async ()=> {
    console.log("Before All");
})
