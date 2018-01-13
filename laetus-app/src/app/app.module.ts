import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

 // Any angular object MUST be put into this
 // file in order to work in the rest of the app
@NgModule({
  declarations: [ // Components go here
    AppComponent, HeaderComponent
  ],
  imports: [      // Modules go here
    BrowserModule
  ],
  providers: [],  // Services go here
  bootstrap: [AppComponent]
})
export class AppModule { }
