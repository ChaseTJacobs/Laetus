import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Response } from '@angular/http';
import { AccountService } '../auth/account.service';

@Injectable()
export class NrmService {

  savedContacts: any[];

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
    console.log(selected);
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
      this.savedContacts.push(this.contactInfo);
    }
  }
  
  getActivities() {
    this.contactInfo.activities = [
      {
        id: 1,
        type: 'Covfefe',
        contact: 'Donald Trump',
        aDate: 1519856054000,
        location: 'Trump Hotal, NYC',
        description: 'Everyone that needs to know what it means, knows what it means, and thats all Im gonna say about the matter. Next question #fakenews'
      },
      {
        id: 1,
        type: 'Phone Call',
        contact: 'John Cena',
        aDate: 1519943054000,
        location: 'digital',
        description: 'Call or visit online at the WWW.SUUUUUUUPERSLAM.COM'
      },
      {
        id: 1,
        type: 'Job Interview',
        contact: 'Loki, God of Trickery',
        aDate: 1519743054000,
        location: 'Asgard',
        description: 'Not so sure about this. Wish me luck'
      },
      {
        id: 1,
        type: 'Informational Interview',
        contact: 'Tom Foolery',
        aDate: 1519845054000,
        location: '345 Ask Questions Lane',
        description: 'Quick talk with Tom about his current position'
      },
      {
        id: 1,
        type: 'Coffee Date',
        contact: 'Your Mom',
        aDate: 1529843054000,
        location: 'Your moms place',
        description: 'lololol Im in 3rd grade.'
      },
      {
        id: 1,
        type: 'Finish this page',
        contact: 'Nim Uleam',
        aDate: 1521507876141,
        location: 'STC Room 225',
        description: 'GIT ER DUUUUN'
      },
      {
        id: 1,
        type: 'Covfefe',
        contact: 'Donald Trump',
        aDate: 1519856054000,
        location: 'Trump Hotal, NYC',
        description: 'Everyone that needs to know what it means, knows what it means, and thats all Im gonna say about the matter. Next question #fakenews'
      },
      {
        id: 1,
        type: 'Phone Call',
        contact: 'John Cena',
        aDate: 1519943054000,
        location: 'digital',
        description: 'Call or visit online at the WWW.SUUUUUUUPERSLAM.COM'
      },
      {
        id: 1,
        type: 'Job Interview',
        contact: 'Loki, God of Trickery',
        aDate: 1519743054000,
        location: 'Asgard',
        description: 'Not so sure about this. Wish me luck'
      },
      {
        id: 1,
        type: 'Informational Interview',
        contact: 'Tom Foolery',
        aDate: 1519845054000,
        location: '345 Ask Questions Lane',
        description: 'Quick talk with Tom about his current position'
      },
      {
        id: 1,
        type: 'Coffee Date',
        contact: 'Your Mom',
        aDate: 1529843054000,
        location: 'Your moms place',
        description: 'lololol Im in 3rd grade.'
      },
      {
        id: 1,
        type: 'Finish this page',
        contact: 'Nim Uleam',
        aDate: 1521507876141,
        location: 'STC Room 225',
        description: 'GIT ER DUUUUN'
      },
      {
        id: 1,
        type: 'Covfefe',
        contact: 'Donald Trump',
        aDate: 1519856054000,
        location: 'Trump Hotal, NYC',
        description: 'Everyone that needs to know what it means, knows what it means, and thats all Im gonna say about the matter. Next question #fakenews'
      },
      {
        id: 1,
        type: 'Phone Call',
        contact: 'John Cena',
        aDate: 1519943054000,
        location: 'digital',
        description: 'Call or visit online at the WWW.SUUUUUUUPERSLAM.COM'
      },
      {
        id: 1,
        type: 'Job Interview',
        contact: 'Loki, God of Trickery',
        aDate: 1519743054000,
        location: 'Asgard',
        description: 'Not so sure about this. Wish me luck'
      },
      {
        id: 1,
        type: 'Informational Interview',
        contact: 'Tom Foolery',
        aDate: 1519845054000,
        location: '345 Ask Questions Lane',
        description: 'Quick talk with Tom about his current position'
      },
      {
        id: 1,
        type: 'Coffee Date',
        contact: 'Your Mom',
        aDate: 1529843054000,
        location: 'Your moms place',
        description: 'lololol Im in 3rd grade.'
      },
      {
        id: 1,
        type: 'Finish this page',
        contact: 'Nim Uleam',
        aDate: 1521507876141,
        location: 'STC Room 225',
        description: 'GIT ER DUUUUN'
      },
      {
        id: 1,
        type: 'Covfefe',
        contact: 'Donald Trump',
        aDate: 1519856054000,
        location: 'Trump Hotal, NYC',
        description: 'Everyone that needs to know what it means, knows what it means, and thats all Im gonna say about the matter. Next question #fakenews'
      },
      {
        id: 1,
        type: 'Phone Call',
        contact: 'John Cena',
        aDate: 1519943054000,
        location: 'digital',
        description: 'Call or visit online at the WWW.SUUUUUUUPERSLAM.COM'
      },
      {
        id: 1,
        type: 'Job Interview',
        contact: 'Loki, God of Trickery',
        aDate: 1519743054000,
        location: 'Asgard',
        description: 'Not so sure about this. Wish me luck'
      },
      {
        id: 1,
        type: 'Informational Interview',
        contact: 'Tom Foolery',
        aDate: 1519845054000,
        location: '345 Ask Questions Lane',
        description: 'Quick talk with Tom about his current position'
      },
      {
        id: 1,
        type: 'Coffee Date',
        contact: 'Your Mom',
        aDate: 1529843054000,
        location: 'Your moms place',
        description: 'lololol Im in 3rd grade.'
      },
      {
        id: 1,
        type: 'Finish this page',
        contact: 'Nim Uleam',
        aDate: 1521507876141,
        location: 'STC Room 225',
        description: 'GIT ER DUUUUN'
      },
    ];
    return this.contactInfo.activities;
  }
  
  createContact(){
    let newContact = {
      fName: 'John',
      lName: 'Cena',
      company: null,
      position: null,
      email: null,
      phone: null,
      linkedIn: null,
      address: null,
      description: null,
      custom: []
    }
    this.httpService.getRequest('createContact', newContact, this.accountService.getToken()).subscribe(
      (response: Response) => {
        let body = response.json();
        console.log(body);
      }
    )
  }

  constructor(private httpService: HttpService, private accountService: AccountService) {
    this.savedContacts = [];
  }
}
