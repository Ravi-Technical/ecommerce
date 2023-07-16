import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/@core/user.service';
import { addProductInterface } from 'src/app/data-type';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userInfo:any[] = [];

  userNames:any[] = [];
   
  constructor(private userService:UserService) { }

  ngOnInit(): void {

    let localstore = localStorage.getItem("userData");

    let abc = localstore && JSON.parse(localstore)[0];

    // delete abc.id;

    this.userInfo = Object.values(abc);

    this.userNames = Object.keys(abc);

    console.log(this.userInfo);
     
  }

}
