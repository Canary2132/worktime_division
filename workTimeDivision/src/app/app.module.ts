import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import {LoggerService} from "./logger.service";

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
