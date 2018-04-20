import { element, by, browser } from "protractor";
import { expect } from "jasmine";

const userded = {
  username: 'ded',
  password: 'ded'
};



describe('angularjs homepage todo list', function() {

   // var originalTimeout; 
/*
    beforeEach(function() { originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL; 
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000; }); 

    afterEach(function() { jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout; }); 
  */
 
  /*
    it('should add a todo', async function() {
      await browser.get('https://maxtvcommunications.com/'); // тут злетіло
      */
     it('should have a title', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
  
      expect(browser.getTitle()).toEqual('Super Calculator');
      // it('should add a todo', function() {
      //   browser.get('https://angularjs.org');
    
      //    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
      //    element(by.css('[value="add"]')).click();
    
      //    var todoList = element.all(by.repeater('todo in todoList.todos'));
      //    expect(todoList.count()).toEqual(3);
      //    expect(todoList.get(2).getText()).toEqual('wtite first protractor test');   // тут злетіло
    
        // // You wrote your first test, cross it off the list
        // todoList.get(2).element(by.css('input')).click();
        // var completedAmount = element.all(by.css('.done-true'));
        // expect(completedAmount.count()).toEqual(2);
    });
  });