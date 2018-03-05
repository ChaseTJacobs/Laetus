import { Component, OnInit } from '@angular/core';
import {ModalComponent} from '../modal-template/modal/modal.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private modalService: ModalComponent) { }

  ngOnInit() {
    console.log("Landing Init");
  }

  open() {
    const modalRef = this.modalService.open({edit: false, title: 'contact'});
  }

}
