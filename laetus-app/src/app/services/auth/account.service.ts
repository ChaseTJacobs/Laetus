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
  private paToken = null; // preliminary token
  private raToken = null; // restricted access token
  private sToken = null; // all access token
  private moduleChange = new BehaviorSubject<any>(null);
  public confirmForm = false;
  public errorMessage = null;
  public paymentForm = false;
  /* rPass is to keep track of where we are at in the reset password process: 0 = beginning; 1 = confirmation token sent to email; 2 = email confirmed; 3 = new password saved to database */
  public rPass = 0;
  public redirectUrl = null;
  public uInfo = null;
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
  ];

  login(email: string, pass: string) {
    let param = { email: email, password: pass };
    let resStatus = null;
    console.log(param);
    this.httpService.getRequest('login', param, null).subscribe(
      (response: Response) => {
        console.log(response);
        let body = response.json();
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
        console.log(resStatus);
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

  /* changePassword() is for changing a password from the account settings page */
  changePassword(reqBody) {
    return (this.httpService.getRequest('changePassword', reqBody, this.getToken()));
  }
  
  /* confirmEmail() takes the 8 character token that was sent to the users email and verifies that it is the correct token associated with that email. The isResetPass parameter is for us to know if we should create an account upon a successful response, or move along in the reset password process. */
  confirmEmail(token, isResetPass) {
    let param = {
      email: this.uInfo.email,
      token: token
    };
    this.httpService.getRequest('confirmEmail', param, this.paToken).subscribe((response: Response) => {
      console.log(response);
      let resp = response.json();
      if (resp.status === 225) {
         this.errorMessage = "The email you are trying to register with is already in use with another account.";
      } else {
        this.raToken = JSON.parse(JSON.stringify(response.headers)).authorization[0];
        if(!isResetPass) {
          if (this.uInfo !== null){
            this.paymentForm = true;
          } else { 
            console.log("Could not find users information.");
        };
      } else {
        this.rPass = 2;
      }
      
    }
    )
  }
  
  createAccount(stripe_token) {
    let param = {
      email: this.uInfo.email,
      password: this.uInfo.password,
      user_info: {
        firstname: this.uInfo.firstname,
        lastname: this.uInfo.lastname
      },
      stripe_token: stripe_token
    };
    this.httpService.getRequest('createAccount', param, this.raToken).subscribe(
          (response: Response) => {
            console.log(response);
            let res = response.json();
            if (res.status === 211) {
              this.errorMessage = "The email you are trying to register with is already in use with another account.";
            } else {
            this.sToken = JSON.parse(JSON.stringify(response.headers)).authorization[0];
            this.storage.set(STORAGE_KEY, JSON.stringify(this.sToken));
            this.loggedInUserToken.next(this.sToken);
            this.routeTo('home')
            }
          },
          (error) => console.log('ERROR')
      );
  }
  /* updateForgotPass() allows the user to set a new password after verifying their email.*/
  updateForgotPass(email, password) {
    console.log(this.raToken);
    let param = {
      email: email,
      new_password: password,
    };
    this.httpService.getRequest('updateForgotPass', param, this.raToken).subscribe((response: Response) => {
      let res = response.json();
      this.sToken = JSON.parse(JSON.stringify(response.headers)).authorization[0];
      this.storage.set(STORAGE_KEY, JSON.stringify(this.sToken));
      this.loggedInUserToken.next(this.sToken);
      this.rPass = 3;
      setTimeout(() => {
        this.router.navigate(['/home']);  
      }, 3000);
      
    });
  }
  
  getUserInfo() {
    return (this.httpService.tempGetRequest('getUserInfo', this.getToken()));
  }
  updateUserInfo(reqBody) {
    return (this.httpService.getRequest('updateUserInfo', reqBody, this.getToken()));
  }
  getUser(): Observable<any> {
    return this.loggedInUserToken.asObservable();
  }
  getStatus(): Observable<any> {
    return this.loggedInStatus.asObservable();
  }
  
  getModuleChange(): Observable<any> {
    return this.moduleChange.asObservable();
  }

  /*sends an 8 character token to their email for email verification and forgot password*/
  emailToken(email, isResetPass) {
    let param = {
      email: email
    };
    this.httpService.getRequest('emailToken', param, null).subscribe(
      (response: Response) => {
        let emailRes = response.json();
        this.paToken = JSON.parse(JSON.stringify(response.headers)).authorization[0];
        this.setVerifyEmail(true);
        if(isResetPass) {
          this.rPass = 1;
        } else {
          return;
        }
      }
    )
  }
  
  /* Sets the confirmForm boolean so that the register-body page shows the correct form when registering (if false: shows the user information form. If true: shows the verify email form.)*/
  setVerifyEmail(isSet) {
    this.confirmForm = isSet;
  }
  
  /* Takes the users information from the register page and holds onto it until they have verified their email and their account can be created. If isResetPass is true, we only worry about the email. */
  setUserInfo(user, isResetPass) {
    if(!isResetPass) {
    this.uInfo = {
      email: user.email,
      password: user.password, 
      userInfo: {
        firstname: user.firstname, 
        lastname: user.lastname
      }
    }
    } else {
      this.uInfo = {
        email: user
      }
    }
  }
  
  routeTo(dest) {
    this.router.navigate(['/' + dest]);
  }
  goToQuiz(){
    this.router.navigate(['/quiz']);
  }
  
  submitQuiz(answers){
    let recommendedModules = this.recommendedModules(answers);
    console.log(recommendedModules);
    this.quizResults = answers;
    console.log(recommendedModules);
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
                recommended: 1
              }
            } else {
              data = {
                mod_id: modList[j].mod_id,
                recommended: 0
              }
            }
            this.httpService.getRequest('updateMyModules', data, this.getToken()).subscribe(
              (response2: Response) => {
                this.moduleChange.next(1);
              }
            )
          }
        }
      )
      this.httpService.tempGetRequest('getUserInfo', this.getToken()).subscribe(
      (response: Response) => {
        let res = response.json();
//        let data = {
//          user_info: JSON.parse(res.data.user_info)
//        }
        
        let data = {
          user_info: {
            quizResults: null,
            recommendedModules: null,
            takenQuiz: false
          }
        }
        data.user_info.quizResults = answers;
        data.user_info.recommendedModules = recommendedModules;
        data.user_info.takenQuiz = true;
        this.httpService.getRequest('updateUserInfo', data, this.getToken()).subscribe(
          (quizRez: Response) => {
            let res2 = quizRez.json();
          }
        )
      }
    )
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

  /*
    Remember:
    - "tempGetRequest" = GET
    - "getRequest" = POST
  */

    
  constructor(private httpService: HttpService, private router: Router, @Inject(LOCAL_STORAGE) private storage: StorageService) { }

  ngOnInit() {

  }

}
