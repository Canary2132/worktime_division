import { Component, OnInit } from '@angular/core';
import {LogInUserService} from "../log-in-user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  user = sessionStorage.getItem('user');
  constructor(private router:Router) { }

  ngOnInit() {
  }

  logOut(){
    LogInUserService.logOutUser();
    this.router.navigate(['']);
  }
}
