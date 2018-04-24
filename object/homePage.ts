import {browser, $, $$ } from "protractor";
import { ElementFinder } from "protractor/built/element";

export class HomePage {

    sideMenu: ElementFinder;
    homeUrl: string;

    constructor() {
        this.sideMenu = $('#side-menu')
        this.homeUrl = 'https://maxtvcommunications.com/#/home'
    }

}