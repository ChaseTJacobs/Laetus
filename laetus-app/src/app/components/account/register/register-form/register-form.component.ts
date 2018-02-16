import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    const regex = new RegExp('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$', 'igm');
    this.rForm = fb.group({
      'firstname': [null, Validators.required],
      'lastname': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'email': [null, Validators.compose([Validators.pattern(regex), Validators.required])],
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

  matchPass() {
      if (this.rForm.controls['password'].valid && this.rForm.controls['password'].touched
        && this.rForm.controls['confirmPass'].touched && this.rForm.controls['password'].value !== this.rForm.controls['confirmPass'].value) {
        return true;
      } else {
        return false;
  }










}
