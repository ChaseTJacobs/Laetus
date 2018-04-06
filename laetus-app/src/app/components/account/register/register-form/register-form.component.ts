import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../../../services/auth/account.service';
import { PaymentService } from '../../../../services/payment/payment.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  rForm: FormGroup;
  post: any;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPass: string;
  valid_email: boolean;
  regex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$/, 'igm');
  user: any;

  constructor(private fb: FormBuilder, private acctSvc: AccountService, public paySvc: PaymentService) {
  
    this.rForm = fb.group({
      'firstname': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'email': [null, Validators.compose([Validators.required, Validators.pattern(this.regex)])],
      'confirmPass': [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  testEmail() {
    console.log(this.regex);
  }
  
  submitUserInfo(user) {
    
    let userName = user.firstname.split(' ');
    console.log(userName);
    this.firstname = userName[0];
    if (userName.length === 2) {
      this.lastname = userName[1];
    }
    this.user = {
      firstname: userName[0],
      lastName: userName[1],
      email: user.email,
      password: user.password
    }
    
    this.acctSvc.setUserInfo(this.user);
    this.acctSvc.verifyEmail(user.email);
  }

  invalidInput(control) {
    // console.log(this.rForm.controls[control].errors);
    if (control !== 'undefined') {
      return !this.rForm.controls[control].valid && this.rForm.controls[control].dirty;
    } else {
      return;
    }
  }

  matchPass() {
    if (this.rForm.controls['password'].valid && this.rForm.controls['password'].dirty
      && this.rForm.controls['confirmPass'].dirty && this.rForm.controls['password'].value !== this.rForm.controls['confirmPass'].value) {
      return true;
    } else {
      return false;
    }
  }

  registerUser(user) {
    this.acctSvc.register(user);
  }

}

