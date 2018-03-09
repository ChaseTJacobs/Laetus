import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import {ModalComponent} from '../../modal-template/modal/modal.component';
import { NrmService } from '../../../services/nrm/nrm.service';

@Component({
  selector: 'app-nrm-contact-activities',
  templateUrl: './nrm-contact-activities.component.html',
  styleUrls: ['./nrm-contact-activities.component.css']
})
export class NrmContactActivitiesComponent implements OnInit {

  d = new Date();
  searchInput = '';
  searchParam = [
    'type',
    'contact',
    'location',
    'description'
  ];
  private activities: any[];
  private showActivity:boolean = true;
  private currentActivities: any[];
  private pastActivities: any[];

  sortByDate() {
    this.pastActivities.sort((a: any, b: any) => {
        if (b.aDate < a.aDate) {
          return -1;
        } else if (b.aDate > a.aDate) {
          return 1;
        } else {
          return 0;
        }
    });
    this.currentActivities.sort((a: any, b: any) => {
        if (b.aDate < a.aDate) {
          return -1;
        } else if (b.aDate > a.aDate) {
          return 1;
        } else {
          return 0;
        }
    });
  }

  toggleActivity() {
    this.showActivity = !this.showActivity;
  }

  addActivity() {
    const modalRef = this.modalService.open({edit: false, title: 'activity'});
  }

  getActivities() {
    this.activities = this.nrmService.getActivities();
    for(let i = 0; i < this.activities.length; i++) {
      if(this.activities[i].aDate < this.d.getTime()) {
        this.pastActivities.push(this.activities[i]);
      } else {
        this.currentActivities.push(this.activities[i]);
      }
    }
    this.sortByDate();
  }

  constructor(private nrmService: NrmService, private datePipe: DatePipe, private modalService: ModalComponent) {
    this.pastActivities = [];
    this.currentActivities = [];
    this.getActivities();
  }

  ngOnInit() {
  }

}
