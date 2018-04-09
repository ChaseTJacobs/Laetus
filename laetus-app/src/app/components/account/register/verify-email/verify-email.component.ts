import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../services/auth/account.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  token = null;

  constructor(private acctSvc: AccountService) {

  }

  ngOnInit() {
  }

  verifyEmail() {
    console.log(this.token);
    if (this.token !== null) {
      this.acctSvc.confirmEmail(this.token, false);
    }
  }
}
