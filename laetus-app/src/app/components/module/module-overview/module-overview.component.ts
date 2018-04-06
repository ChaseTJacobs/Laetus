import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../../../services/module/module.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-module-overview',
  templateUrl: './module-overview.component.html',
  styleUrls: ['./module-overview.component.css']
})
export class ModuleOverviewComponent implements OnInit {
  
  setInterested(mod_id) {
    
  }
  
  goToModule(mod_id) {
    this.moduleService.getModule(mod_id);
    this.router.navigate(['/module']);
  }

  constructor(private moduleService: ModuleService, private router: Router) { 
    if (this.moduleService.modules == undefined) {
      this.moduleService.getModuleList()
    }
  }

  ngOnInit() {
  }

}
