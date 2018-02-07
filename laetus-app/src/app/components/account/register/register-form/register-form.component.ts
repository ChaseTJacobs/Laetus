import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  rForm: FormGroup;
  post: any;
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  confirmPass: string = '';


  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'firstname': [null, Validators.required],
      'lastname': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'email': [null, Validators.required],
      'confirmPass': [null, Validators.required],
      'validate': ''
    });
  }

  ngOnInit() {
    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1'){
          this.rForm.get('firstname').setValidators([Validators.required, Validators.minLength(3)]);
        }
      }
    );
  }

  addPost(post) {
    this.firstname = post.firstname;
    this.lastname = post.lastname;
    this.password = post.password;
    this.confirmPass = post.confirmPass;
    this.email = post.email;

    console.log(post);
  }

}
