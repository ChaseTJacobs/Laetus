import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/auth/account.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css']
})
export class QuizResultsComponent implements OnInit {
  
  routeTo(route) {
    this.router.navigate([route]);
  }

  constructor(public accountService: AccountService, public router: Router) { }

  ngOnInit() {
  }

}
