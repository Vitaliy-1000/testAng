import { element, by, browser } from "protractor";
//import { expect } from 'jasmine'

const userded = {
  username: 'ded',
  password: 'ded'
};



describe('angularjs homepage todo list', function() {

   var originalTimeout; 

    // beforeEach(function() { originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL; 
    //     jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000; }); 

    // afterEach(function() { jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout; }); 
  
 
  
    it('page', async function() {
      await browser.get('https://maxtvcommunications.com/'); // тут злетіло
      
  });
});
