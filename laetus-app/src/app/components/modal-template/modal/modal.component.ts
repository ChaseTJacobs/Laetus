import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NrmService } from '../../../services/nrm/nrm.service';
import { IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'app-ngbd-modal-content',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class NgbdModalContent {
  @Input() edit;
  @Input() title;
  @Input() message;
  @Input() contact = {
    firstname: '',
    lastname: '',
    organization: '',
    url_linkedin: '',
    email: '',
    phone: '',
    position: '',
    mail_address: '',
    notes: '',
    c_id: -1,
  };
  @Input() activity = {
    a_id: -1,
    org: '',
    url: '',
    notes: ''
  };
  
  // hour and date initializers
  model = {
    epoc: -1,
    jsdate: null
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
  // set default hour,minute,ampm
  selectedHour = 12;
  selectedMinute = 0;
  selectAmPm = 'am';

  public contactInfo: FormGroup;
  public activityInfo: FormGroup;
  typeOptions = [];

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private nrm: NrmService) {
    this.typeOptions = this.nrm.activityTypes;
    console.log(this.typeOptions);
    console.log(new Date());
    console.log(this.title);
    this.contactInfo = fb.group({
      'firstname': [null, Validators.required],
      'lastname': [null, Validators.required],
      'organization': [null],
      'url': [null],
      'email': [null],
      'phone': [null],
      'notes': [null],
      'position': [null],
      'address': [null],
    });

    this.activityInfo = fb.group({
      'selectedHour': 12,
      'selectedMinute': 0,
      'selectedAmPm': 'am',
      'type': [this.nrm.activityTypes[0].atype_id],
      'url': [null],
      'notes': [null],
      'other': [null]
    });
  }
  
  displayNigga(){
    console.log(this.activityInfo);
    let temp = this.calcMilli();
    console.log(temp);
  }
  
  // calculate milliseconds given current minute/hour/ampm
  calcMilli() {
    let tempMilli = 0;
    if (this.activityInfo.value.selectedAmPm === 'pm') {
      tempMilli += 43200000;
    }
    if (this.activityInfo.value.selectedHour != 12) {
      tempMilli += (this.activityInfo.value.selectedHour * 3600000); 
    }
    tempMilli += (this.activityInfo.value.selectedMinute * 300000)
    return tempMilli;
  };

  createContact(contact) {
    console.log(contact);
    this.nrm.createContact(contact, false);
    this.activeModal.close('Created Contact');
  }

  editContact(contact) {
    console.log('Edit Contact');
    contact['c_id'] = this.contact.c_id;
    this.nrm.createContact(contact, true);
    this.activeModal.close('Updated Contact');

  }

  createActivity(activity) {
    console.log('Create Activity');
    activity['c_id'] = this.contact.c_id;
    console.log(this.model);
    activity['event_date'] = this.model.jsdate.getTime() + this.calcMilli();
    this.nrm.createActivity(activity, false);
    this.activeModal.close('Created Contact');
  }

  editActivity(activity) {
    console.log('Edit Activity');
    activity['c_id'] = this.contact.c_id;
    activity['a_id'] = this.activity.a_id;
    activity['event_date'] = this.model.epoc;
    this.nrm.createActivity(activity, true);
    this.activeModal.close('Created Contact');
  }
  
  deleteActivity(activity) {
    console.log('Delete Activity');
    this.nrm.deleteActivity(this.activity.a_id);
    this.activeModal.close('Deleted Contact');
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
    if (params.edit) {
      modal.message = 'Edit';
      if (params.info !== null) {
        if(params.title == 'activity') {
          modal.activity = params.info;
        } else {
          modal.contact = params.info;
        }
        console.log(params);
      }
    } else {
      modal.message = 'Create';
    }

    modal.message += params.title === 'contact' ? ' Contact' : ' Activity';
    console.log(params.info);
  }


  ngOnInit() {
  }

}
