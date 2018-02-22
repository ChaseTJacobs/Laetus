import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../../../services/auth/account.service';


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
  regex = new RegExp('^(([^<>()\\[\\]\\.,;:\s@"]+(\\.[^<>()\\[\\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$', 'igm');
  // const regex = new RegExp('^\\w+([\.-]?\\w+)*@\\w+([\.-]?\\w+)*(\.\\w{2,3})+$', 'igm');


  constructor(private fb: FormBuilder, private acctSvc: AccountService) {
    this.rForm = fb.group({
      'firstname': [null, Validators.required],
      'lastname': [null],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'email': [null, Validators.compose([Validators.pattern(this.regex), Validators.required])],
      'confirmPass': [null, Validators.required],
    });
  }

  ngOnInit() {
    // this.rForm.get('validate').valueChanges.subscribe(
    //   (validate) => {
    //     if (validate === '1') {
    //       this.rForm.get('firstname').setValidators([Validators.required, Validators.minLength(3)]);
    //     }
    //   }
    // );
  }

  registerUser(user) {
    this.acctSvc.register(user);
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










}
