import { Component, OnInit } from '@angular/core';
import { NrmService } from '../../../services/nrm/nrm.service';
import { ModalComponent } from '../../modal-template/modal/modal.component';

@Component({
  selector: 'app-nrm-contact-info',
  templateUrl: './nrm-contact-info.component.html',
  styleUrls: ['./nrm-contact-info.component.css']
})
export class NrmContactInfoComponent implements OnInit {

  showInfo: boolean = true;

  toggleInfo() {
    this.showInfo = !this.showInfo;
  }

  constructor(public nrmService: NrmService, public modalService: ModalComponent) { }

  ngOnInit() {
  }

  openModal(contactInfo) {
    const modalRef = this.modalService.open({edit: true, title: 'contact', info: contactInfo});
  }

}
