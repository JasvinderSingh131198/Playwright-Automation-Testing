import  { Browser, BrowserContext, chromium, Locator, Page } from 'playwright';

//Locators
//A Locator in Playwright is used to find and interact with elements on a web page.
//Playwright locators are auto-waiting, meaning they automatically wait for elements to be visible, enabled, and ready before performing actions.

async function locatorExample() : Promise<void> {
   
  let browser: Browser = await chromium.launch({headless: false}); 

  //To open incognito mode
  let contexts: BrowserContext = await browser.newContext();

  //Page is an object of the Page class provided by Playwright
  let page : Page = await contexts.newPage();

  //Open application
  //await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');

  //Id Locator
  //By default, Playwright uses the CSS Locator
  //const userNameTextBox : Locator = await page.locator('input[id="login1"]');

  //Optimized Id Locator
  //const userNameTextBox : Locator = await page.locator('input#login1');
  //userNameTextBox.fill('testuser');

  //await page.locator('input#login1').fill('testuser');

  //Class Locator
  //By defualt playwright uses the CSS Locator
  //const userNameTextBox : Locator = await page.locator('input[class="email-input"]');
  //userNameTextBox.fill('testuser');

  //const userNameTextBox : Locator = await page.locator('input.email-input');
  //userNameTextBox.fill('testuser');

  //getByText Locator
  //await page.goto('https://www.letskodeit.com/practice');
  //await page.getByText('Open Window').click();

  //getByPlaceHolder Locator
  //await page.goto('https://www.letskodeit.com/practice');
  //await page.getByPlaceholder('Enter Your Name').fill('Nilam Patil');

  //getByTitle
  //await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
  //await page.getByTitle('3rd party ad content').click();

  //nth index
  //await page.goto('https://www.letskodeit.com/practice');
  //await page.locator('input.inputs').nth(2).fill('Nilam Patil');

  //nth index
  //await page.goto('https://www.letskodeit.com/practice');
  //await page.locator('input.inputs').nth(2).fill('Nilam Patil');

  //first() Locator : Selects the first matching element.
  //await page.goto('https://www.letskodeit.com/practice');
  //await page.locator('input.inputs').first().fill('Nilam Patil');
        
  //last() Locator : Selects the last matching element.
  //await page.goto('https://www.letskodeit.com/practice');
  //await page.locator('input.inputs').last().fill('Nilam Patil');

  //hasText() Locator : Find elements that contain specific text inside them.
  //await page.goto('https://www.letskodeit.com/practice');
  //await page.locator("button:has-text('Open Window')").click();

  //and() Locator : Combine multiple locators together.
  //await page.goto('https://www.letskodeit.com/practice');
  //await page.locator("button:has-text('Open Window')").and(page.locator('#openwindow')).click();

  //or() Locator : Combine multiple locators together.
  //await page.goto('https://www.letskodeit.com/practice');
  //await page.locator("button:has-text('Open Window')").or(page.locator('#openwindow')).click();

  //xpath()
  //XPath stands for XML Path Language. XPath is a technique that is used to navigate through the HTML structure of a webpage. 
  //xpath has a two types
  //1. Absolute xpath
  //2. Relative xpath

  //1. Absolute xpath
  //It is the direct way to find the element
  // The key characteristic of XPath is that it begins with the single forward slash(/) 
  // which means you can select the element from the root node.
  //example : /html/body/div[1]/div[2]/div[2]/div/div/div/div/div[1]/div[3]/fieldset/button

  //2. Relative xpath
  //Relative Xpath starts from the middle of HTML DOM structure. 
  //It starts with double forward slash (//).
  //await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
  //await page.locator("//input[@id='login1']").fill('Snehal');

  //XPath Text() Function
  //await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
  //await page.locator("//a[text()='Forgot password?']").click();

  //and() or() condition
  //await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
  //await page.locator("//input[@id='login1' and @name='login']").fill('Snehal');
  //await page.locator("//input[@id='login1' or @name='login']").fill('Snehal');

  //Xpath Starts-with function
  //await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
  //await page.locator("//a[starts-with(text(),'Get a')]").click();

  //xpath Contains()
  //await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
  //await page.locator("//a[contains(text(),'Rediffmail ')]").click();

  //xpath axes

  //follwing
  //input[@id='login1']//following::input

  //ancestor
  //input[@id='login1']//ancestor::div

  //child
  //(//div[@class='form-group'])[1]//child::div

  //following-sibling
  //(//div[@class='cell'])[2]//following-sibling::div

  //parent
  //(//div[@class='email-input-container'])[1]//parent::div

  //descendants
  //(//div[@class='form-group'])[1]//descendant::
  
}

locatorExample();