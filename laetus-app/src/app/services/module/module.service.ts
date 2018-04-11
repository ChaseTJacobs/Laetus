import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../../services/http/http.service';
import { AccountService } from '../../services/auth/account.service';
import { Router } from '@angular/router';


@Injectable()
export class ModuleService {
  
  modules = [];
  private currentModule = new BehaviorSubject<any>(null);  
  
  getModuleList() {
    this.httpService.tempGetRequest('getModuleList', this.accountService.getToken()).subscribe(
      (response: Response) => {
        let res = response.json();
        console.log(res);
        if (res.status == 142) {
          res.data.sort(function(a,b) {
            return (a.module_number > b.module_number) ? 1 : ((b.module_number > a.module_number) ? -1 : 0);
          });
          this.getUserModStatus(res.data);
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
  
  getUserModStatus(tempMods) {
    this.httpService.tempGetRequest('getUserModStatus', this.accountService.getToken()).subscribe(
      (response: Response) => {
        let res = response.json();
        for (let i = 0; i < res.data.length; i++) {
          for(let j = 0; j < tempMods.length; j++) {
            if (res.data[i].m_id == tempMods[j].mod_id) {
              if(res.data[i].recommended) {
                tempMods[j].recommended = 1;
              }
              if(res.data[i].completed) {
                tempMods[j].completed = 1;
              }
              if(res.data[i].in_progress) {
                tempMods[j].in_progress = 1;
              }
              if(res.data[i].interested) {
                tempMods[j].interested = 1;
              }
            }
          }
        }
        this.modules = tempMods;
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
          let tempMod = JSON.parse(res.data.module_content);
          tempMod.mod_id = mod_id;
          console.log(tempMod);
          this.currentModule.next(tempMod);
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
  
  completeModule(mod_id) {
    let params = {
      mod_id: mod_id,
      completed: 1
    }
    this.httpService.getRequest('updateMyModules', params, this.accountService.getToken()).subscribe(
      (response: Response) => {
        let res = response.json();
        console.log(res);
        this.getModuleList();
        this.router.navigate(['/module-index']);
      }
    )
  }
  
  getCurrModule(): Observable<any> {
    return this.currentModule.asObservable();
  }

  constructor(private httpService: HttpService, private accountService: AccountService, private router: Router) {
    this.accountService.getModuleChange().subscribe(data => {
      if (data == 1) {
        this.getModuleList();
      }
    })
  }

}
