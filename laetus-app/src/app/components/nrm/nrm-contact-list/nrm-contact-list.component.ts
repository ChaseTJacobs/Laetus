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
    'name',
    'company'
  ];

  private options;
  private optionSelected;

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
      if(data)
      this.contactList = data;
    })
    this.nrmService.getContactList();
  }

  private contactList: any[];
  constructor(private nrmService: NrmService, private modalService: ModalComponent) {
    this.getContactList();
    this.options = [
      {
        show: 'First Name',
        name: 'fName'
      },
      {
        show: 'Last Name',
        name: 'lName'
      },
      {
        show: 'Company',
        name: 'company'
      },
      {
        show: 'Date Created',
        name: ''
      }
    ];
    this.optionSelected = 'fName';
    this.sortList();
  }

  ngOnInit() {
  }

}
