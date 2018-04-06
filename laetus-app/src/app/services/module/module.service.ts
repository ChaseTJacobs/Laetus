import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../../services/http/http.service';
import { AccountService } from '../../services/auth/account.service';


@Injectable()
export class ModuleService {
  
  modules = [];
  private currentModule = new BehaviorSubject<any>(null);  
  
  getModuleList() {
    this.httpService.tempGetRequest('getModuleList', this.accountService.getToken()).subscribe(
      (response: Response) => {
        let res = response.json();
        console.log(res.data);
        if (res.status == 142) {
          res.data.sort(function(a,b) {
            return (a.module_number > b.module_number) ? 1 : ((b.module_number > a.module_number) ? -1 : 0);
          });
          console.log(res.data);
          this.modules = res.data;
          this.getUserModStatus();
        } else if (res.status === 295) {
          this.accountService.redirectUrl = '/module';
          this.accountService.logout(true);
        } else if (res.status === 299) {
          this.accountService.redirectUrl = '/module';
          this.accountService.logout(true);
        } else {
          this.accountService.redirectUrl = '/module';
          this.accountService.logout(true);
        }
      }
    );
  };
  
  getUserModStatus() {
    this.httpService.tempGetRequest('getUserModStatus', this.accountService.getToken()).subscribe(
      (response: Response) => {
        let res = response.json();
        console.log(res);
        for (let i = 0; i < res.data.length; i++) {
          for(let j = 0; j < this.modules.length; j++) {
            if (res.data[i].m_id == this.modules[j].mod_id) {
              if(res.data[i].recommended) {
                this.modules[j].recommended = 1;
              }
              if(res.data[i].completed) {
                this.modules[j].completed = 1;
              }
              if(res.data[i].in_progress) {
                this.modules[j].in_progress = 1;
              }
              if(res.data[i].interested) {
                this.modules[j].interested = 1;
              }
            }
          }
        }
        console.log(this.modules);
      }
    )
  }
  
  getModule(mod_id) {
    let param = {
      mod_id: mod_id
    };
    this.httpService.getRequest('getModuleContent', param, this.accountService.getToken()).subscribe(
      (response: Response) => {
        let res = response.json();
        if (res.status == 143) {
          this.currentModule.next(JSON.parse(res.data.module_content));
          console.log(res.data);
        } else if (res.status === 295) {
          this.accountService.redirectUrl = '/module';
          this.accountService.logout(true);
        } else if (res.status === 299) {
          this.accountService.redirectUrl = '/module';
          this.accountService.logout(true);
        } else {
          this.accountService.redirectUrl = '/module';
          this.accountService.logout(true);
        }
      }
    )
  }

  moduleTemplate = [
    {
      moduleNumber: null,
      moduleName: null,
      numOfSteps: null,
      numSSonFinal: null,
      intro: null,
      img: null,
      steps: [
        {
          number: null,
          numSubsteps: null,
          name: null,
          why: null,
          whatLearn: null,
          img: null,
          substeps: [
            {
              title: null,
              number: null,
              introText: null,
              // choose bettween a video
              videoLink: null,
              // or Pictures
              pictures: [
                null
              ],
              // or paragraphs
              paragraphs: [
                {
                  text: null,
                  picture: null
                }
              ],
              // or bulleted lists
              bullets: [
                {
                  title: '',
                  numbered: false,
                  list: [
                    null
                  ],
                  picture: null
                }
              ],
              outroText: null,
            }
          ]
        }
      ]
    }
  ];
  
  getCurrModule(): Observable<any> {
    return this.currentModule.asObservable();
  }

  constructor(private httpService: HttpService, private accountService: AccountService) { 
    this.getModuleList();
  }

}
