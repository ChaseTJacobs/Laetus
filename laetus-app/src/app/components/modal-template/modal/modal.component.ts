import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ngbd-modal-content',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class NgbdModalContent {
  @Input() edit;
  @Input() title;
  @Input() message;
  contactInfo: FormGroup;
  activityInfo: FormGroup;
  fName: string;
  lName: string;
  org: string;
  url: string;
  phone: string;
  notes: string;


  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {
    console.log(new Date());
    console.log(this.title);
    this.contactInfo = fb.group({
      'fName': [null, Validators.required],
      'lName': [null, Validators.required],
      'org': [null],
      'url': [null],
      'phone': [null],
      'notes': [null]
    });

    this.activityInfo = fb.group({
      'aName': [null, Validators.required],
      'org': [null],
      'url': [null],
      'phone': [null],
      'aNotes': [null]
    });

  }
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

@Injectable()
export class ModalComponent implements OnInit {

  constructor(private modalService: NgbModal) {

  }

  public open(params) {
    const modalRef = this.modalService.open(NgbdModalContent);
    const modal = modalRef.componentInstance;
    modal.edit = params.edit;
    modal.title = params.title;
    modal.message = params.edit ? 'Edit' : 'Create';
    modal.message += params.title === 'contact' ? ' Contact' : ' Activity';
  }

  ngOnInit() {
  }

  createContact(contactInfo) {
    console.log(contactInfo);

  }

}