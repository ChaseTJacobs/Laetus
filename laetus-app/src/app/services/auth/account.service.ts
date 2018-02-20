import { Inject, Injectable } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

const STORAGE_KEY = '8127';

@Injectable()
export class AccountService implements OnInit {
 
  private loggedInUserToken = new BehaviorSubject<any>(null);
  private loggedInStatus = new BehaviorSubject<any>(null);
  private sToken = null;
  public redirectUrl = null;

  login(email: string, pass: string) {
    let param = { email: email, pass: pass };
    let resStatus = null;
    this.httpService.getRequest('login', param).subscribe(
      (response: Response) => {
        let body = response.json();
        resStatus = body.status;
        if(body.status == 150){     
          this.sToken = JSON.parse(JSON.stringify(response.headers)).authorization[0];
          console.log(this.sToken);
          this.storage.set(STORAGE_KEY, JSON.stringify(this.sToken));
          this.loggedInUserToken.next(this.sToken);
          if(this.redirectUrl == null || this.redirectUrl == undefined){
            this.redirectUrl = '/home';
          }
          this.router.navigate([this.redirectUrl]);
        }
        this.loggedInStatus.next(resStatus);
      },
      (error) => console.log(error)
    );
  }
  
  logout() {
    this.sToken = null;
    this.loggedInUserToken.next(null);
    this.storage.remove(STORAGE_KEY);
    this.router.navigate(['/landing']);
  }
  
  getToken() {
    return this.sToken;
  }
  
  isLoggedIn() {
    let tempToken = this.storage.get(STORAGE_KEY);
    // will need to update in order to check expiration date
    if(tempToken != null) {
      console.log("temp token: ");
      console.log(tempToken);
      this.sToken = JSON.parse(tempToken);
      this.loggedInUserToken.next(this.sToken);
      return true;
    }
    if(this.sToken != null) {
      return true;
    } else {
      return false;
    }
  }

  getUser(): Observable<any> {
    return this.loggedInUserToken.asObservable();
  }
  
  getStatus(): Observable<any> {
    return this.loggedInStatus.asObservable();
  }

  register(user) {
    let param = { 
      email: user.email, 
      pass: user.password, 
      userInfo: {
        firstName: user.firstname, 
        lastName: user.lastname
      }
    };
    console.log(param);
    this.httpService.getRequest('createAccount', param).subscribe(
      (response: Response) => {
        let res = response.json();
        this.sToken = JSON.parse(JSON.stringify(response.headers)).authorization[0];
        this.storage.set(STORAGE_KEY, JSON.stringify(this.sToken));
        this.loggedInUserToken.next(this.sToken);
        this.router.navigate(['/home']);
      },
        (error) => console.log('ERROR')
    );
  }
  
  constructor(private httpService: HttpService, private router: Router, @Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit() {

  }

}
