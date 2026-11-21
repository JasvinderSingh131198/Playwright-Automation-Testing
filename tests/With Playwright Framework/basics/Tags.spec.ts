import { test } from "@playwright/test";

//Tag
//Tags in the Playwright Test Runner are used to categorize, filter, and execute specific groups of tests.
//They are very useful when you want to run only Smoke, Regression, Sanity, API, UI, or Feature-specific test cases.

test(`Verify rediffmail login Website @smoke`, async({page})=>{
    console.log("Verify rediffmail login");
})

test(`Verify flipkart Website @sanity @negative`, async({page})=>{
    console.log("Verify flipkart Application");
})


test(`Verify apple Website`, {tag: ['@p0', '@negative']}, async() =>{
    console.log("Verify apple Application");
})