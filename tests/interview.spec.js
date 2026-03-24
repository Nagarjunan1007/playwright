import {test,expect} from '@playwright/test';

test('Launching basic Website', async ({page}) => {
    
    await page.goto('https://facebook.com');
    let tit = await page.title();
    console.log(tit);
    await expect(page).toHaveTitle("Facebook");
   
})

test('browser context', async ({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://facebook.com');
    let tit = await page.title();
    console.log(tit);
    await expect(page).toHaveTitle("Facebook");
})

test('login Page', async ({page}) => {
    await page.goto("https://demoqa.com/login");
    console.log(await page.title());
    await expect(page).toHaveURL('https://demoqa.com/login');
    await page.locator("#userName").fill('Arjun');
    await page.locator("#password").fill("Passwprd");
    await page.getByRole("button",{name:"Login"}).click();
    
})

// Exercise 4 — Code:
// Write a complete Playwright test that:

// Uses page.goto() with any URL of your choice
// Uses at least 3 different CSS selector types from this module
// Makes at least one assertion using toBeVisible(), toHaveCount(), or toHaveText()

//<div class="actions">
  //<button class="btn btn-primary">Submit</button>
  //<button class="btn btn-primary" disabled>Loading...</button>
  //<button class="btn btn-secondary">Cancel</button>
//</div>

test('assertion locators', async ({page}) => {
    await page.goto("https://demoqa.com/login")

    const head = page.locator(".class");
    await expect(head).toBeVisible();
    const text1 = page.locator('input[type="text"]');
    await expect(text1).toBeEditable();
    const count = page.locator('div button');
    await expect(count).toHaveCount(3);


    
})