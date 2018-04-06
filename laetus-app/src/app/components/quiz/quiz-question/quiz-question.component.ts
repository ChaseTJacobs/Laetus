import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/auth/account.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css'],
  animations: [
    trigger('q1', [
      state('q1a1', style({
        backgroundColor: '#09A26F'
      })),
      state('q1a2',   style({
        backgroundColor: '#1A8D54'
      })),
      state('q1a3',   style({
        backgroundColor: '#639F8F'
      })),
      state('q1a4',   style({
        backgroundColor: '#11917D'
      })),
      transition('q1a1 => q1a2', animate('200ms ease-in')),
      transition('q1a2 => q1a1', animate('200ms ease-out')),
      transition('q1a2 => q1a3', animate('200ms ease-in')),
      transition('q1a3 => q1a2', animate('200ms ease-out')),
      transition('q1a3 => q1a4', animate('200ms ease-in')),
      transition('q1a4 => q1a3', animate('200ms ease-out'))
    ]),
    trigger('q2', [
      state('q2a1', style({
        backgroundColor: '#EA7D2D'
      })),
      state('q2a2',   style({
        backgroundColor: '#EA432D'
      })),
      transition('q2a1 => q2a2', animate('200ms ease-in')),
      transition('q2a2 => q2a1', animate('200ms ease-out'))
    ]),
    trigger('q3', [
      state('q3a1', style({
        backgroundColor: '#0093FF'
      })),
      state('q3a2',   style({
        backgroundColor: '#5400D9'
      })),
      transition('q3a1 => q3a2', animate('200ms ease-in')),
      transition('q3a2 => q3a1', animate('200ms ease-out'))
    ]),
    trigger('q4', [
      state('q4a1', style({
        backgroundColor: '#EA044C'
      })),
      state('q4a2',   style({
        backgroundColor: '#A2154A'
      })),
      transition('q4a1 => q4a2', animate('200ms ease-in')),
      transition('q4a2 => q4a1', animate('200ms ease-out'))
    ]),
    trigger('q5', [
      state('q5a1', style({
        backgroundColor: '#C42525'
      })),
      state('q5a2',   style({
        backgroundColor: '#702424'
      })),
      transition('q5a1 => q5a2', animate('200ms ease-in')),
      transition('q5a2 => q5a1', animate('200ms ease-out'))
    ]),
    trigger('q6', [
      state('q6a1', style({
        backgroundColor: '#343869'
      })),
      state('q6a2',   style({
        backgroundColor: '#0C0D23'
      })),
      transition('q6a1 => q6a2', animate('200ms ease-in')),
      transition('q6a2 => q6a1', animate('200ms ease-out'))
    ]),
    trigger('q7', [
      state('q7a1', style({
        backgroundColor: '#3FBB5C'
      })),
      state('q7a2',   style({
        backgroundColor: '#2D5236'
      })),
      transition('q7a1 => q7a2', animate('200ms ease-in')),
      transition('q7a2 => q7a1', animate('200ms ease-out'))
    ]),
    trigger('q8', [
      state('q8a1', style({
        backgroundColor: '#7C5EB0'
      })),
      state('q8a2',   style({
        backgroundColor: '#25193A'
      })),
      transition('q8a1 => q8a2', animate('200ms ease-in')),
      transition('q8a2 => q8a1', animate('200ms ease-out'))
    ])
  ]
})
export class QuizQuestionComponent implements OnInit {

  activeQuestion = 1;
  q1Answer = {
    state: 'q1a1',
    answer: 0,
    answers: [
      {
        a: 'Get experience in a specific type of job role',
        color: 'q1a1'
      },
      {
        a: 'I need an internship to fulfill graduation requirements',
        color: 'q1a2'
      },
      {
        a: 'I want to get started in a specific company',
        color: 'q1a3'
      },
      {
        a: 'I need an internship in a specific geographic location',
        color: 'q1a4'
      }
    ],
    size: 3
  };
  q2Answer = {
    state: 'q2a1',
    answer: 0,
    answers: [
      {
        a: 'Yes',
        color: 'q2a1'
      },
      {
        a: 'No',
        color: 'q2a2'
      }
    ],
    size: 1
  };
  q3Answer = {
    state: 'q3a1',
    answer: 0,
    answers: [
      {
        a: 'Yes',
        color: 'q3a1'
      },
      {
        a: 'No',
        color: 'q3a2'
      }
    ],
    size: 1
  };
  q4Answer = {
    state: 'q4a1',
    answer: 0,
    answers: [
      {
        a: 'Yes',
        color: 'q4a1'
      },
      {
        a: 'No',
        color: 'q4a2'
      }
    ],
    size: 1
  };
  q5Answer = {
    state: 'q5a1',
    answer: 0,
    answers: [
      {
        a: 'Yes',
        color: 'q5a1'
      },
      {
        a: 'No',
        color: 'q5a2'
      }
    ],
    size: 1
  };
  q6Answer = {
    state: 'q6a1',
    answer: 0,
    answers: [
      {
        a: 'Yes',
        color: 'q6a1'
      },
      {
        a: 'No',
        color: 'q6a2'
      }
    ],
    size: 1
  };
  q7Answer = {
    state: 'q7a1',
    answer: 0,
    answers: [
      {
        a: 'Yes',
        color: 'q7a1'
      },
      {
        a: 'No',
        color: 'q7a2'
      }
    ],
    size: 1
  };
  q8Answer = {
    state: 'q8a1',
    answer: 0,
    answers: [
      {
        a: 'Yes',
        color: 'q8a1'
      },
      {
        a: 'No',
        color: 'q8a2'
      }
    ],
    size: 1
  };

  previousAnswer(q) {
    if (q.answer === 0) {

    } else {
      q.answer -= 1;
      q.state = q.answers[q.answer].color;
    }
  }

  nextAnswer(q) {
    if (q.answer === q.size) {

    } else {
      q.answer += 1;
      q.state = q.answers[q.answer].color;
    }
  }

  previousQuestion() {
    this.activeQuestion -= 1;
  }
  nextQuestion() {
    this.activeQuestion += 1;
  }
  
  submitQuiz(){
    let answers = [
      this.q1Answer.answer,
      this.q2Answer.answer,
      this.q3Answer.answer,
      this.q4Answer.answer,
      this.q5Answer.answer,
      this.q6Answer.answer,
      this.q7Answer.answer,
      this.q8Answer.answer,
    ]
    this.accountService.submitQuiz(answers);
  }

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

}
