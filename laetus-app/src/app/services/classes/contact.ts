import {Injectable} from '@angular/core';

@Injectable()
export class Contact {
    constructor(public contactId:string, public name:string, public email:string, public phone:string) {
        
        this.contactId = contactId;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}