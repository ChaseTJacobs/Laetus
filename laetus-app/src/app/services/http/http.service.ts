import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HttpService {

  getRequest(endpoint: string, param: any, sToken: string) {
    const headers = new Headers({'Authorization': sToken});
    return this.http.post('https://www.joyfulnetworking.com/' + endpoint, param, {headers: headers});
  }
  
  tempGetRequest(endpoint: string, sToken: string) {
    const headers = new Headers({'Authorization': sToken});
    return this.http.get('https://www.joyfulnetworking.com/' + endpoint, {headers: headers});
  }
 
  constructor(private http: Http) { 

  }

}
