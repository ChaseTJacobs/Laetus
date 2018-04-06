import { Inject, Injectable } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';

const STORAGE_KEY = '8127';

@Injectable()
export class AccountService implements OnInit {

  private loggedInUserToken = new BehaviorSubject<any>(null);
  private loggedInStatus = new BehaviorSubject<any>(null);
  private sToken = null;
  private paToken = null;
  private raToken = null;
  public redirectUrl = null;
  public confirmForm = false;
  public uInfo = null;

  login(email: string, pass: string) {
    let param = { email: email, password: pass };
    let resStatus = null;
    console.log(param);
    this.httpService.getRequest('login', param, null).subscribe(
      (response: Response) => {
        let body = response.json();
        resStatus = body.status;
        if(body.status == 110){
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

  verifyEmail(email) {
    let param = {
      email: email
    };
    this.httpService.getRequest('emailToken', param, null).subscribe(
      (response: Response) => {
        let emailRes = response.json();
        this.paToken = JSON.parse(JSON.stringify(response.headers)).authorization[0];
        this.setVerifyEmail(true);
      }
    )
  }
  
  setVerifyEmail(isSet) {
    this.confirmForm = isSet;
  }
  
  setUserInfo(user) {
    this.uInfo = {
      email: user.email,
      password: user.password, 
      userInfo: {
        firstName: user.firstname, 
        lastName: user.lastname
      }
    }
  }
  
  register(code) {
    let param = {
      token: code,
      email: this.uInfo.email,
    };
    console.log(param);
    
    this.httpService.getRequest('confirmEmail', param, this.paToken).subscribe(
    (response: Response) => {
      let result = response.json();
      console.log(result);
      console.log(JSON.parse(JSON.stringify(response.headers)));
      this.raToken = JSON.parse(JSON.stringify(response.headers)).authorization[0];
      
      if (this.uInfo !== null){
        this.httpService.getRequest('createAccount', this.uInfo, this.raToken).subscribe(
          (response: Response) => {
            let res = response.json();
            this.sToken = JSON.parse(JSON.stringify(response.headers)).authorization[0];
            this.storage.set(STORAGE_KEY, JSON.stringify(this.sToken));
            this.loggedInUserToken.next(this.sToken);
            this.router.navigate(['/home']);
          },
          (error) => console.log('ERROR')
      );
      } else { 
        console.log("Chase is a turd.")};
    })
  }
    
  constructor(private httpService: HttpService, private router: Router, @Inject(LOCAL_STORAGE) private storage: StorageService) { }

  ngOnInit() {

  }

}
