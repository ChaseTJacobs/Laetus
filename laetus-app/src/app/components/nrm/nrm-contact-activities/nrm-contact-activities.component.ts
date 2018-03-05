import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

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

  private showActivity:boolean = true;
  
  private currentActivities: any[];
  
  private pastActivities: any[]
  
  sortByDate() {
    this.pastActivities.sort((a: any, b: any) => {
        if (b.aDate < a.aDate) {
          return -1;
        } else if (b.aDate > a.aDate) {
          return 1;
        } else {
          return 0;
        }
      })
    this.currentActivities.sort((a: any, b: any) => {
        if (b.aDate < a.aDate) {
          return -1;
        } else if (b.aDate > a.aDate) {
          return 1;
        } else {
          return 0;
        }
      })
  }
  
  toggleActivity() {
    this.showActivity = !this.showActivity;
  }
  
  addActivity() {
    console.log('Activity Added!');
  }
  
  getActivities() {
    let activities = [
      {
        id: 1,
        type: 'Covfefe',
        contact: 'Donald Trump',
        aDate: 1519856054000,
        location: 'Trump Hotal, NYC',
        description: 'Everyone that needs to know what it means, knows what it means, and thats all Im gonna say about the matter. Next question #fakenews'
      },
      {
        id: 1,
        type: 'Phone Call',
        contact: 'John Cena',
        aDate: 1519943054000,
        location: 'digital',
        description: 'Call or visit online at the WWW.SUUUUUUUPERSLAM.COM'
      },
      {
        id: 1,
        type: 'Job Interview',
        contact: 'Loki, God of Trickery',
        aDate: 1519743054000,
        location: 'Asgard',
        description: 'Not so sure about this. Wish me luck'
      },
      {
        id: 1,
        type: 'Informational Interview',
        contact: 'Tom Foolery',
        aDate: 1519845054000,
        location: '345 Ask Questions Lane',
        description: 'Quick talk with Tom about his current position'
      },
      {
        id: 1,
        type: 'Coffee Date',
        contact: 'Your Mom',
        aDate: 1529843054000,
        location: 'Your moms place',
        description: 'lololol Im in 3rd grade.'
      },
      {
        id: 1,
        type: 'Finish this page',
        contact: 'Nim Uleam',
        aDate: 1521507876141,
        location: 'STC Room 225',
        description: 'GIT ER DUUUUN'
      },
    ];
    for(let i = 0; i < activities.length; i++) {
      if(activities[i].aDate < this.d.getTime()) {
        this.pastActivities.push(activities[i]);
      } else {
        this.currentActivities.push(activities[i]);
      }
    }
    this.sortByDate();
  }

  constructor(private datePipe: DatePipe) {
    this.pastActivities = [];
    this.currentActivities = [];
    this.getActivities();
  }

  ngOnInit() {
  }

}
