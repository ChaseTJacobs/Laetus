import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AccountService } from '../../../../services/auth/account.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  providers: [AccountService]
})
export class RegisterFormComponent implements OnInit {

  rForm: FormGroup;
  post: any;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPass: string;


  constructor(private fb: FormBuilder, private acctSvc: AccountService) {
    this.rForm = fb.group({
      'firstname': [null, Validators.required],
      'lastname': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'email': [null, Validators.required],
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

}
