import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ModalComponent } from '../../modal-template/modal/modal.component';
import { NrmService } from '../../../services/nrm/nrm.service';


@Component({
  selector: 'app-nrm-contact-activities',
  templateUrl: './nrm-contact-activities.component.html',
  styleUrls: ['./nrm-contact-activities.component.css']
})
export class NrmContactActivitiesComponent implements OnInit {
  
  searchInput = '';
  searchParam = [
    'type',
    'contact',
    'location',
    'description'
  ];
  
  showActivity:boolean = true;

  toggleActivity() {
    this.showActivity = !this.showActivity;
  }
  
  openModalEdit(activityInfo) {
    const modalRef = this.modalService.open({edit: true, title: 'activity', info: activityInfo})
  }
  
  openModalCreate() {
    const modalRef = this.modalService.open({edit: false, title: 'activity', info: null})
  }

  constructor(public nrmService: NrmService, public datePipe: DatePipe, public modalService: ModalComponent) {
    
  }

  ngOnInit() {
  }

}
