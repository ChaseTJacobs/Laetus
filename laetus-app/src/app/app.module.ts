// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ModuleDisplayComponent } from './components/module-display/module-display.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';

// Services
import { ContactService } from './services/contact.service';

 // Any angular object(component??) MUST be put into this
 // file in order to work in the rest of the app
@NgModule({
  declarations: [ // Components go here
    AppComponent, HeaderComponent, ModuleDisplayComponent, RegisterComponent, HomeComponent, LandingComponent
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
  providers: [ContactService],  // Services go here
  bootstrap: [AppComponent]
})
export class AppModule { }
