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
  activityTypes: any[];
  d = new Date();

  contactInfo = {
    c_id: null,
    c_info: {},
    allActivities: [],
    pastActivities: [],
    currentActivities: []
  };
  
  hours = [12,1,2,3,4,5,6,7,8,9,10,11];
  minutes = [
    { show: '00', value: 0 },
    { show: '05', value: 5 },
    { show: '10', value: 10 },
    { show: '15', value: 15 },
    { show: '20', value: 20 },
    { show: '25', value: 25 },
    { show: '30', value: 30 },
    { show: '35', value: 35 },
    { show: '40', value: 40 },
    { show: '45', value: 45 },
    { show: '50', value: 50 },
    { show: '55', value: 55 },
  ];
  amPm = ['am', 'pm'];

  selectContact(selected) {
    if (selected.c_id === this.contactInfo.c_id) {
      return;
    } else {
      if (this.savedContacts !== null && this.savedContacts !== undefined) {
        for (let contact of this.savedContacts) {
          if (contact.c_id === selected.c_id) {
            this.contactInfo.c_id = contact.c_id;
            this.contactInfo.c_info = null;
            this.contactInfo.allActivities = null;
            this.contactInfo.pastActivities = null;
            this.contactInfo.currentActivities = null;
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
          // set ID first
          this.contactInfo.c_id = body.data.contact_info.c_id;
          // reset the rest of the info
          this.contactInfo.c_info = null;
          this.contactInfo.allActivities = null;
          this.contactInfo.pastActivities = null;
          this.contactInfo.currentActivities = null;
          
          // set contact info
          this.contactInfo.c_info = body.data.contact_info;
          this.getContactActivities(data);
        }
      );
    }
  }
  
  getContactActivities(data) {
    // get activities from server
    this.httpService.getRequest('getContactActivities', data, this.accountService.getToken()).subscribe(
      (aResponse: Response) => {
        let aBody = aResponse.json();
        if(aBody.status == 123) {
          // set all activities
          this.contactInfo.allActivities = aBody.data.activities;
          // seperate and sort the current activities
          this.contactInfo.currentActivities = this.sortByDate(this.getCurrActivities(this.contactInfo.allActivities));
          // seperate and sort the past activities
          this.contactInfo.pastActivities = this.sortByDate(this.getPastActivities(this.contactInfo.allActivities));
          // save the currect activity
          this.savedContacts.push(this.contactInfo);
        } else if(aBody.status == 124) {
          this.contactInfo.allActivities = [];
          this.contactInfo.currentActivities = [];
          this.contactInfo.pastActivities = [];
          this.savedContacts.push(this.contactInfo);
        }
      }
    )
  }

  getActivities() {
    return this.contactInfo.allActivities;
  }

  // Get users list of contacts
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

  // return observable of contact list
  getContactList$(): Observable<any> {
    return this.contactList$;
  }
  
  // return only past activities
  getPastActivities(activityList) {
    let pastAct = [];
    for(let i = 0; i < activityList.length; i++) {
      if(activityList[i].event_date < this.d.getTime()) {
        pastAct.push(activityList[i]);
      }
    }
    return pastAct;
  }
  
  // return only future activities
  getCurrActivities(activityList) {
    let currAct = [];
    for(let i = 0; i < activityList.length; i++) {
      if(activityList[i].event_date > this.d.getTime()) {
        currAct.push(activityList[i]);
      }
    }
    return currAct;
  }
  
  // sort activity list by date
  sortByDate(contactList) {
    let sortedList;
    if(contactList) {
      sortedList = contactList.sort((a: any, b: any) => {
          if (b.event_date < a.event_date) {
            return -1;
          } else if (b.event_date > a.event_date) {
            return 1;
          } else {
            return 0;
          }
      }); 
    }
    return sortedList;
  }

  // create and edit contact
  createContact(contact, edit) {
    let endpoint;
    console.log(contact);
    let newContact = {
      c_id: contact.c_id,
      created_milli: this.d.getTime(),
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
    
    // set endpoint based on whether contact is being created or edited
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
  
  // create and edit activity
  createActivity(activity, edit) {
    console.log(activity);
    let endpoint;
    let curDate = new Date();
    let newActivity = {
      c_id: this.contactInfo.c_id,
      atype_id: activity.atype_id,
      a_id: activity.a_id,
      activity_name: activity.activity_name,
      event_date: activity.event_date,
      notes: activity.notes,
      completed: activity.completed
    }
    
    // set endpoint to create or edit activity
    if (edit) {
      endpoint = 'updateActivity';
    } else {
      endpoint = 'createActivity';
    }
    
    this.httpService.getRequest(endpoint, newActivity, this.accountService.getToken()).subscribe(
      (response: Response) => {
        let body = response.json();
        console.log(body);
        // todo: update activity info
        this.getContactActivities({c_id: this.contactInfo.c_id});
      }
    )
  }
  
  deleteActivity(a_id) {
    let param = {
      a_id: a_id
    }
    this.httpService.getRequest('deleteActivity', param, this.accountService.getToken()).subscribe(
      (response: Response) => {
        let body = response.json();
        console.log(body);
        this.getContactActivities({c_id: this.contactInfo.c_id});
      }
    )
  }

  constructor(private httpService: HttpService, private accountService: AccountService) {
    this.savedContacts = [];
    this.httpService.tempGetRequest('getActivityTypes', this.accountService.getToken()).subscribe(
      (response: Response) => {
        let body = response.json();
        if(body.status == 137) {
          this.activityTypes = body.data.activity_types;
          this.activityTypes.sort((a, b) => a.atype_id < b.atype_id ? -1 : a.atype_id > b.atype_id ? 1 : 0);
          console.log(this.activityTypes);
        }
      }
    )
  }
}
