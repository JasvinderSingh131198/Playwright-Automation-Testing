import {test} from '@playwright/test'

test('Verify open edso website', async ({page}) => {
    await page.goto('https://edso.in/')
})

//test.skip() : Used to skip a test execution.
test.skip('Verify test case1', async({page}) =>{
    console.log("Test Case 1");
});

//test.only() : Runs only selected test(s).
// test.only('Verify Test 2', async ({page})=>{
//  console.log("Test Case 2");
// });

//test.fail() : Marks a test as expected to fail.
// test.fail('Verify Test 3', async ({page})=>{
//  console.log("Test Case 3");
// });

//test.fixme() : Marks test as broken and skips execution. It will be skipped
// test.fixme('Verify Test 4', async ({page})=>{
//  console.log("Test Case 4");
// });

//test.slow() : Triples the test timeout.
//Does not delay execution. 
//It triples the test timeout, allowing long-running tests to complete without timing out.
test('Large File Upload', async ({ page }) => {
    test.slow();
    await page.goto('https://www.edso.in');
});