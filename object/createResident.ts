import {browser, $, $$ } from "protractor";
import { ElementFinder, ElementArrayFinder } from "protractor/built/element";

export class CreateResident {
    modalBody: ElementFinder;

    building: ElementFinder;
    unit: ElementFinder;
    occupantType: ElementFinder;
    fullName: ElementFinder;
    email: ElementFinder;
    phoneType: ElementFinder;
    phone: ElementFinder;
    

    textInForm: ElementFinder;
    //address
    country: ElementFinder;
    state: ElementFinder;
    city: ElementFinder;
    postalCode: ElementFinder;
    address: ElementFinder;
    dob: ElementFinder;
    groups: ElementFinder;
    emailWaiverSigned: ElementFinder;
    parcelWaiverSigned: ElementFinder;
    keyWaiverSigned: ElementFinder;
    emergencyContact: ElementFinder;
    emergencyNotes: ElementFinder;

    save: ElementFinder;

    constructor() {
       // this.modalBody = $('.modal-body');

        this.building = $('[name = building]');
        this.unit = $('.ss_view-part');
        this.occupantType = $('[name = role]');
        this.fullName = $('[name = fullName]');
        this.email = $('[name = email]');
        this.phoneType = $('[ng-reflect-name = "phone_type[0]"]');
        this.phone = $('[ng-reflect-name = "phone[0]"]');
        
    
        this.textInForm = $('.modal-title.col-sm-8');
        //address
        this.country = $('[ng-reflect-name = "country[0]"]');
        this.state = $('[placeholder = Province/State]');
        this.city = $('[placeholder = City]');
        this.postalCode = $('[placeholder = Postal Code/Zip Code]');
        this.address = $('[placeholder = Address]');
        this.dob = $('.mat-input-wrapper.mat-form-field-wrapper');
        this.groups = $('.c-btn');
        this.emailWaiverSigned = $('[name = emailWaiverSigned]');
        this.parcelWaiverSigned = $('[name = parceWaiverSigned]');
        this.keyWaiverSigned = $('[name = keyWaiverSigned]');
        this.emergencyContact = $('[name = emergencyContact]');
        this.emergencyNotes = $('[name = emegrencyNotes]')

        this.save = $('.btn.btn-primary.submit');
    }

    async arePresent(){
        let key = ''
        for (key in this) {
            if (this[key].isPresent()) {
                return true
            }
        }
    }
}