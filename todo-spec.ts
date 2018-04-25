import { element, by, browser } from "protractor";

import { LoginForm } from './object/login';
import { HomePage } from './object/homePage';
import { DirectoryResident } from './object/directoryResident';

const loginForm = new LoginForm();
const homePage = new HomePage();
const directoryResident = new DirectoryResident();

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

      await directoryResident.clickElement(directoryResident.recordKeeping, 1);

      await directoryResident.clickElement(directoryResident.directory, 5);

      expect(await directoryResident.addResident.isPresent()).toEqual(true);
  });
});
