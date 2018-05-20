import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./log-in/user";

@Injectable()
export class LoggerService {

  constructor(private http:HttpClient) { }

  postUserData(user:User){
    const body = {login:user.login, password:user.password};
    return this.http.post('http://localhost:8080/api',body);
  }
}
