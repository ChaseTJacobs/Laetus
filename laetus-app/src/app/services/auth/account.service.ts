import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AccountService implements OnInit {

  private loggedInUserToken = new BehaviorSubject<any>(null);
  private sToken = null;
  public redirectUrl = null;

  login(email: string, pass: string) {
    let param = { email: email, pass: pass };
    this.httpService.getRequest('login', param).subscribe(
      (response: Response) => {
        this.sToken = JSON.parse(JSON.stringify(response.headers));
        this.loggedInUserToken.next(this.sToken);
        if(this.redirectUrl == null || this.redirectUrl == undefined){
          this.redirectUrl = '/home';
        }
        this.router.navigate([this.redirectUrl]);
      },
      (error) => console.log(error)
    );
    return this.loggedInUserToken;
  }
  
  logout() {
    this.sToken = null;
    this.loggedInUserToken.next(null);
    this.router.navigate(['/landing']);
  }
  
  getToken() {
    return this.sToken;
  }
  
  isLoggedIn() {
    if(this.sToken != null) {
      return true;
    } else {
      return false;
    }
  }

  getUser(): Observable<any> {
    return this.loggedInUserToken.asObservable();
  }

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {

  }

}
