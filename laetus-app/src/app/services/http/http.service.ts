import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HttpService {

  getRequest(endpoint: string, param: any) {
    const headers = new Headers({'Authorization': 'insert JWT here!!!'})
	 return this.http.post('https://www.joyfulnetworking.com/' + endpoint, param, {headers: headers});
  }
 
  constructor(private http: Http) { 

  }

}
