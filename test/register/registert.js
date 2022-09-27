require('chromedriver');
const webdriver = require('selenium-webdriver');
const should = require('chai').should();


// mocha frame work has two functions (descript) and (it) 
/**
 * describe
 */
describe('Registration Process',()=>{

    let _path = 'http://127.0.0.1:8000/register';

    /**
     * name field validation
     */
    it('Name Validation Success', async ()=>{    
        let value = '';
        let error = ' The name field is required. ';
        let xpath = '//*[@id="step_input"]/div[1]/div/span'

        //perform actions 
        //=============== 

        // --opening chrome
        let driver = await new webdriver.Builder().forBrowser('chrome').build();

        // --reaching the Destination
        await driver.get(_path);

        // --filling checkbox checked
        await driver.findElement(webdriver.By.id('term_all_agree')).click();
        
        // --click on next step
        await driver.findElement(webdriver.By.id('btn_term_next')).click();        
        
        // --filling fields
        await driver.findElement(webdriver.By.id('name')).sendKeys(value);

        // --form submission
        await driver.findElement(webdriver.By.id('s-next')).click();
            
        // --cheking element text to verify if user logged in or not (ASSERTION)
        let cerror = await driver.findElement(webdriver.By.xpath(xpath)).getAttribute('innerHTML').then((value)=>{
            return value;
        });
        // (ASSERTION)
        cerror.should.equal(error);
            
        //close the browser 
        // ================ 
        await driver.quit();

    });


    it('Email Validation Success', async ()=>{
    
        let value = '';
        let error = ' The email field is required. ';
        let xpath = '//*[@id="label_user_email"]/span'

        //perform actions 
        //=============== 

        // --opening chrome
        let driver = await new webdriver.Builder().forBrowser('chrome').build();

        // --reaching the Destination
        await driver.get(_path);

        // --filling checkbox checked
        await driver.findElement(webdriver.By.id('term_all_agree')).click();
        
        // --click on next step
        await driver.findElement(webdriver.By.id('btn_term_next')).click();        
        
        // --filling fields
        await driver.findElement(webdriver.By.id('name')).sendKeys(value);

        // --form submission
        await driver.findElement(webdriver.By.id('s-next')).click();
            
        // --cheking element text to verify if user logged in or not (ASSERTION)
        let cerror = await driver.findElement(webdriver.By.xpath(xpath)).getAttribute('innerHTML').then((value)=>{
            return value;
        });
        // (ASSERTION)
        cerror.should.equal(error);
            
        //close the browser 
        // ================ 
        await driver.quit();


    });

    it('Username Validation Success',async ()=>{
    
        let value = '';
        let error = ' The username field is required. ';
        let xpath = '//*[@id="step_input"]/div[3]/div/span'

        //perform actions 
        //=============== 

        // --opening chrome
        let driver = await new webdriver.Builder().forBrowser('chrome').build();

        // --reaching the Destination
        await driver.get(_path);

        // --filling checkbox checked
        await driver.findElement(webdriver.By.id('term_all_agree')).click();
        
        // --click on next step
        await driver.findElement(webdriver.By.id('btn_term_next')).click();        
        
        // --filling fields
        await driver.findElement(webdriver.By.id('name')).sendKeys(value);

        // --form submission
        await driver.findElement(webdriver.By.id('s-next')).click();
            
        // --cheking element text to verify if user logged in or not (ASSERTION)
        let cerror = await driver.findElement(webdriver.By.xpath(xpath)).getAttribute('innerHTML').then((value)=>{
            return value;
        });
        // (ASSERTION)
        cerror.should.equal(error);
            
        //close the browser 
        // ================ 
        await driver.quit();


    });

    it('Password Validation Success', async ()=>{

        let value = '';
        let error = ' The password field is required. ';
        let xpath = '//*[@id="step_input"]/div[4]/div/span'

        //perform actions 
        //=============== 

        // --opening chrome
        let driver = await new webdriver.Builder().forBrowser('chrome').build();

        // --reaching the Destination
        await driver.get(_path);

        // --filling checkbox checked
        await driver.findElement(webdriver.By.id('term_all_agree')).click();
        
        // --click on next step
        await driver.findElement(webdriver.By.id('btn_term_next')).click();        
        
        // --filling fields
        await driver.findElement(webdriver.By.id('name')).sendKeys(value);

        // --form submission
        await driver.findElement(webdriver.By.id('s-next')).click();
            
        // --cheking element text to verify if user logged in or not (ASSERTION)
        let cerror = await driver.findElement(webdriver.By.xpath(xpath)).getAttribute('innerHTML').then((value)=>{
            return value;
        });
        // (ASSERTION)
        cerror.should.equal(error);
            
        //close the browser 
        // ================ 
        await driver.quit();
        

    });

    it('Registry Number Validation Success', async ()=>{

        let value = '';
        let error = ' The registry number field is required. ';
        let xpath = '//*[@id="step_input"]/div[6]/div/span'

        //perform actions 
        //=============== 

        // --opening chrome
        let driver = await new webdriver.Builder().forBrowser('chrome').build();

        // --reaching the Destination
        await driver.get(_path);

        // --filling checkbox checked
        await driver.findElement(webdriver.By.id('term_all_agree')).click();
        
        // --click on next step
        await driver.findElement(webdriver.By.id('btn_term_next')).click();        
        
        // --filling fields
        await driver.findElement(webdriver.By.id('name')).sendKeys(value);

        // --form submission
        await driver.findElement(webdriver.By.id('s-next')).click();
            
        // --cheking element text to verify if user logged in or not (ASSERTION)
        let cerror = await driver.findElement(webdriver.By.xpath(xpath)).getAttribute('innerHTML').then((value)=>{
            return value;
        });
        // (ASSERTION)
        cerror.should.equal(error);
            
        //close the browser 
        // ================ 
        await driver.quit();
        

    });

    it('Post code Validation Success', async ()=>{

        let value = '';
        let error = ' The post code field is required. ';
        let xpath = '//*[@id="step_input"]/div[8]/div/span'

        //perform actions 
        //=============== 

        // --opening chrome
        let driver = await new webdriver.Builder().forBrowser('chrome').build();

        // --reaching the Destination
        await driver.get(_path);

        // --filling checkbox checked
        await driver.findElement(webdriver.By.id('term_all_agree')).click();
        
        // --click on next step
        await driver.findElement(webdriver.By.id('btn_term_next')).click();        
        
        // --filling fields
        await driver.findElement(webdriver.By.id('name')).sendKeys(value);

        // --form submission
        await driver.findElement(webdriver.By.id('s-next')).click();
            
        // --cheking element text to verify if user logged in or not (ASSERTION)
        let cerror = await driver.findElement(webdriver.By.xpath(xpath)).getAttribute('innerHTML').then((value)=>{
            return value;
        });
        // (ASSERTION)
        cerror.should.equal(error);
            
        //close the browser 
        // ================ 
        await driver.quit();
        

    });
    
    it('Address Validation Success', async ()=>{

        let value = '';
        let error = ' The address field is required. ';
        let xpath = '//*[@id="step_input"]/div[9]/div/span'

        //perform actions 
        //=============== 

        // --opening chrome
        let driver = await new webdriver.Builder().forBrowser('chrome').build();

        // --reaching the Destination
        await driver.get(_path);

        // --filling checkbox checked
        await driver.findElement(webdriver.By.id('term_all_agree')).click();
        
        // --click on next step
        await driver.findElement(webdriver.By.id('btn_term_next')).click();        
        
        // --filling fields
        await driver.findElement(webdriver.By.id('name')).sendKeys(value);

        // --form submission
        await driver.findElement(webdriver.By.id('s-next')).click();
            
        // --cheking element text to verify if user logged in or not (ASSERTION)
        let cerror = await driver.findElement(webdriver.By.xpath(xpath)).getAttribute('innerHTML').then((value)=>{
            return value;
        });
        // (ASSERTION)
        cerror.should.equal(error);
            
        //close the browser 
        // ================ 
        await driver.quit();
        

    });

    it('OR ID Validation Success', async ()=>{

        let value = '';
        let error = ' The or id field is required. ';
        let xpath = '//*[@id="step_input"]/div[11]/div/span'

        //perform actions 
        //=============== 

        // --opening chrome
        let driver = await new webdriver.Builder().forBrowser('chrome').build();

        // --reaching the Destination
        await driver.get(_path);

        // --filling checkbox checked
        await driver.findElement(webdriver.By.id('term_all_agree')).click();
        
        // --click on next step
        await driver.findElement(webdriver.By.id('btn_term_next')).click();        
        
        // --filling fields
        await driver.findElement(webdriver.By.id('name')).sendKeys(value);

        // --form submission
        await driver.findElement(webdriver.By.id('s-next')).click();
            
        // --cheking element text to verify if user logged in or not (ASSERTION)
        let cerror = await driver.findElement(webdriver.By.xpath(xpath)).getAttribute('innerHTML').then((value)=>{
            return value;
        });
        // (ASSERTION)
        cerror.should.equal(error);
            
        //close the browser 
        // ================ 
        await driver.quit();
        

    });

    it('ID CARD Validation Success', async ()=>{

        let value = '';
        let error = ' The id card field is required. ';
        let xpath = '//*[@id="label_id_card"]/span'

        //perform actions 
        //=============== 

        // --opening chrome
        let driver = await new webdriver.Builder().forBrowser('chrome').build();

        // --reaching the Destination
        await driver.get(_path);

        // --filling checkbox checked
        await driver.findElement(webdriver.By.id('term_all_agree')).click();
        
        // --click on next step
        await driver.findElement(webdriver.By.id('btn_term_next')).click();        
        
        // --filling fields
        await driver.findElement(webdriver.By.id('name')).sendKeys(value);

        // --form submission
        await driver.findElement(webdriver.By.id('s-next')).click();
            
        // --cheking element text to verify if user logged in or not (ASSERTION)
        let cerror = await driver.findElement(webdriver.By.xpath(xpath)).getAttribute('innerHTML').then((value)=>{
            return value;
        });
        // (ASSERTION)
        cerror.should.equal(error);
            
        //close the browser 
        // ================ 
        await driver.quit();
        

    });

    it('Passport Validation Success', async ()=>{

        let value = '';
        let error = ' The passbook field is required. ';
        let xpath = '//*[@id="label_passbook"]/span'

        //perform actions 
        //=============== 

        // --opening chrome
        let driver = await new webdriver.Builder().forBrowser('chrome').build();

        // --reaching the Destination
        await driver.get(_path);

        // --filling checkbox checked
        await driver.findElement(webdriver.By.id('term_all_agree')).click();
        
        // --click on next step
        await driver.findElement(webdriver.By.id('btn_term_next')).click();        
        
        // --filling fields
        await driver.findElement(webdriver.By.id('name')).sendKeys(value);

        // --form submission
        await driver.findElement(webdriver.By.id('s-next')).click();
            
        // --cheking element text to verify if user logged in or not (ASSERTION)
        let cerror = await driver.findElement(webdriver.By.xpath(xpath)).getAttribute('innerHTML').then((value)=>{
            return value;
        });
        // (ASSERTION)
        cerror.should.equal(error);
            
        //close the browser 
        // ================ 
        await driver.quit();
        

    });


    // it('Registration Step 1 Success', async ()=>{

    //         /**
    //          * Variables
    //          */
    //         let name = 'jin';
    //         let email = 'jin@gmail.com';
    //         let username = 'jin';
    //         let password = 'jin';
    //         let registry_number = '1234';
    //         let phone = '+821234567890';
    //         let post_code = '123456';
    //         let address = 'test address';
    //         let address_detail = 'test address details';
    //         let or_id = '1';
    //         let file_upload = 'C:/Users/Muzammil/Desktop/test-img.png';

        
    //         /**
    //          * perform actions 
    //          */
        
    //         //opening chrome
    //         let driver = await new webdriver.Builder().forBrowser('chrome').build();
        
    //         // --reaching the Destination
    //         // http://127.0.0.1:8000/register
    //         // https://dev-erp.businesshub.co.kr/register
    //         await driver.get('http://127.0.0.1:8000/register');
        
    //         // --filling checkbox checked
    //         await driver.findElement(webdriver.By.id('term_all_agree')).click();
            
    //         // --click on next step
    //         await driver.findElement(webdriver.By.id('btn_term_next')).click();        
            
    //         // --filling fields
    //         await driver.findElement(webdriver.By.id('name')).sendKeys(name);
    //         await driver.findElement(webdriver.By.id('email')).sendKeys(email);
    //         await driver.findElement(webdriver.By.id('username')).sendKeys(username);
    //         await driver.findElement(webdriver.By.id('password')).sendKeys(password);
    //         await driver.findElement(webdriver.By.id('password_confirmation')).sendKeys(password);
    //         await driver.findElement(webdriver.By.id('registry_number')).sendKeys(registry_number);
    //         await driver.findElement(webdriver.By.id('phone')).sendKeys(phone);
    //         await driver.findElement(webdriver.By.id('post_code')).sendKeys(post_code);
    //         await driver.findElement(webdriver.By.id('address')).sendKeys(address);
    //         await driver.findElement(webdriver.By.id('address_detail')).sendKeys(address_detail);
    //         await driver.findElement(webdriver.By.id('or_id')).sendKeys(or_id);
    //         await driver.findElement(webdriver.By.id('file_id_card')).sendKeys(file_upload);
    //         await driver.findElement(webdriver.By.id('file_passbook')).sendKeys(file_upload);
        
    //         // --form submission
    //         await driver.findElement(webdriver.By.id('s-next')).click();
            
            

    //         // --cheking element text to verify if user logged in or not (ASSERTION)
    //         let loggedInUser = await driver.findElement(webdriver.By.id('current_username')).getAttribute('innerHTML').then((value)=>{
    //             return value;
    //         });
    //         // (ASSERTION)
    //         loggedInUser.should.equal(username);
        
        
    //         /**
    //          * close the browser 
    //          */
    //         await driver.quit();
    // });
    
});
