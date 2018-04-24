import { element, by, browser } from "protractor";

import { LoginForm } from './object/login';
import { HomePage } from './object/homePage';

const loginForm = new LoginForm();
const homePage = new HomePage();

const user = {
  useremail: '',
  password: ''
}



describe('angularjs homepage todo list', function() {

    it('page', async function() {
      await browser.get('https://maxtvcommunications.com/'); 

      expect(await loginForm.url()).toEqual(loginForm.loginUrl);

      await loginForm.loginGo(user);

      expect(await loginForm.url()).toEqual(homePage.homeUrl);

      expect(await homePage.sideMenu.isPresent()).toEqual(true);

      
  });
});
