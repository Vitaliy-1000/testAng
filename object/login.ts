import {element, $, browser} from "protractor";
import { userInfo } from "os";
import { ElementFinder } from "protractor/built/element";


interface user{
    useremail: string,
    password: string
}

export class LoginForm  {
    
    useremail: ElementFinder;
    password: ElementFinder;
    loginUrl: string;
    constructor() {
        this.useremail =  $('[placeholder = "Email"]')
        this.password = $('[placeholder = "Password"]')
        this.loginUrl = 'https://maxtvcommunications.com/#/login'

    }

    async url() {
        return await browser.getCurrentUrl();
        
    }

    async loginGo(user: user ) {
        await this.useremail.sendKeys(user.useremail);
        await this.password.sendKeys(user.password);
        await $('.btn.btn-primary.block.full-width.m-b').click();
    }
}