require('chromedriver');
const webdriver = require('selenium-webdriver');
const should = require('chai').should();


// mocha frame work has two functions (descript) and (it) 
/**
 * describe
 */
describe('Login Process',()=>{

    // in describe function there can be multiple (it) functions

    it('Login Success', async ()=>{

            /**
             * Variables
             */
            let username = 'msquare';
            let password = 'CGEzumf4lAk4q1onpP4tQyO'
        
        
            /**
             * perform actions 
             */
        
            //opening chrome
            let driver = await new webdriver.Builder().forBrowser('chrome').build();
        
            //reaching the Destination
            await driver.get('https://businesshub.co.kr/login/');
        
            // --filling username
            await driver.findElement(webdriver.By.name('log')).sendKeys(username);
        
            // --filling Password
            await driver.findElement(webdriver.By.name('pwd')).sendKeys(password,webdriver.Key.RETURN);
        
            // --cheking element text to verify if user logged in or not (ASSERTION)
            let loggedInUser = await driver.findElement(webdriver.By.xpath('//*[@id="wp-admin-bar-my-account"]/a/span')).getText().then((value)=>{
                return value;
            });
            // (ASSERTION)
            loggedInUser.should.equal(username);
        
        
            /**
             * close the browser 
             */
            await driver.quit();
    });
    
});