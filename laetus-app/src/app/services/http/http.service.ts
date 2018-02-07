import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {
  
  public token = {
    header: null,
    data: null,
    sig: null
  }
  
  getRequest(endpoint: string) {
    return this.http.get('http://localhost:3002/' + endpoint);
  }
  
  setJWT() {
    
  }

  logout(): void {
    this.token = null;
  }
  
  constructor(private http: Http) { }

}
