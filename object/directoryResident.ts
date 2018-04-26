import {browser, $, $$ } from "protractor";
import { ElementFinder, ElementArrayFinder } from "protractor/built/element";

export class DirectoryResident {

    menu: ElementArrayFinder;
    addResident: ElementFinder;

    

    constructor() {
        this.menu = $$('li>a')
        this.addResident = $('.btn.btn-w-m.btn-primary.pull-right'); 
    }

    async clickElement(el, numb){
        let elFrom = await el.get(numb);
        await elFrom.click();
    }

}