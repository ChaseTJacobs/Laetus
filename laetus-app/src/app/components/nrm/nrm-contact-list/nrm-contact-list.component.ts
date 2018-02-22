import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nrm-contact-list',
  templateUrl: './nrm-contact-list.component.html',
  styleUrls: ['./nrm-contact-list.component.css']
})
export class NrmContactListComponent implements OnInit {

  private contactList = [
    {
      id: 'id1',
      name: 'James Crook',
      company: 'Joyful Job Search LLC'
    },
    {
      id: 'id3',
      name: 'Games Hook',
      company: 'Toyful Bob Dirtch'
    },
    {
      id: 'id4',
      name: 'Fames Prook',
      company: 'Ployful Knob Birch'
    },
    {
      id: 'id5',
      name: 'Tames Rook',
      company: 'Coyful Cob Kurch'
    },
    {
      id: 'id6',
      name: 'Names Took',
      company: 'Soyful Sob Jertch'
    },
    {
      id: 'id2',
      name: 'Chase Jacobs',
      company: 'Joyful Networking LLC'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
