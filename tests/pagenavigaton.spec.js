import {test, chromium} from '@playwright/test'

test('Page Navigation Testing', async({page})=>{

    await page.goto("https://www.flipkart.com/");
    const fbTitle = await page.title();
    console.log(fbTitle);
    console.log(page.url());

    await page.goto('https://www.instagram.com/accounts/login/?hl=en');
    await page.goBack();
    
    
})

test('Page Navigation GoBack', async({page})=>{

    await page.goto("https://www.f67");
    //await page.screenshot({path:'./ScreenShot/Flipkart.png'});
     await page.goto('https://www.instagram.com/accounts/login/?hl=en');
      await page.goto('https://chat.deepseek.com/sign_in');
      await page.goBack();
      await page.goBack();


})

test('Launch Browser', async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    await page1.goto("https://www.instagram.com/accounts/login/?hl=en");
    await page2.goto("https://www.amazon.in/")

    //two broswers
    const context1 = await browser.newContext();
    const page3 = await context1.newPage();
    await page3.goto("https://www.flipkart.com/");

})

test('Search Navigation', async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator("#twotabsearchtextbox").fill("Box");
    await page.locator("#nav-search-submit-button").click();

})

test('Demo UI Test', async({page})=>{
    await page.goto("https://demoqa.com/text-box");
    await page.locator("#userName").fill("Arjun");
    await page.locator('input[placeholder="name@example.com"]').fill("arjun@123");
    await page.locator('textarea[placeholder="Current Address"]').fill("Chennai Porur");
    await page.locator("#permanentAddress").fill("Chennai Porur");
    await page.locator('button[class^="btn "]').click();

})

test('DropDown Navigation', async({page})=>{

    await page.goto("https://www.amazon.in/");
    await page.locator("#searchDropdownBox").selectOption('Amazon Fashion');

    await page.selectOption("#searchDropdownBox",{value:"search-alias=automotive"});

})

test('Multiple DrownDown', async({page})=>{

    await page.goto("https://testautomationcentral.com/demo/dropdown.html");
    await page.getByRole('button',{name:'Multi-Select'}).click();
  

})

////File Upload
test('FileDownload', async({page})=>{

    await page.goto('https://demo.automationtesting.in/FileDownload.html');
    
    const [todayDownload] = await Promise.all([
        page.waitForEvent('download'),
        //page.getByRole('button',{name:'Download'}).click()
        //page.getByText('Download').click()
        page.locator("//a[@type='button']").click()
    ])

 
    await todayDownload.saveAs('./Download/' + await todayDownload.suggestedFilename());

    
})

test('Alert Handling', async({page})=>{

    console.log("Changes made in Feature First Changes");
    console.log('NEW feature');

    console.log("Feature Branch Conflict Merge");
    
    console.log("Master Commit");
    
    
    

})
