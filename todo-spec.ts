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



describe('angularjs homepage', function() {

    it('addResident', async function() {
      await browser.get('https://maxtvcommunications.com/'); 

      expect(await loginForm.url()).toEqual(loginForm.loginUrl);

      await loginForm.loginGo(user);

      expect(await loginForm.url()).toEqual(homePage.homeUrl);

      expect(await homePage.sideMenu.isPresent()).toEqual(true);

      await directoryResident.clickElement(directoryResident.menu, 4); // click on Record Keeping

      await directoryResident.clickElement(directoryResident.menu, 5); // click on Directiry

      expect(await directoryResident.addResident.isPresent()).toEqual(true);
  });
});
