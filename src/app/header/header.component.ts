import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuType:string = 'default';

  sellerName:string = "";

  userName:string = "";

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          //console.log("seller area"); 
          this.menuType = "seller";
          if(localStorage.getItem("seller")){
              let localStore = localStorage.getItem("seller");
              let sellerData = localStore && JSON.parse(localStore)[0];
              this.sellerName = sellerData.name;
          }          
 
         } else if(localStorage.getItem('userData')){
         this.menuType = "user";
         let localStore = localStorage.getItem('userData');
         if(localStore){
          let userStore = JSON.parse(localStore)[0];
          this.userName = userStore.name;
         }
         } else {
          this.menuType = 'default';
        }
      }
    });

  }

  logOut(){
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }

  userLogOut(){
   localStorage.removeItem("userData");
   this.router.navigate(['/']);
  }

}
