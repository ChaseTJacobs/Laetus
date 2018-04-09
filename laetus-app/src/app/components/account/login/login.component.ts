import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/auth/account.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  post: any;
  username: string;
  password: string;
  resStatus: any;
  errorMessage: string = '';
  loginStatus:Subscription;
  forgotPass: any;
  userEmail = null;
  token = null;
  email = null;
  newPass = null;
  showPass = false;

  constructor(private acctSvc: AccountService, private fb: FormBuilder) {
    this.loginForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
    });
    this.loginStatus = acctSvc.getStatus().subscribe(data => {
      if(data == 150 || data == null) {
        this.errorMessage = null;
      } else if(data == 250) {
        this.errorMessage = 'Invalid Credentials';
      } else {
        this.errorMessage = 'Database Error. Please try again later.';
      }
    })
  }
  
  loginRequest(form) {
    this.resStatus = this.acctSvc.login(form.username, form.password);
    return;
  }

  forgotPassword() {
    this.acctSvc.setUserInfo(this.userEmail, true);
    this.acctSvc.emailToken(this.userEmail);
  }
  
  verifyEmail() {
    this.acctSvc.confirmEmail(this.token, true);
  }
  
  confirmPassReset() {
    this.acctSvc.updateForgotPass(this.email, this.newPass);
  }
  
  setForgotPass(pass) {
    this.forgotPass = pass;
  }

  ngOnInit() {
    
  }
}
