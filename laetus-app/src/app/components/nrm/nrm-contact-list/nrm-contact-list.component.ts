import { Component, OnInit } from '@angular/core';
import { NrmService } from '../../../services/nrm/nrm.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-nrm-contact-list',
  templateUrl: './nrm-contact-list.component.html',
  styleUrls: ['./nrm-contact-list.component.css']
})
export class NrmContactListComponent implements OnInit {
  
  testCreateContact(){
    this.nrmService.createContact();
  }

  contactList$:Subscription;
  searchInput: string;
  searchParam = [
    'name',
    'organization'
  ];
  
  private options;
  private optionSelected;
  
  createContact() {
    console.log("Contact Created");
    this.testCreateContact();
  }
  
  onOptionsSelected(event) {
    this.optionSelected = event;
    this.sortList();
  }
  
  sortList() {
    if (this.optionSelected == null || this.contactList == null|| this.contactList === undefined || this.contactList == []) {

    } else {
      this.contactList.sort((a: any, b: any) => {
        if (a[this.optionSelected] < b[this.optionSelected]) {
          return -1;
        } else if (a[this.optionSelected] > b[this.optionSelected]) {
          return 1;
        } else {
          return 0;
        }
      })
    }
  }
  
  getContactList() {
    this.contactList$ = this.nrmService.getContactList$().subscribe(data => {
      this.contactList = data;
      this.sortList();
    })
    this.nrmService.getContactList();
  }
  
  private contactList: any[];
  constructor(private nrmService: NrmService) {
    this.getContactList();
    this.options = [
      {
        show: 'First Name',
        name: 'firstname'
      },
      {
        show: 'Last Name',
        name: 'lastname'
      },
      {
        show: 'Company',
        name: 'organization'
      },
      {
        show: 'Date Created',
        name: ''
      }
    ];
    this.optionSelected = 'firstname';
    this.sortList();
  }

  ngOnInit() {
  }

}
