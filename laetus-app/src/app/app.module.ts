// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ModuleDisplayComponent } from './components/module-display/module-display.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterFormComponent } from './components/account/register/register-form/register-form.component';
import { AccountSettingsComponent } from './components/account/account-settings/account-settings.component';
import { ForgotPassComponent } from './components/account/forgot-pass/forgot-pass.component';
import { RegisterBodyComponent } from './components/account/register/register-body/register-body.component';
import { RegisterPaymentComponent } from './components/account/register/register-payment/register-payment.component';
import { CalendarBodyComponent } from './components/calendar/calendar-body/calendar-body.component';
import { CalendarDayComponent } from './components/calendar/calendar-day/calendar-day.component';
import { CalendarDisplayComponent } from './components/calendar/calendar-display/calendar-display.component';
import { ModuleBodyComponent } from './components/module/module-body/module-body.component';
import { ModuleListComponent } from './components/module/module-list/module-list.component';
import { ModuleOverviewComponent } from './components/module/module-overview/module-overview.component';
import { ModuleGoalsComponent } from './components/module/module-display/module-goals/module-goals.component';
import { ModuleSidebarComponent } from './components/module/module-display/module-sidebar/module-sidebar.component';
import { ModuleViewComponent } from './components/module/module-display/module-view/module-view.component';
import { NrmBodyComponent } from './components/nrm/nrm-body/nrm-body.component';
import { NrmContactActivitiesComponent } from './components/nrm/nrm-contact-activities/nrm-contact-activities.component';
import { NrmContactInfoComponent } from './components/nrm/nrm-contact-info/nrm-contact-info.component';
import { NrmContactListComponent } from './components/nrm/nrm-contact-list/nrm-contact-list.component';
import { NrmContactStatsComponent } from './components/nrm/nrm-contact-stats/nrm-contact-stats.component';
import { NrmCreateActivityComponent } from './components/nrm/nrm-create-activity/nrm-create-activity.component';
import { QuizBodyComponent } from './components/quiz/quiz-body/quiz-body.component';
import { QuizQuestionComponent } from './components/quiz/quiz-question/quiz-question.component';
import { QuizResultsComponent } from './components/quiz/quiz-results/quiz-results.component';
import { StatsToolComponent } from './components/stats-tool/stats-tool.component';

// Services
import { ContactService } from './services/contact.service';
import { AuthguardService } from './services/auth/authguard.service';
import { AccountService } from './services/auth/account.service';
import { CalendarService } from './services/calendar/calendar.service';
import { HttpService } from './services/http/http.service';
import { ModuleService } from './services/module/module.service';
import { NrmService } from './services/nrm/nrm.service';
import { StatService } from './services/stat/stat.service';


const routingObj: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'register',
    component: RegisterBodyComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'module-test',
    component: ModuleDisplayComponent,
    canActivate: [AuthguardService]
  },
  {
    path: '**',
    component: HomeComponent
  }
  ];
 // Any angular object(component??) MUST be put into this
 // file in order to work in the rest of the app
@NgModule({
  declarations: [ // Components go here
    AppComponent, HeaderComponent, ModuleDisplayComponent, HomeComponent, LandingComponent,
    LoginComponent, RegisterFormComponent, AccountSettingsComponent, ForgotPassComponent,
    RegisterBodyComponent, RegisterPaymentComponent, CalendarBodyComponent, CalendarDayComponent, CalendarDisplayComponent,
    ModuleBodyComponent, ModuleListComponent, ModuleOverviewComponent, ModuleGoalsComponent, ModuleSidebarComponent,
    ModuleViewComponent, NrmBodyComponent, NrmContactActivitiesComponent, NrmContactInfoComponent,
    NrmContactListComponent, NrmContactStatsComponent, NrmCreateActivityComponent, QuizBodyComponent, QuizQuestionComponent,
    QuizResultsComponent, StatsToolComponent
  ],
  imports: [      // Modules go here
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(routingObj)
  ],
  providers: [ContactService, AuthguardService, CalendarService, HttpService, ModuleService, NrmService, StatService],  // Services go here
  bootstrap: [AppComponent]
})
export class AppModule { }
