//import { Injectable } from '@angular/core';
import { Contact } from './classes/contact';
// OnInit pull from data server?

//@Injectable()
export class ContactService {
    
    contacts: Contact [] = [];
    
    constructor() {
        // dummy data for now.
        this.contacts[0] = new Contact("1", "Rex Barzee", "barzeer@byui.edu", "208-496-3768");
        this.contacts[1] = new Contact("2", "Bradley Armstrong", "armstrongb@byui.edu", "208-496-3766");
        this.contacts[2] = new Contact("3", "Lee Barney", "barneyl@byui.edu", "208-496-3767");
        this.contacts[3] = new Contact("5", "Kory Godfrey", "godfreyko@byui.edu", "208-496-3770");
    }
    
    getContact(id: number) {
        return this.contacts[id];
    }
    
    getAllContacts() {
        return this.contacts;
    }
    
    addContact(contactId: number, name = string, email: string, phone: string) {
        this.contacts.push({contactID: contactID, name: name, email: email, phone: phone});
    }
    
    /*
    udateContact() {
        
    }
    */
    
    
}