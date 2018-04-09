import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/auth/account.service';
import { ModuleService } from '../../services/module/module.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  takenQuiz: boolean = false;

  takeQuiz(){
    this.accountService.goToQuiz();
  }
  constructor(private accountService: AccountService, private moduleService: ModuleService) { 
    this.moduleService.getModuleList();
  }

  ngOnInit() {
    
  }

}
