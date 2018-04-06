import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/auth/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

takenQuiz: boolean = false;
moduleList: {
  number: string,
  completed: boolean,
  link: string
  }[] = [
      {number: "1", completed: false, link: "first"},
      {number: "2", completed: false, link: "first"},
      {number: "3", completed: false, link: "first"},
      {number: "4", completed: false, link: "first"},
      {number: "5", completed: false, link: "first"},
      {number: "6", completed: false, link: "first"},
      {number: "7", completed: false, link: "first"},
      {number: "8", completed: false, link: "first"},
      {number: "9", completed: false, link: "first"},
      {number: "10", completed: false, link: "first"},
      {number: "11", completed: false, link: "first"},
      {number: "12", completed: false, link: "first"},
    ];

  takeQuiz(){
    this.accountService.goToQuiz();
  }
  constructor(private accountService: AccountService) { 

  }

  ngOnInit() {
    
  }

}
