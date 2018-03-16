import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Response } from '@angular/http';
import { AccountService } from '../auth/account.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NrmService {

  private contactList$ = new BehaviorSubject<any>(null);
  savedContacts: any[];

  contactInfo = {
    c_id: null,
    firstname: null,
    lastname: null,
    organization: null,
    position: null,
    email: null,
    phone: null,
    address: null,
    linkedIn: null,
    description: null,
    other_info: [{}],
    activities: [{}]
  };

  selectContact(selected) {
    if (selected.c_id === this.contactInfo.c_id) {
      return;
    } else {
      if (this.savedContacts !== null && this.savedContacts !== undefined) {
        for (let contact of this.savedContacts) {
          if (contact.c_id === selected.c_id) {
            this.contactInfo = contact;
            return;
          }
        }
      }
      // call backend
      let data = {
        c_id: selected.c_id
      };
      this.httpService.getRequest('getContactInfo', data, this.accountService.getToken()).subscribe(
        (response: Response) => {
          let body = response.json();
          this.contactInfo = body.data.contact_info;
          this.savedContacts.push(body.data.contact_info);
        }
    );
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
      }
    ];
    return this.contactInfo.activities;
  }

  getContactList() {
    this.httpService.tempGetRequest('getContactList', this.accountService.getToken()).subscribe(
      (response: Response) => {
        let body = response.json();
        console.log(body);
        if (body.status === 112) {
          this.contactList$.next(body.data);
      } else if (body.status === 296) {

      } else if (body.status === 295) {

      } else if (body.status === 299) {

        } else {
          return null;
        }
      }
  );
  }

  getContactList$(): Observable<any> {
    return this.contactList$;
  }

  createContact(contact, edit) {
    let endpoint;
    console.log(contact);
    let newContact = {
      c_id: contact.c_id,
      created_milli: new Date().getTime(),
      firstname: contact.firstname,
      lastname: contact.lastname,
      organization: contact.organization,
      position: contact.position,
      email: contact.email,
      phone: contact.phone,
      url_linkedin: contact.url,
      mail_address: contact.address,
      notes: contact.notes,
      other_info: [],
    };
    if (edit) {
      endpoint = 'updateContactInfo';
    } else if (!edit) {
      endpoint = 'createContact';
    }

    this.httpService.getRequest(endpoint, newContact, this.accountService.getToken()).subscribe(
      (response: Response) => {
        let body = response.json();
        console.log(body);
        if (body.status === 113) {
          this.getContactList();
        } else if (body.status === 115) {
          console.log('Contact Updated Successfully!');

        } else if (body.status === 295) {
          console.log('295');

        } else if (body.status === 299) {
          console.log('299');

        } else {
          return null;
        }
      }
    );
  }
  
  createActivity(activity, edit) {
    let endpoint;
    let newActivity = {
      c_id: activity.c_id,
      atype_id: activity.type,
      a_id: activity.a_id,
      activity_name: activity.activity_name,
      event_date: activity.event_date,
      notes: activity.notes,
      completed: activity.completed
    }
  }

  constructor(private httpService: HttpService, private accountService: AccountService) {
    this.savedContacts = [];
  }
}
