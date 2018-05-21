import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {LoggerService} from "../logger.service";
import {User} from "./user";
import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {

  user:User = new User();
  receivedUser:User;

  @Output() accessEvent = new EventEmitter<boolean>();

  constructor(public loggerService:LoggerService) { }

  submit(user:User){
    this.loggerService.postUserData(user)
      .subscribe(
        (data:User)=>{
          this.receivedUser = data;
          this.accessEvent.emit(this.receivedUser[0].manager);
        } )
  }
  ngOnInit() {
  }

}
