import {Injectable} from '@angular/core';

@Injectable()
export class Contact {
    constructor(public name: string, public email: string, public phone: string) {
        this.name = "dummyValue";
        this.email = "dummyValue";
        this.phone = "dummyValue";
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}