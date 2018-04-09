import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ModuleService } from '../../../services/module/module.service'

@Component({
  selector: 'app-module-body',
  templateUrl: './module-body.component.html',
  styleUrls: ['./module-body.component.css']
})
export class ModuleBodyComponent implements OnInit {
  
  moduleGetter:Subscription;
  currentModule = null;
  currentStep = null;
  currentSubstep = null;
  currentIndex = {
    step: -1,
    sub: -1
  }
  assetsLink = '../../../../assets/module';
  
  setModule(mod_id) {
    this.moduleService.getModule(mod_id);
    this.currentIndex = {
      step: -1,
      sub: -1
    }
    this.currentSubstep = null;
    this.currentStep = null;
  }
  
  setStep(tempStep) {
    this.currentIndex.step = tempStep.number;
    this.currentIndex.sub = -1;
    this.currentSubstep = null;
    this.currentStep = tempStep;
  }
  
  setSubStep(tempStep, tempSubStep) {
    this.currentIndex = {
      step: tempStep.number,
      sub: tempSubStep.number
    }
    this.currentStep = tempStep;
    this.currentSubstep = tempSubStep;
  }
  
  nextStep() {
    if(this.currentIndex.sub == -1) {
      this.setSubStep(this.currentStep, this.currentStep.substeps[0]);
    } else if (this.currentSubstep) {
      if (this.currentSubstep.number == this.currentStep.numSubsteps - 1) {
        if(this.currentStep.number == this.currentModule.numOfSteps - 1) {
          // next module
        } else {
          this.setStep(this.currentModule.steps[this.currentStep.number + 1])
        }
      } else {
        this.setSubStep(this.currentStep, this.currentStep.substeps[this.currentSubstep.number + 1]);
      }
    }
  }
  
  prevStep() {
    if(this.currentIndex.sub == -1) {
      if(this.currentStep.number != 0) {
        let prevStep = this.currentStep.number - 1;
        this.setSubStep(
          this.currentModule.steps[prevStep], this.currentModule.steps[prevStep].substeps[this.currentModule.steps[prevStep].numSubsteps - 1]);
      }
    } else if (this.currentSubstep) {
      if(this.currentSubstep.number == 0) {
        this.setStep(this.currentStep);
      } else {
        this.setSubStep(this.currentStep, this.currentStep.substeps[this.currentSubstep.number - 1]);
      }
    }
  }
  
  completeModule() {
    this.moduleService.completeModule(this.currentModule.mod_id);
  }

  constructor(private moduleService: ModuleService) { 
    this.moduleGetter = moduleService.getCurrModule().subscribe(data => {
      this.currentModule = data;
    })
  }

  ngOnInit() {
  }

}
