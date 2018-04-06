import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../services/auth/account.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  verify_code = null;
  
  constructor(private acctSvc: AccountService) {
  
  }

  ngOnInit() {
  }
  
  verifyEmail(){
    console.log(this.verify_code);
    if (this.verify_code !== null) {
      this.acctSvc.register(this.verify_code)
      console.log("Send the code to the email service");
    }
  }

}
