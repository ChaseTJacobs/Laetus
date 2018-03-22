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
  todaysDate = new Date();
  dateFormat = {
    year: this.todaysDate.getFullYear(),
    month: this.todaysDate.getMonth() + 1,
    day: this.todaysDate.getDate()
  };
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
    activity_name: '',
    type: this.nrm.activityTypes[0],
    c_id: -1,
    selectedHour: this.hours[0],
    selectedMinute: this.minutes[0],
    selectedAmPm: this.amPm[0],
    completed: false,
    notes: ''
  };
  
  // hour and date initializers
  model = { 
    date: this.dateFormat,
    jsdate: new Date(this.dateFormat.year, this.dateFormat.month - 1, this.dateFormat.day),
    epoc: -1
  };
  // set default hour,minute,ampm
  selectedHour = this.hours[0];
  selectedMinute = this.minutes[0].value;
  selectAmPm = this.amPm[0];

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
      'selectedHour': [null],
      'selectedMinute': [null],
      'selectedAmPm': [null],
      'type': [null],
      'notes': [null],
      'other': [null]
    });
  }
  
  displayNigga(){
    console.log(this.activity);
  }
  
  // calculate milliseconds given current minute/hour/ampm
  calcMilli() {
    let tempMilli = 0;
    if (this.activityInfo.value.selectedAmPm === 'pm') {
      tempMilli += 43200000;
    }
    if (this.activityInfo.value.selectedHour.value != 12) {
      tempMilli += (this.activityInfo.value.selectedHour * 3600000); 
    }
    tempMilli += (this.activityInfo.value.selectedMinute.value * 60000);
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
    console.log(activity);
    activity['c_id'] = this.contact.c_id;
    activity['event_date'] = this.model.jsdate.getTime() + this.calcMilli();
    activity['atype_id'] = activity.type.atype_id;
    activity['activity_name'] = activity.type.activity_type;
    this.nrm.createActivity(activity, false);
    this.activeModal.close('Created Contact');
  }

  editActivity(activity) {
    console.log('Edit Activity');
    activity['c_id'] = this.contact.c_id;
    activity['a_id'] = this.activity.a_id;
    activity['event_date'] = this.model.epoc;
    activity['atype_id'] = activity.type.atype_id;
    activity['activity_name'] = activity.type.activity_type;
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

  constructor(private modalService: NgbModal, private nrm: NrmService) {

  }

  public open(params) {
    const modalRef = this.modalService.open(NgbdModalContent);
    const modal = modalRef.componentInstance;
    modal.edit = params.edit;
    modal.title = params.title;
    console.log(params);
    if (params.edit) {
      modal.message = 'Edit';
      if (params.info !== null) {
        if(params.title == 'activity') {
          for(let type of this.nrm.activityTypes) {
            if (type.atype_id == params.info.atype_id) {
              params.info.type = type;
            }
          }
          let tempDate = new Date(params.info.event_date);
          let tempStartDate = new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate());
          let milliDif = tempDate.getTime() - tempStartDate.getTime();
          if(milliDif >= 43200000) {
            milliDif -= 43200000;
            params.info.selectedAmPm = 'pm';
          } else {
            params.info.selectedAmPm = 'am';
          }
          if(milliDif >= 3600000) {
            params.info.selectedHour = ((milliDif - (milliDif % 3600000)) / 3600000);
            milliDif = (milliDif % 3600000);
          }
          milliDif = milliDif / 60000;
          for (let entry of this.minutes) {
            if(entry.value == milliDif){
              params.info.selectedMinute = entry;
            }
          }
          modal.activity = params.info;
        } else {
          modal.contact = params.info;
        }
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
