import { Component, OnInit } from '@angular/core';
import { NrmService } from '../../../services/nrm/nrm.service';

@Component({
  selector: 'app-nrm-contact-info',
  templateUrl: './nrm-contact-info.component.html',
  styleUrls: ['./nrm-contact-info.component.css']
})
export class NrmContactInfoComponent implements OnInit {
  
  private showInfo:boolean = true;
  
  toggleInfo() {
    this.showInfo = !this.showInfo;
  }

  constructor(private nrmService: NrmService) { }

  ngOnInit() {
  }

}
