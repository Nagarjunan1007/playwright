import { test  } from "@playwright/test";

test ("Lanch browser headless", async ({page})=>{
    await page.goto("https://facebook.com");
    await page.waitForTimeout(3000);
    const screenShot = await page.screenshot({path : 'NewAj.png'});
});

test ("Record Video", async ({browser})=>{
    const context = await browser.newContext({
        recordVideo:{
            dir : "Videos/"
        }
    });
   let page =  await context.newPage();
    await page.goto("https://instagram.com");
    await page.waitForLoadState('networkidle');
    await page.goto("https://X.com");
    await page.waitForTimeout(3000);
    await page.reload();
    await page.goBack();
    await context.close();
});

 