require('chromedriver');
const webdriver = require('selenium-webdriver');

const test_example = async ()=>{
    
    //opening chrome
    let driver = await new webdriver.Builder().forBrowser('chrome').build();

    //reaching the Destination
    await driver.get('https://dev.businesshub.co.kr/admin/');

    /**
     * perform actions 
     */
    // --filling inputs
    await driver.findElement(webdriver.By.name('log')).sendKeys('Learn Selenium');


    //close the browser
    await driver.quit();
}

test_example();