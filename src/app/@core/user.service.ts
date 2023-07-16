import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { userLogin, userSignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isUserLoggedIn = new BehaviorSubject<boolean>(false);

  isError = new EventEmitter<boolean>(false);

  constructor(private _http:HttpClient, private router:Router) { }


  reloadUser(){
    if(localStorage.getItem("userData")){
      this.router.navigate(['user-profile']);
    }
  }

  signUp(data:userSignUp){
    this._http.post("http://localhost:3000/userSignUp", data, {observe:"response"}).subscribe((result:any)=>{
      if(result){
        this.isUserLoggedIn.next(true);
        localStorage.setItem("userData", JSON.stringify(result.body));
        this.router.navigate(['user-login']);
      } else {
        this.isError.emit(true);
      }
    });
  }

  login(res:userLogin){
    this._http.get<userSignUp[]>(`http://localhost:3000/userSignUp?email=${res.email}&password=${res.password}`, 
    {observe:'response'}).subscribe((data:any)=>{
       if(data && data.body.length){
        this.isUserLoggedIn.next(true);
        this.isError.emit(false);
        localStorage.setItem("userData", JSON.stringify(data.body));
        this.router.navigate(['user-profile']);
       }else {
        this.isError.emit(true);
      }

    });
  }

}
