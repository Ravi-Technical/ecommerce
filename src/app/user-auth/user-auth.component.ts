import { Component, OnInit } from '@angular/core';
import { UserService } from '../@core/user.service';
import { userSignUp } from '../data-type';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  hideShow:boolean = false;

  errMsg:string = "";

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.reloadUser();
  }

  signupForm(data:userSignUp){
   this.userService.signUp(data);
   this.hideShow = true;
  }

  loginForm(loginData:any){
   this.userService.login(loginData);
   this.userService.isError.subscribe((result)=>{
    this.errMsg = "Email or password don't match please try again!"
   })
  }

  alreadyAccount(){
    this.hideShow = true;
  }

  notAccount(){
    this.hideShow = false;
  }
}
