import {test} from '@playwright/test'

test('Verify open edso learn website', async ({page}) => {
    await page.goto('https://edsolearn.com/')
})

test('Verify open tcs website', async ({page}) => {
    await page.goto('https://www.tcs.com/')
    await page.waitForTimeout(3000)
})
