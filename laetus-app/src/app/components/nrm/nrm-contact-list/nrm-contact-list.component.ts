import { Component, OnInit } from '@angular/core';
import { NrmService } from '../../../services/nrm/nrm.service';

@Component({
  selector: 'app-nrm-contact-list',
  templateUrl: './nrm-contact-list.component.html',
  styleUrls: ['./nrm-contact-list.component.css']
})
export class NrmContactListComponent implements OnInit {
  
  testCreateContact(){
    this.nrmService.createContact();
  }

  searchInput: string;
  searchParam = [
    'name',
    'company'
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
    if (this.optionSelected == null || this.optionSelected == undefined || this.optionSelected == "") {

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
  
  private contactList = [
    {
      id: 'id1',
      fName: 'James',
      lName: 'Crook',
      company: 'Joyful Job Search LLC'
    },
    {
      id: 'id3',
      fName: 'Games',
      lName: 'Hook',
      company: 'Toyful Bob Dirtch'
    },
    {
      id: 'id4',
      fName: 'Fames',
      lName: 'Prook',
      company: 'Ployful Knob Birch'
    },
    {
      id: 'id5',
      fName: 'Tames',
      lName: 'Rook',
      company: 'Coyful Cob Kurch'
    },
    {
      id: 'id6',
      fName: 'Names',
      lName: 'Took',
      company: 'Soyful Sob Jertch'
    },
    {
      id: 'id2',
      fName: 'Chase',
      lName: 'Jacobs',
      company: 'Joyful Networking LLC'
    }
  ];
  constructor(private nrmService: NrmService) {
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
