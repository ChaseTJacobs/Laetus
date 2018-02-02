import { Injectable } from '@angular/core';
import { CanActivate }    from '@angular/router';

@Injectable()
export class AuthguardService {

  canActivate() {
    
    /*
    if(verified){
      return true;
    } else {
      return false;
    }
    
    */
    console.log('Authguard CanActivate called');
    return true;
  }
  constructor() { }

}
