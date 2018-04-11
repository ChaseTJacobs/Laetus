import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/auth/account.service';
import { Response } from '@angular/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {  
  user_info = {};
  u_info_keys = [];
  updatePassForm: FormGroup;
  old_pass: string;
  new_pass: string;

  logout() {
    console.log("this is a log out");
    this.accountService.logout(false);
  }

  changePassRequest(form) {
    let reqBody = {'old_password':form.old_pass, 'new_password':form.new_pass};
    this.accountService.changePassword(reqBody).subscribe(
      (response: Response) => {
        let body = response.json();
        if (body.status < 200)
          console.log("Success!");
        else
          console.log("Failed to change your password!");
      }
    );
  }
  
  updateUserInfo() {
    this.accountService.updateUserInfo(this.user_info).subscribe(
      (response: Response) => {
        let body = response.json();
        if (body.status < 200)
          console.log("Success!");
        else
          console.log("Failed to update User's Info!");
      }
    );
  }
  

  constructor(public accountService: AccountService, public fb: FormBuilder) {
    this.accountService.getUserInfo().subscribe(
      (response: Response) => {
        let body = response.json();
        if (body.status < 200) {
          this.user_info = JSON.parse(body.data.user_info);
          this.user_info["email"] = body.data.email;
          this.u_info_keys = Object.keys(this.user_info);
          console.log(this.user_info);
          console.log(this.u_info_keys);
        }
        
      }
    );
      
    this.updatePassForm = fb.group({
      'old_pass': [null, Validators.required],
      'new_pass': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
    });
    
    
  }

  ngOnInit() {
  }

}
