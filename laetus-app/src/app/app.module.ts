import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ModuleDisplayComponent } from './components/module-display/module-display.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

 // Any angular object MUST be put into this
 // file in order to work in the rest of the app
@NgModule({
  declarations: [ // Components go here
    AppComponent, HeaderComponent, ModuleDisplayComponent, RegisterComponent, HomeComponent
  ],
  imports: [      // Modules go here
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'module-test',
        component: ModuleDisplayComponent
      },
      {
        path: '**',
        component: HomeComponent
      }
    ])
  ],
  providers: [],  // Services go here
  bootstrap: [AppComponent]
})
export class AppModule { }
