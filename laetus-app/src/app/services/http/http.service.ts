import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HttpService {
  
  public token = {
    header: null,
    data: null,
    sig: null
  }

  
  public sToken: string;
  
  getRequest(endpoint: string, param: any) {
    //this is called from the login, and sets a token
    this.setJWT("not null");
    console.log(this.sToken);
    return this.http.post('http://www.joyfulnetworking.com:3002/' + endpoint, param);
  }
  
  setJWT(token: string) {
    this.sToken = token;
  }
  
  getJWT(){
    console.log("token is : " + this.sToken);
    if(this.sToken === null){
      return false;
    } else {
      return true;
    }
  }

  logout() {
    this.sToken = null;
  }
  
  constructor(private http: Http) { 
    this.sToken = null;
  }

}
