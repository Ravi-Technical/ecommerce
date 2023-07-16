import { Component, OnInit } from '@angular/core';
import { SellerService } from '../@core/seller.service';
import { Router } from '@angular/router';
import { sellLogin, sellSignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
 
  hideShow:boolean = false;

  errorMessage:string = '';

  constructor(private seller:SellerService, private router:Router) { }

  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  signUp(response:sellSignUp):void{
    this.seller.userSignUp(response);
    this.seller.isError.subscribe((err)=>{
      if(err){
        this.errorMessage = "Something went wrong!";
       }
    })
  }
   
  login(data:sellLogin){
    this.seller.userLogin(data);
    this.seller.isError.subscribe((err)=>{
     if(err){
      this.errorMessage = "Email or Password are incorrect!";
     }
    });
  }

  redirectLogin(){
    this.hideShow = true;
  }

  redirectSignUp(){
   this.hideShow = false;
  }

}
