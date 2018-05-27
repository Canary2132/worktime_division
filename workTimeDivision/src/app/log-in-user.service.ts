import { Injectable } from '@angular/core';
import {User} from "./log-in/user";

@Injectable()
export class LogInUserService {
  private loginedUser:User;
  constructor() { }

  logInUser(user){
    sessionStorage.setItem('user', user.login);
    sessionStorage.setItem('managerRights', user.manager);
    this.loginedUser.login = user.login;
    this.loginedUser.manager = user.manager;
  }

  static logOutUser(){
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('managerRights');
   // this.loginedUser = undefined;
  }

  getLoginedUser(){
    return this.loginedUser;
  }
}
