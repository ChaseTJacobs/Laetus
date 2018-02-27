import { Component, OnInit } from '@angular/core';
import { NrmService } from '../../../services/nrm/nrm.service';

@Component({
  selector: 'app-nrm-body',
  templateUrl: './nrm-body.component.html',
  styleUrls: ['./nrm-body.component.css']
})
export class NrmBodyComponent implements OnInit {

  constructor(private nrmService: NrmService) { }

  ngOnInit() {
  }

}
