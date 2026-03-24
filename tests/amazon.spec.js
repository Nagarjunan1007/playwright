import { test } from "@playwright/test";

test('Amazon launch',async ({context,page}) => {

    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(5000);
    const tit=await page.title();
    console.log('The First Title:',tit);
    
    await page.locator("#twotabsearchtextbox").fill("Watch");
    await page.locator("#nav-search-submit-button").click();
    await page.waitForTimeout(3000);

    //Sort DropDown
    await page.locator("span[class='a-dropdown-prompt']").click();
    await page.waitForTimeout(5000);
    await page.locator("#s-result-sort-select_2").click();  
    await page.waitForTimeout(5000);

    //New Window
    const [amazonNew]=await Promise.all([
        context.waitForEvent('page'),
        page.getByAltText("Men's Khaki X-Wind Automatic Watch - H77616533").click()
    ]);

    //await amazonNew.waitForTimeout(60000);
    await amazonNew.waitForLoadState('domcontentloaded',{ timeout: 60000 });
    
   
    await amazonNew.locator("input[title='Buy Now']").click();
    await amazonNew.waitForLoadState('domcontentloaded',{ timeout: 60000 });
    // Print  titles
    const windPag = context.pages();

    for (let index = 0; index < windPag.length; index++) {
        const element = await windPag[index].title();
        console.log(element);
        // if (element.includes('Hamilton Men')) {
        //    //await page.bringToFront();
           

        // }
        

        
    }
    
           
  
 

    //await page.locator("#nav-cart").click();
    
    
})