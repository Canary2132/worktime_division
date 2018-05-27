import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {LoggerService} from "../logger.service";
import {User} from "./user";
import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms';
import {Router} from "@angular/router";


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {

  user:User = new User();
  receivedUser:User;
  alert = '';

  @Output() accessEvent = new EventEmitter<boolean>();

  constructor(public loggerService:LoggerService, private router:Router) { }

  submit(user:User){
    this.loggerService.postUserData(user)
      .subscribe(
        (usersData)=>{
          if(usersData) {
            this.logInUser(usersData);
            this.redirectToUsersPage(usersData);
          }
          else
            this.alert = "wrong login or password ";
        })
  }

  ngOnInit() {

  }

  redirectToUsersPage(usersData){
    if(usersData.manager){
      this.router.navigate(['/main/managerPage', usersData.login]);
    } else this.router.navigate(['/main//userPage', usersData.login]);
  }


  logInUser(usersData){
    this.receivedUser = usersData;
    sessionStorage.setItem('user', usersData.login);
    sessionStorage.setItem('managerRights', usersData.manager);
    console.log(sessionStorage);
    this.alert = '';
   // this.accessEvent.emit(this.receivedUser.manager);
  }

}
