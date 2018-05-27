import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  user:string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.user = this.route.snapshot.params['user']
  }

}
