import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/auth/account.service'

@Component({
  selector: 'app-quiz-body',
  templateUrl: './quiz-body.component.html',
  styleUrls: ['./quiz-body.component.css']
})
export class QuizBodyComponent implements OnInit {

  constructor(public accountService: AccountService) { }

  ngOnInit() {
  }

}
