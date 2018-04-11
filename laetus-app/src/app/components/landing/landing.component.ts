import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/auth/account.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private acctSvc: AccountService) { }

  ngOnInit() {
    console.log("Landing Init");
  }

  open() {
    this.acctSvc.routeTo('quiz');
  }

}
