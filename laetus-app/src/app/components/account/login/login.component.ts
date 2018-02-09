import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/auth/account.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AccountService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  post: any;
  username: string;
  password: string;

  constructor(private accountService: AccountService, private fb: FormBuilder) {
    this.loginForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
    });
  }

  ngOnInit() {
  }

  login(form) {
    this.accountService.login(form.username, form.password);
    this.username = form.username;
    this.password = form.password;
    return;
  }

  forgotPassword() {
    return;
  }
}
