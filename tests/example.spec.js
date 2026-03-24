import { test } from "@playwright/test";

test("Launch the browser", async ({ page }) => {
  await page.goto("https://www.facebook.com");
});

test("Get the Page Title", async ({ page }) => {
  await page.goto("https://www.facebook.com");
  console.log(await page.title());
  await page.waitForTimeout(3000);
  await page.waitForLoadState();
  let scc = await page.screenshot({ path: "Arjun.png" });


});


//popups -Js Popup
//1.Simple -->only "OK" Button
//2.Confirm--> having 'OK' and 'Cancle'
//3.Prompt---> need to give Text --->Text Box
// page.on('dialog') for all event
// page.once only for that event

//File uploading
//Frame

test.skip ('Handleing alert', async ({page}) => {

  page.on('dialog', async (dialog) => {
              console.log(dialog.message());
               dialog.type();
    
  })
  
})


//Frame

test.skip('Handling Frame', async ({page}) => {

  await page.goto("https://www.hyrtutorials.com/p/frames-practice.html");
  const Frame1 =  page.frameLocator("#frm1");
  await  Frame1.locator("#selectnav2").click();
  
  await page.waitForTimeout(3000);
  
  await Frame1.locator("#selectnav1").selectOption("- Testing");
  await page.waitForTimeout(3000);
  console.log(Frame1);
  
 
})


//

test.only ("Mouse Action titile", async ({page}) => {
  await page.goto("https://myntra.com/");
  //await page.dblclick("Element");
  //right click -> Context cllick
  // await page.click('//a[@data-group='men']),{button : "right"});
  //page freeze Ctrl+\
  //await page.hover("Element")
  //await page.dragAndDrop('drag','drop')
  //page actions page.mouse.click
})

//keyword action
test.only ("Keyboard action", async ({page}) => {
  await page.goto("https://myntra.com/");
  
 // await page.keyboard.press('Control+V')->to press Enter , tab, caps
 //await page.keyboard.type()
  
});

//Window Handling

//test.only ("Window handling", async ({page}) => {
 // await page.goto("https://myntra.com/");
  
//page.waitForEvent('Popup')->to handle popup inside the page
//context.waitForEvent('Page')->to  handle new page/window
  //autopopup
  //const autoPopup  = await page.waitForEvent('Popup');//before navigation
 test.skip('Window Handling2', async ({context, page}) => {
    await page.goto('https://demoqa.com/browser-windows');
    // await page.click('#windowButton');

    const [newTab] = await Promise.all([
        context.waitForEvent('page'),
        page.locator("#tabButton").click()
    ]);

   
    
   
    
   

    await newTab.waitForLoadState();
    await page.bringToFront();
    await page.waitForTimeout(4000);

    const pageTitle = await newTab.url();
     
    console.log(pageTitle);
  })

    // const wins = await context.pages;

    // for (const p of wins) {
    //   if(p.includes('google')){
    //     page.bringToFront();
    //   }
   //}


   test.skip('Window Handling', async ({context, page}) => {
    await page.goto('https://demoqa.com/browser-windows');

    // Open multiple windows
    await Promise.all([
        context.waitForEvent('page'),
        page.locator("#tabButton").click()
    ]);

    await Promise.all([
        context.waitForEvent('page'),
        page.locator("#windowButton").click()
    ]);

    // Get all open pages/tabs
    const allPages = context.pages();

    // Loop through each page and print title
    for (let i = 0; i < allPages.length; i++) {
        await allPages[i].waitForLoadState();
        const title = await allPages[i].title();
        console.log(`Window ${i + 1} Title :`, title);
    }
});

test.only("Windows Handle4", async ({context,page}) => {
  await page.goto("https://demo.automationtesting.in/Windows.html");
  await page.waitForLoadState('domcontentloaded');
  await page.locator("[href='#Tabbed']").click();

  //Open multiple Windows
  const [newTab] = await Promise.all([
    context.waitForEvent('page'),
    
     page.locator(".btn.btn-info").first().click(),
     
  ]);
await newTab.waitForTimeout(10000);
     //await newTab.waitForLoadState('domcontentloaded');

    // Print both titles
    console.log("First Window Title  :", await page.title());
    console.log("Second Window Title :", await newTab.title());

    const allD1 = context.pages();

    for (let index = 0; index < allD1.length; index++) {
      
      const title = await allD1[index].title();
      if (title==='Selenium') {
        
        page.bringToFront();
        console.log("Switched to Selenium");
        
      }
      
    }

  
  


})

test.only('New Window', async ({context,page}) => {

  await page.goto("https://demo.automationtesting.in/Windows.html");
  await page.waitForLoadState('domcontentloaded')
  await page.locator(".analystic").nth(1).click();
  
  
   const [addWind] = await Promise.all([
      context.waitForEvent('page'),
      page.locator("[onclick='newwindow()']").click()
    ])

    await addWind.waitForLoadState('domcontentloaded')
})