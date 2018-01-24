import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  rForm: FormGroup;
  post: any;
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';


  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'firstname': [null, Validators.required],
      'lastname': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'email': [null, Validators.required],
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
    this.email = post.email;
  }

}
