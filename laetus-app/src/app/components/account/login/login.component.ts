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

  constructor(private accountService: AccountService, private fb: FormBuilder) {
    this.loginForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
    });
    this.loginStatus = accountService.getStatus().subscribe(data => {
      if(data == 150 || data == null) {
        this.errorMessage = null;
      } else if(data == 250) {
        this.errorMessage = 'Invalid Credentials';
      } else {
        this.errorMessage = 'Database Error. Please try again later.';
      }
    })
  }

  ngOnInit() {
    
  }

  loginRequest(form) {
    this.resStatus = this.accountService.login(form.username, form.password);
    return;
  }

  forgotPassword() {
    return;
  }
}
