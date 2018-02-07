import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {
  
  public token = {
    header: null,
    data: null,
    sig: null
  }
  
  login() {
    return this.http.get('http://localhost:3001/');
  }

  logout(): void {
    this.token = null;
  }
  
  constructor(private http: Http) { }

}
