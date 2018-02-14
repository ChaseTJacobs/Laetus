import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Injectable()
export class AccountService implements OnInit {

  login(email: string, pass: string) {
    let param = { email: email, pass: pass };
    let sToken;
    this.httpService.getRequest('login', param).subscribe(
      (response: Response) => {
        sToken = JSON.parse(JSON.stringify(response.headers));
        this.httpService.setJWT(sToken.authorization[0]);
      },
      (error) => console.log(error)
    );
  }

  register(user) {
    let param = { username: user.email, password: user.password, firstName: user.fname, lastName: user.lname };
    console.log('User Registered Successfully');
    console.log(user);
    // this.httpService.getRequest('createAccount', param).subscribe(
    //   (response: Response) => {
    //     console.log('User Registered Successfully!');
    //   },
    //   (error) => console.log('ERROR')
    // );
  }
  constructor(private httpService: HttpService) { }

  ngOnInit() {

  }

}
