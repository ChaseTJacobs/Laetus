import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/auth/account.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
  errorMessage: string;

  constructor(private accountService: AccountService, private fb: FormBuilder) {
    this.loginForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
    });
  }

  ngOnInit() {
    
  }

  loginRequest(form) {
    this.resStatus = this.accountService.login(form.username, form.password);
    if(this.resStatus == 150){
      
    } else if(this.resStatus == 250) {
      this.errorMessage = 'Invalid Credentials';
    } else {
      this.errorMessage = 'Database Error. Please try again later.';
    }
    return;
  }

  forgotPassword() {
    return;
  }
}
