import { Injectable } from '@angular/core';

@Injectable()
export class NrmService {

  savedContacts: [{
    id: number,
    fName: string,
    lName: string,
    company: string,
    position: string,
    email: string,
    phone: string,
    address: string,
    linkedIn: string,
    description: string,
    custom:[{}],
    activities:[{}]
  }];

  contactInfo = {
    id: null,
    fName: null,
    lName: null,
    company: null,
    position: null,
    email: null,
    phone: null,
    address: null,
    linkedIn: null,
    description: null,
    custom:[{}],
    activities:[{}]
  };

  selectContact(selected) {
    if (selected.id === this.contactInfo.id) {
      return;
    } else {
      if (this.savedContacts !== null && this.savedContacts !== undefined) {
        for(let contact of this.savedContacts) {
          if (contact.id === selected.id) {
            this.contactInfo = contact;
            return;
          }
        }
      }
      // call backend
      this.contactInfo = {
        id: 1,
        fName: 'Don',
        lName: 'Miguel',
        company: 'Fruit Flies Inc',
        position: 'Secretary',
        email: 'don.miguel@email.com',
        phone: '208-666-6666',
        address: '104 Banana Lane',
        linkedIn: 'www.linkedin.com/don-miguel',
        description: 'Don Miguel es mi hombre favorito. This is filler text. We are trying to see how a description would work in these boxes here.',
        custom:[{
          icon:'testing',
          value:'facebook.com/don-miguel'
        }],
        activities:[{
        }]
      };
    }
    console.log(this.contactInfo);
  }

  constructor() {

  }
}
