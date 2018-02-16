import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HttpService {

  getRequest(endpoint: string, param: any) {
    return this.http.post('https://www.joyfulnetworking.com/' + endpoint, param);
  }
 
  constructor(private http: Http) { 

  }

}
