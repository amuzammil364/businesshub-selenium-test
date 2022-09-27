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
            let username = 'superadmin';
            let password = 'superadmin';
        
        
            /**
             * perform actions 
             */
        
            //opening chrome
            let driver = await new webdriver.Builder().forBrowser('chrome').build();
        
            //reaching the Destination
            await driver.get('https://dev-erp.businesshub.co.kr/login');
        
            // --filling username
            await driver.findElement(webdriver.By.id('username')).sendKeys(username);
        
            // --filling Password
            await driver.findElement(webdriver.By.id('password')).sendKeys(password,webdriver.Key.RETURN);
        
            // --cheking element text to verify if user logged in or not (ASSERTION)
            let loggedInUser = await driver.findElement(webdriver.By.id('current_username')).getAttribute('innerHTML').then((value)=>{
                return value;
            });
            console.log(loggedInUser)
            // (ASSERTION)
            loggedInUser.should.equal(username);
        
        
            /**
             * close the browser 
             */
            await driver.quit();
    });
    
});