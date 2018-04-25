import {browser, $, $$ } from "protractor";
import { ElementFinder, ElementArrayFinder } from "protractor/built/element";

export class DirectoryResident {

    recordKeeping: ElementArrayFinder;
    directory: ElementFinder;
    addResident: ElementFinder;


    constructor() {
        this.recordKeeping = $$('li>a.ng-star-inserted') // get(1)
        this.directory = $('li>a') // get(5)
        this.addResident = $('.btn.btn-w-m.btn-primary.pull-right'); 
    }

    async clickElement(el, numb){
        let elFrom = await el.get(numb);
        await elFrom.click();
    }

}