import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class HttpService {
  //loggin flag
  public token = {
    header: null,
    data: null,
    sig: null
  }
  
  login(): Observable<boolean> {
    return Observable.of(true).delay(1000);
  }

  logout(): void {
    this.token = null;
  }
  
  constructor() { }

}
