import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Injectable()
export class AccountService implements OnInit {

  login() {
    this.httpService.getRequest('login').subscribe(
      (response: Response) => {
        const res = response.json();
        // this.httpService.setJWT(res);
        console.log(res);
      },
      (error) => console.log(error)
    );
  }
  constructor(private httpService: HttpService) { }

  ngOnInit() {

  }

}
