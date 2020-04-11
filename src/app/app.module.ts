import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoronaComponent } from './corona/corona.component';
import { FatalityComponent } from './fatality/fatality.component';
import { IndiaComponent } from './india/india.component';

@NgModule({
  declarations: [
    AppComponent,
    CoronaComponent,
    FatalityComponent,
    IndiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
