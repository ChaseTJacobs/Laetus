import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AccountServiceService {

  //loggin flag
  isLoggedIn = false;
  //if they attempt to go to a page before they are authorized, save that page url here so they can be redirected that after login
  redirectUrl: string;
  
  //login(): Observable<boolean> {
  //  return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  //}

  logout(): void {
    this.isLoggedIn = false;
  }
  constructor() { }

}
