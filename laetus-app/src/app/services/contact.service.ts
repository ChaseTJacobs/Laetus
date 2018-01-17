import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Contact } from './classes/contact';
// OnInit pull from data server?

// HTTP requests should be handled in a centralized Service meant for that.

// only if you're injecting a service into a service, i.e. we're using Angular's Http service here INSIDE our ContactService
@Injectable()
export class ContactService {
    
    contacts: Contact [] = [];
    
    constructor(private http: Http) {
        /*
        // dummy data for now.
        this.contacts[0] = new Contact("Chase Chase'ums", "asdf@byui.edu", "208-496-3768");
        this.contacts[1] = new Contact("Nate Tastic", "asdf@byui.edu", "208-496-3766");
        this.contacts[2] = new Contact("Kimmy Dean", "asdf@byui.edu", "208-496-3767");
        */
    }
    
    getAllContacts() {
        return this.http.get( 'http://localhost:3000/'); // <-- get() returns an Observable.
    }
    
    /*
    getContact(index: number) {
        return this.contacts[index];
    }
    
    addContact(name: string, email: string, phone: string) {
        this.contacts.push({name: name, email: email, phone: phone});
    }
    
    udateContact() {
        
    }
    */
    
    
}