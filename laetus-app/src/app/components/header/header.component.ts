import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Subscription } from 'rxjs/Subscription';
import { AccountService} from '../../services/auth/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  show:boolean = false;
  isLoggedIn:boolean = false;
  loginSub:Subscription;

  toggleCollapse() {
    this.show = !this.show;
  }
  
  closeTab() {
    this.show = false;
  }
  constructor(private httpService: HttpService, private accountService: AccountService) {
    this.loginSub = accountService.getUser().subscribe(data => {
      if(data != null) {
        if(data == accountService.getToken()) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  ngOnInit() {
    
    return;
  }

}
