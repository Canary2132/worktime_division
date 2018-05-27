import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import {ManagerAuthGuard, UserAuthGuard} from "./auth.guard";

import {routing, components} from "./app.routing";
import { AppComponent } from './app.component';
import {LoggerService} from "./logger.service";

@NgModule({
  declarations: [
    AppComponent,
    components,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    LoggerService,
    ManagerAuthGuard,
    UserAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
