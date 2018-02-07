// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ModuleDisplayComponent } from './components/module-display/module-display.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';

// Services
import { ContactService } from './services/contact.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterFormComponent } from './components/register/register-form/register-form.component';
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
    component: RegisterComponent
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
    AppComponent, HeaderComponent, ModuleDisplayComponent, RegisterComponent, HomeComponent, LandingComponent, LoginComponent, RegisterFormComponent,
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
