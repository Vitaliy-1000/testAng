import {browser, $, $$ } from "protractor";
import { ElementFinder } from "protractor/built/element";

export class DirectoryResident {

    recordKeeping: ElementFinder;
    directory: ElementFinder;
    addResident: ElementFinder;


    constructor() {
        this.recordKeeping = $('#side-menu')
        this.directory = $('https://maxtvcommunications.com/#/home')
        this.addResident = $('');
    }

}