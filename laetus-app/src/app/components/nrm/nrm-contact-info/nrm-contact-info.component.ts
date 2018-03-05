import { Component, OnInit } from '@angular/core';
import { NrmService } from '../../../services/nrm/nrm.service';
import {ModalComponent} from '../../modal-template/modal/modal.component';

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

  constructor(private nrmService: NrmService, private modalService: ModalComponent) { }

  ngOnInit() {
  }

  openModal() {
    const modalRef = this.modalService.open('Edit Contact');
  }

}
