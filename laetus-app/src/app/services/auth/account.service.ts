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
  constructor(private httpService: HttpService) { }

  ngOnInit() {

  }

}
