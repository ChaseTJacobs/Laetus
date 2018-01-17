//import { Injectable } from '@angular/core';
import { Contact } from './classes/contact';
// OnInit pull from data server?

//@Injectable()
export class ContactService {
    
    contacts: Contact [] = [];
    
    constructor() {
        // dummy data for now.
        this.contacts[0] = new Contact("Chase Chase'ums", "asdf@byui.edu", "208-496-3768");
        this.contacts[1] = new Contact("Nate Tastic", "asdf@byui.edu", "208-496-3766");
        this.contacts[2] = new Contact("Kimmy Dean", "asdf@byui.edu", "208-496-3767");
        
    }
    
    getContact(index: number) {
        return this.contacts[index];
    }
    
    getAllContacts() {
        return this.contacts;
    }
    
    addContact(name = string, email: string, phone: string) {
        this.contacts.push({name: name, email: email, phone: phone});
    }
    
    /*
    udateContact() {
        
    }
    */
    
    
}