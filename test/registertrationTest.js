require('chromedriver');
const webdriver = require('selenium-webdriver');
const should = require('chai').should();


// mocha frame work has two functions (descript) and (it) 
/**
 * describe
 */
describe('Registration Process',()=>{

    // in describe function there can be multiple (it) functions

    it('Registration Step 1 Success', async ()=>{

            /**
             * Variables
             */
            let name = 'jin';
            let email = 'jin@gmail.com';
            let username = 'jin';
            let password = 'jin';
            let registry_number = '1234';
            let phone = '+821234567890';
            let post_code = '123456';
            let address = 'test address';
            let address_details = 'test address details';
            let or_id = '1';
            let file_upload = "C:\Users\Muzammil\Desktop\test-img.png";

        
            /**
             * perform actions 
             */
        
            //opening chrome
            let driver = await new webdriver.Builder().forBrowser('chrome').build();
        
            //reaching the Destination
            await driver.get('https://dev-erp.businesshub.co.kr/register');
        
            // --filling checkbox checked
            await driver.findElement(webdriver.By.id('term_agree_service')).click();
            await driver.findElement(webdriver.By.id('term_agree_privacy')).click();
            await driver.findElement(webdriver.By.id('term_agree_business')).click();
            await driver.findElement(webdriver.By.id('term_all_agree')).click();
            
            // --click on next step
            // await driver.findElement(webdriver.By.id('btn_term_next')).click();
        
            
            // --filling Password
            // await driver.findElement(webdriver.By.id('password')).sendKeys(password,webdriver.Key.RETURN);
        
            // --cheking element text to verify if user logged in or not (ASSERTION)
            // let loggedInUser = await driver.findElement(webdriver.By.id('current_username')).getAttribute('innerHTML').then((value)=>{
            //     return value;
            // });
            // (ASSERTION)
            // loggedInUser.should.equal(username);
        
        
            /**
             * close the browser 
             */
            await driver.quit();
    });
    
});