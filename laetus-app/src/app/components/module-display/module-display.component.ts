import { Component, OnInit } from '@angular/core';
import { Contact } from '../../services/classes/contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-module-display',
  templateUrl: './module-display.component.html',
  styleUrls: ['./module-display.component.css'],
  providers: [ContactService]
})

export class ModuleDisplayComponent implements OnInit {
  contact: Contact;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contact = this.contactService.getContact(0);
  }

}