import { Component, OnInit } from '@angular/core';
import { AccountService } from '../app/services/auth/account.service';
import { HttpService } from '../app/services/http/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Joyful Networking';
  
  ngOnInit() {
    return;
  }
  
  constructor(private accountService: AccountService, private httpService: HttpService) {
    
  }
}



