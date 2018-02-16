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

  constructor(private accountService: AccountService, private fb: FormBuilder) {
    this.loginForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
    });
  }

  ngOnInit() {
    
  }

  loginRequest(form) {
    this.accountService.login(form.username, form.password).subscribe(data => {
      console.log(data);
    })
    return;
  }

  forgotPassword() {
    return;
  }
}
