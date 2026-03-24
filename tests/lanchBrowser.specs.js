import { test } from "@playwright/test";

test ("Run using Headless", async ({ page })=>{
    await page.goto("https://facebook.com");
    
});
