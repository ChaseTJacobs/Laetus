import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../../../services/module/module.service'
import { HttpService } from '../../../services/http/http.service';
import { AccountService } from '../../../services/auth/account.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-module-overview',
  templateUrl: './module-overview.component.html',
  styleUrls: ['./module-overview.component.css']
})
export class ModuleOverviewComponent implements OnInit {
  
  takenQuiz = false;
  
  setInterested(mod_id, interested) {
    let param = {
      mod_id: mod_id,
      interested: interested
    };
    this.httpService.getRequest('updateMyModules', param, this.accountService.getToken()).subscribe(
      (response: Response) => {
        let res = response.json();
        this.moduleService.getModuleList();
      })
  }
  
  goToModule(mod_id) {
    this.moduleService.getModule(mod_id);
    this.router.navigate(['/module']);
  }

  constructor(public moduleService: ModuleService, public httpService: HttpService, public accountService: AccountService, public router: Router) {
    this.moduleService.getModuleList();
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
