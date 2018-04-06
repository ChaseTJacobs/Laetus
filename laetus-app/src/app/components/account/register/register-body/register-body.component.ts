import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../services/auth/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register-body.component.html',
  styleUrls: ['./register-body.component.css']
})
export class RegisterBodyComponent implements OnInit {



  constructor(private acctSvc: AccountService) {
  }

  ngOnInit() {

  }

}
