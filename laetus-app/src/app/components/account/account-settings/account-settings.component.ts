import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/auth/account.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  logout() {
    console.log("this is a log out");
    this.accountService.logout();
  }
  
  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

}
