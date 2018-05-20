import { Component, OnInit } from '@angular/core';
import {LoggerService} from "../logger.service";
import {User} from "./user";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  providers:[LoggerService]
})
export class LogInComponent implements OnInit {

  user:User = new User();
  receivedUser:User;


  constructor(private loggerService:LoggerService) { }

  submit(user:User){
    this.loggerService.postUserData(user)
      .subscribe(
        (data:User)=>{this.receivedUser = data;},
        error => console.log(error)
      )
  }
  ngOnInit() {
  }

}
