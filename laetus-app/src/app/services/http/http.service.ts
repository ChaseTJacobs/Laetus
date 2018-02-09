import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {
  
  public token = {
    header: null,
    data: null,
    sig: null
  }
  
  private sToken: string = "";
  
  getRequest(endpoint: string, param: any) {
    console.log(param);
    return this.http.post('http://localhost:3002/' + endpoint, param);
  }
  
  setJWT(token: string) {
    this.sToken = token;
  }

  logout(): void {
    this.token = null;
  }
  
  constructor(private http: Http) { }

}
