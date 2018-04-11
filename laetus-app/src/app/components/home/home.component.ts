import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/auth/account.service';
import { ModuleService } from '../../services/module/module.service';
import { NrmService } from '../../services/nrm/nrm.service';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http/http.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  takenQuiz: boolean = false;
  todaysMilli = null;

  takeQuiz(){
    this.accountService.goToQuiz();
  }
  
  goToPage(url) {
    this.router.navigate([url]);
  }
  
  goToModule(mod_id) {
    this.moduleService.getModule(mod_id);
    this.router.navigate(['/module']);
  }
  
  constructor(public accountService: AccountService, public moduleService: ModuleService, public nrmService: NrmService, public router: Router, public httpService: HttpService) {
    let tempDate = new Date();
    this.todaysMilli = tempDate.getTime();
    this.moduleService.getModuleList();
    this.nrmService.getAllActivities();
    this.httpService.tempGetRequest('getUserInfo', this.accountService.getToken()).subscribe(
      (response: Response) => {
        let body = response.json();
        let uInfo = JSON.parse(body.data.user_info);
        this.takenQuiz = uInfo.takenQuiz;
      }
    )
  }

  ngOnInit() {
    
  }

}
