import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NrmService } from '../../../services/nrm/nrm.service';
import { IMyDpOptions } from 'mydatepicker';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-ngbd-modal-content',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class NgbdModalContent {
  todaysDate = new Date();
  dateFormat = {
    year: this.todaysDate.getFullYear(),
    month: this.todaysDate.getMonth(),
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
    selectedHour: this.nrm.hours[0],
    selectedMinute: this.nrm.minutes[0],
    selectedAmPm: this.nrm.amPm[0],
    location: '',
    completed: false,
    notes: '',
    model: null
  };
  
  // hour and date initializers
  model = { 
    date: null,
    jsdate: null,
    epoc: -1
  };

  constructor(public activeModal: NgbActiveModal, public fb: FormBuilder, public nrm: NrmService) {
    this.typeOptions = this.nrm.activityTypes;
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
      'location': [null],
      'type': [null],
      'notes': [null],
      'other': [null]
    });
    
    
  }
  ngAfterViewInit() {
    if(this.activity.model != null) {
      this.model.jsdate = this.activity.model;
    } else {
      this.model.jsdate = new Date(this.dateFormat.year, this.dateFormat.month, this.dateFormat.day); 
    }
  }
  
  public contactInfo: FormGroup;
  public activityInfo: FormGroup;
  typeOptions = [];
  
  // calculate milliseconds given current minute/hour/ampm
  calcMilli() {
    let tempMilli = 0;
    if (this.activityInfo.value.selectedAmPm == 'pm') {
      tempMilli += 43200000;
    }
    if (this.activityInfo.value.selectedHour !== 12) {
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
    activity['c_id'] = this.contact.c_id;
    activity['event_date'] = this.model.jsdate.getTime() + this.calcMilli();
    activity['atype_id'] = activity.type.atype_id;
    if(activity.type.atype_id == 6){
      activity['activity_name'] = activity.other;
    } else {
      activity['activity_name'] = activity.type.activity_type;
    }
    
    this.nrm.createActivity(activity, false);
    this.activeModal.close('Created Contact');
  }

  editActivity(activity) {
    console.log('Edit Activity');
    activity['c_id'] = this.contact.c_id;
    activity['a_id'] = this.activity.a_id;
    activity['event_date'] = this.model.jsdate.getTime() + this.calcMilli();
    activity['atype_id'] = activity.type.atype_id;
    if(activity.type.atype_id == 6){
      activity['activity_name'] = activity.other;
    } else {
      activity['activity_name'] = activity.type.activity_type;
    }
    this.nrm.createActivity(activity, true);
    this.activeModal.close('Created Contact');
  }
  
  deleteActivity(activity) {
    console.log('Delete Activity');
    this.nrm.deleteActivity(this.activity.a_id);
    this.activeModal.close('Deleted Activity');
  }
  
  deleteContact(contact) {
    this.nrm.deleteContact(this.contact.c_id);
    this.activeModal.close('Deleted Contact')
  }
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

@Injectable()
export class ModalComponent implements OnInit {
  
  message;
  title;
  activeModal;

  constructor(public modalService: NgbModal, public nrm: NrmService) {

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
          params.info.other = params.info.activity_name;
          for(let type of this.nrm.activityTypes) {
            if (type.atype_id == params.info.atype_id) {
              params.info.type = type;
            }
          }
          let tempDate = new Date(params.info.event_date);
          let tempStartDate = new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate());
          // set start date for model
          params.info.model =  tempStartDate;
          // find difference from start of day (00:00:00) and time set
          let milliDif = tempDate.getTime() - tempStartDate.getTime();
          // find am or pm
          if(milliDif >= 43200000) {
            milliDif -= 43200000;
            params.info.selectedAmPm = 'pm';
          } else {
            params.info.selectedAmPm = 'am';
          }
          // find number of hours
          if(milliDif >= 3600000) {
            params.info.selectedHour = ((milliDif - (milliDif % 3600000)) / 3600000);
            milliDif = (milliDif % 3600000);
          }
          // find number of minutes
          milliDif = milliDif / 60000;
          // must come from the NRM service to be the same instance
          for (let entry of this.nrm.minutes) {
            if(entry.value == milliDif){
              params.info.selectedMinute = entry;
            }
          }
          if(params.info.selectedHour == undefined){
            params.info.selectedHour = 12;
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
