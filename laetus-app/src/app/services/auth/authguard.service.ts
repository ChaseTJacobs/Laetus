import { Injectable } from '@angular/core';
import { CanActivate,
         Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot
}    from '@angular/router';
import { AccountService } from './account.service';

@Injectable()
export class AuthguardService implements CanActivate {
constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {  
    let url: string = state.url;
    console.log('Authguard CanActivate called');
    return true;
    //return this.checkLogin(url);
  }
/*
  checkLogin(url: string): boolean {
    if (this.accountService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.accountService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
  */
}
