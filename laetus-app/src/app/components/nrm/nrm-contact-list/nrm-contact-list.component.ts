import { Component, OnInit } from '@angular/core';
import { NrmService } from '../../../services/nrm/nrm.service';
import { Subscription } from 'rxjs/Subscription';
import {ModalComponent} from '../../modal-template/modal/modal.component';

@Component({
  selector: 'app-nrm-contact-list',
  templateUrl: './nrm-contact-list.component.html',
  styleUrls: ['./nrm-contact-list.component.css']
})
export class NrmContactListComponent implements OnInit {

  contactList$:Subscription;
  searchInput: string;
  searchParam = [
    'firstname',
    'lastname',
    'organization'
  ];

  options;
  optionSelected;

  createContact() {
    console.log("Contact Created");
    this.modalService.open({edit: false, title: 'contact'});
  }

  onOptionsSelected(event) {
    this.optionSelected = event;
    this.sortList();
  }

  sortList() {
    if (this.optionSelected == null || this.contactList === undefined || this.contactList == []) {

    } else {
      this.contactList.sort((a: any, b: any) => {
        if (a[this.optionSelected].toLowerCase() < b[this.optionSelected].toLowerCase()) {
          return -1;
        } else if (a[this.optionSelected].toLowerCase() > b[this.optionSelected].toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      })
    }
  }

  getContactList() {
    this.contactList$ = this.nrmService.getContactList$().subscribe(data => {
      if(data){
        this.contactList = data; 
      }
    })
    this.nrmService.getContactList();
  }

  contactList: any[];
  constructor(public nrmService: NrmService, public modalService: ModalComponent) {
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
