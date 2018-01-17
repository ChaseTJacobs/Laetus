import { Component, OnInit } from '@angular/core';
import { Contact } from '../../services/classes/contact';
import { ContactService } from '../../services/contact.service';
import { Response } from '@angular/http';

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
    //this.contact = this.contactService.getContact(0);
      // This stuff could/should go in a event listener, like a button.
      this.contactService.getAllContacts().subscribe(
        (response: Response) => {
            const res = response.json();
            console.log(res)
            // put something from res in this.contact
        },
        (error) => console.log(error)
      );
  }

}
