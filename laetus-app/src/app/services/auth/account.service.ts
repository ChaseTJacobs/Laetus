import { Inject, Injectable } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';

const STORAGE_KEY = '8127';

@Injectable()
export class AccountService implements OnInit {

  private loggedInUserToken = new BehaviorSubject<any>(null);
  private loggedInStatus = new BehaviorSubject<any>(null);
  private sToken = null;
  public redirectUrl = null;
  public quizResults = null;
  public quizQuestions = [
    {
      id: 0,
      question: 'What is your primary motivation to find an internship?',
      answers: [
        'Get experience in a specific type of job role',
        'I need an internship to fulfill graduation requirements',
        'I want to get started in a specific company',
        'I need an internship in a specific geographic location'
               ]
    },
    {
      id: 1,
      question: 'Are you looking for internships in a specific geographic location?',
      answers: [
        'Yes',
        'No'
      ]
    },
    {
      id: 2,
      question: 'Have you already determined ideal companies to intern with?',
      answers: [
        'Yes',
        'No'
      ]
    },
    {
      id: 3,
      question: 'Do you know what role you’d like to fill in an internship?',
      answers: [
        'Yes',
        'No'
      ]
    },
    {
      id: 4,
      question: 'Do you need an internship to fulfill graduation requirements?',
      answers: [
        'Yes',
        'No'
      ]
    },
    {
      id: 5,
      question: 'Would you like to improve your professional relationship building (or networking) skills? (This is the best way to get internships.)',
      answers: [
        'Yes',
        'No'
      ]
    },
    {
      id: 6,
      question: 'Would you like to learn how to navigate the online internship application process more effectively?',
      answers: [
        'Yes',
        'No'
      ]
    },
    {
      id: 7,
      question: 'Would you like to learn how to nail job/internship interviews?',
      answers: [
        'Yes',
        'No'
      ]
    }
  ]

  login(email: string, pass: string) {
    let param = { email: email, password: pass };
    let resStatus = null;
    console.log(param);
    this.httpService.getRequest('login', param, null).subscribe(
      (response: Response) => {
        let body = response.json();
        resStatus = body.status;
        if(body.status == 110){
          this.sToken = JSON.parse(JSON.stringify(response.headers)).authorization[0];
          console.log(this.sToken);
          this.storage.set(STORAGE_KEY, JSON.stringify(this.sToken));
          this.loggedInUserToken.next(this.sToken);
          if(this.redirectUrl == null || this.redirectUrl == undefined){
            this.redirectUrl = '/home';
          }
          this.router.navigate([this.redirectUrl]);
        }
        this.loggedInStatus.next(resStatus);
      },
      (error) => console.log(error)
    );
  }
  
  logout(sendToLogin) {
    this.sToken = null;
    this.loggedInUserToken.next(null);
    this.storage.remove(STORAGE_KEY);
    if(sendToLogin) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/landing']);  
    }
  }
  
  getToken() {
    return this.sToken;
  }
  
  isLoggedIn() {
    let tempToken = this.storage.get(STORAGE_KEY);
    // will need to update in order to check expiration date
    if(tempToken != null) {
      this.sToken = JSON.parse(tempToken);
      this.loggedInUserToken.next(this.sToken);
      return true;
    }
    if(this.sToken != null) {
      return true;
    } else {
      return false;
    }
  }

  getUser(): Observable<any> {
    return this.loggedInUserToken.asObservable();
  }
  
  getStatus(): Observable<any> {
    return this.loggedInStatus.asObservable();
  }

  register(user) {
    let param = { 
      email: user.email, 
      password: user.password, 
      userInfo: {
        firstName: user.firstname, 
        lastName: user.lastname
      }
    };
    console.log(param);
    this.httpService.getRequest('createAccount', param, null).subscribe(
      (response: Response) => {
        let res = response.json();
        this.sToken = JSON.parse(JSON.stringify(response.headers)).authorization[0];
        this.storage.set(STORAGE_KEY, JSON.stringify(this.sToken));
        this.loggedInUserToken.next(this.sToken);
        this.router.navigate(['/home']);
      },
        (error) => console.log('ERROR')
    );
  }
  
  goToQuiz(){
    this.router.navigate(['/quiz']);
  }
  
  submitQuiz(answers){
    let recommendedModules = this.recommendedModules(answers);
    console.log(recommendedModules);
    this.quizResults = answers;
    if (this.sToken == null || this.sToken == undefined) {
      
    } else {
      this.httpService.tempGetRequest('getModuleList', this.getToken()).subscribe(
        (response: Response) => {
          let res = response.json()
          let modList = res.data;
          for(let j = 0; j < modList.length; j++) {
            let modIndex = recommendedModules.indexOf(modList[j].module_number)
            let data = {};
            if (modIndex > -1) {
              data = {
                mod_id: modList[j].mod_id,
                completed: 1
              }
            } else {
              data = {
                mod_id: modList[j].mod_id,
                completed: 0
              }
            }
            this.httpService.getRequest('updateMyModules', data, this.getToken()).subscribe(
              (response2: Response) => {
                console.log(response2);
              }
            )
          }
        }
      )
      
//      this.httpService.tempGetRequest('getUserInfo', this.getToken()).subscribe(
//      (response: Response) => {
//        let res = response.json();
//        let data = {
//          user_info: JSON.parse(res.data.user_info)
//        }
//        data.user_info.quizResults = answers;
//        data.user_info.recommendedModules = recommendedModules;
//        this.httpService.getRequest('updateUserInfo', data, this.getToken()).subscribe(
//          (quizRez: Response) => {
//            let res2 = quizRez.json();
//            console.log(res2);
//          }
//        )
//        console.log(res);
//      }
//    )
    }
    console.log(answers);
  }
  
  saveAnswers() {
    
  }
  
  recommendedModules(quizResults) {
    console.log(quizResults);
    let recommendedMods = []
    if(quizResults[1] == 0) {
      recommendedMods.push(1);
    }
    if(quizResults[2] == 0) {
      recommendedMods.push(2);
    }
    if(quizResults[3] == 0) {
      recommendedMods.push(3);
    }
    if(quizResults[5] == 0) {
      recommendedMods.push(4);
      recommendedMods.push(5);
      recommendedMods.push(6);
      recommendedMods.push(7);
      recommendedMods.push(9);
    }
    if(quizResults[6] == 0) {
      recommendedMods.push(8);
    }
    if(quizResults[7] == 0) {
      recommendedMods.push(10);
    }
    return recommendedMods;
  }
  
  constructor(private httpService: HttpService, private router: Router, @Inject(LOCAL_STORAGE) private storage: StorageService) { }

  ngOnInit() {

  }

}
